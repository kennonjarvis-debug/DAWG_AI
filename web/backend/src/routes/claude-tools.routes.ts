import { Router, Request, Response } from 'express';
import memoryTool from '../services/claude-tools/memory.js';
import { exec } from 'child_process';
import { promisify } from 'util';

const router = Router();
const execAsync = promisify(exec);

/**
 * Claude Tools API
 * Endpoints that Claude/JARVIS can call to interact with DAWG AI
 */

// ============================================================================
// Memory Tool
// ============================================================================

/**
 * POST /api/v1/tools/memory/retrieve
 * Retrieve memory logs with optional filters
 */
router.post('/memory/retrieve', async (req: Request, res: Response) => {
  try {
    const { trackId, type, startDate, endDate, limit, query } = req.body;

    const events = await memoryTool.retrieveMemoryLog({
      trackId,
      type,
      startDate,
      endDate,
      limit,
      query,
    });

    res.json({
      success: true,
      data: {
        events,
        count: events.length,
      },
    });
  } catch (error: any) {
    console.error('[Claude Tools] Memory retrieve error:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to retrieve memory',
    });
  }
});

/**
 * POST /api/v1/tools/memory/summary
 * Get summarized memory logs in natural language
 */
router.post('/memory/summary', async (req: Request, res: Response) => {
  try {
    const { trackId, type, startDate, endDate, limit, query } = req.body;

    const events = await memoryTool.retrieveMemoryLog({
      trackId,
      type,
      startDate,
      endDate,
      limit,
      query,
    });

    const summary = memoryTool.summarizeEvents(events);

    res.json({
      success: true,
      data: {
        summary,
        eventCount: events.length,
        events: events.slice(0, 10), // Include first 10 for reference
      },
    });
  } catch (error: any) {
    console.error('[Claude Tools] Memory summary error:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to generate summary',
    });
  }
});

/**
 * GET /api/v1/tools/memory/today
 * Get today's session summary
 */
router.get('/memory/today', async (req: Request, res: Response) => {
  try {
    const { trackId } = req.query;

    const result = await memoryTool.getTodaysSummary(trackId as string);

    res.json({
      success: true,
      data: result,
    });
  } catch (error: any) {
    console.error('[Claude Tools] Today summary error:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to get today summary',
    });
  }
});

/**
 * GET /api/v1/tools/memory/yesterday/:trackId
 * Get yesterday's changes for a track
 */
router.get('/memory/yesterday/:trackId', async (req: Request, res: Response) => {
  try {
    const { trackId } = req.params;

    const events = await memoryTool.getYesterdaysChanges(trackId);
    const summary = memoryTool.summarizeEvents(events);

    res.json({
      success: true,
      data: {
        summary,
        events,
        count: events.length,
      },
    });
  } catch (error: any) {
    console.error('[Claude Tools] Yesterday changes error:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to get yesterday changes',
    });
  }
});

/**
 * GET /api/v1/tools/memory/errors/:trackId
 * Get all errors for a track
 */
router.get('/memory/errors/:trackId', async (req: Request, res: Response) => {
  try {
    const { trackId } = req.params;

    const events = await memoryTool.getTrackErrors(trackId);

    res.json({
      success: true,
      data: {
        errors: events,
        count: events.length,
      },
    });
  } catch (error: any) {
    console.error('[Claude Tools] Track errors error:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to get track errors',
    });
  }
});

/**
 * GET /api/v1/tools/memory/commands/:trackId
 * Get all Claude commands for a track
 */
router.get('/memory/commands/:trackId', async (req: Request, res: Response) => {
  try {
    const { trackId } = req.params;

    const events = await memoryTool.getClaudeCommands(trackId);

    res.json({
      success: true,
      data: {
        commands: events,
        count: events.length,
      },
    });
  } catch (error: any) {
    console.error('[Claude Tools] Claude commands error:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to get Claude commands',
    });
  }
});

// ============================================================================
// Command Execution
// ============================================================================

/**
 * POST /api/v1/tools/exec
 * Execute shell commands (for JARVIS integration)
 */
router.post('/exec', async (req: Request, res: Response) => {
  try {
    const { command, cwd = '/Users/benkennon/DAWG_AI' } = req.body;

    if (!command) {
      return res.status(400).json({
        success: false,
        error: 'Missing required field: command',
      });
    }

    console.log(`[Command Exec] Running: ${command}`);
    console.log(`[Command Exec] CWD: ${cwd}`);

    const { stdout, stderr } = await execAsync(command, {
      cwd,
      shell: '/bin/zsh',
      maxBuffer: 10 * 1024 * 1024, // 10MB
      timeout: 300000, // 300 seconds (5 minutes)
    });

    console.log(`[Command Exec] Success`);

    res.json({
      success: true,
      data: {
        stdout: stdout.trim(),
        stderr: stderr.trim(),
        command,
        cwd,
      },
    });
  } catch (error: any) {
    console.error('[Command Exec] Error:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Command execution failed',
      stderr: error.stderr || '',
      stdout: error.stdout || '',
    });
  }
});

// ============================================================================
// Tool Schema Registry
// ============================================================================

/**
 * GET /api/v1/tools/schema
 * Get all available Claude tool schemas
 */
router.get('/schema', (req: Request, res: Response) => {
  const tools = [
    {
      name: 'retrieveMemoryLog',
      description: 'Query memory events from the DAWG AI system for plugin actions, Claude chats, errors, or user input. Use this to answer user questions about what happened during a mixing session.',
      input_schema: {
        type: 'object',
        properties: {
          trackId: {
            type: 'string',
            description: 'The track ID to filter memory logs (optional)',
          },
          type: {
            type: 'string',
            enum: ['plugin', 'chat', 'error', 'system', 'command', 'track', 'session'],
            description: 'The memory event type to filter',
          },
          startDate: {
            type: 'string',
            format: 'date-time',
            description: 'Start of date range in ISO 8601 format',
          },
          endDate: {
            type: 'string',
            format: 'date-time',
            description: 'End of date range in ISO 8601 format',
          },
          limit: {
            type: 'integer',
            description: 'Maximum number of events to return (default: 50)',
          },
          query: {
            type: 'string',
            description: 'Natural language search query (optional)',
          },
        },
        required: [],
      },
    },
    {
      name: 'getMemorySummary',
      description: 'Get a natural language summary of memory events. Returns a human-readable summary instead of raw JSON.',
      input_schema: {
        type: 'object',
        properties: {
          trackId: {
            type: 'string',
            description: 'The track ID to summarize',
          },
          type: {
            type: 'string',
            enum: ['plugin', 'chat', 'error', 'system', 'command'],
            description: 'Filter by event type',
          },
          startDate: {
            type: 'string',
            format: 'date-time',
            description: 'Start of date range',
          },
          endDate: {
            type: 'string',
            format: 'date-time',
            description: 'End of date range',
          },
        },
        required: [],
      },
    },
    {
      name: 'getTodaysSummary',
      description: "Get a summary of today's mixing session including plugin actions, Claude chats, and errors.",
      input_schema: {
        type: 'object',
        properties: {
          trackId: {
            type: 'string',
            description: 'Optional track ID to filter results',
          },
        },
        required: [],
      },
    },
  ];

  res.json({
    success: true,
    data: {
      tools,
      count: tools.length,
    },
  });
});

export default router;
