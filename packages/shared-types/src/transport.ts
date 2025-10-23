import { z } from 'zod';

/**
 * Record mode for DAW transport
 */
export type RecordMode = 'QuickPunch' | 'TrackPunch' | 'Loop' | 'Destructive';

/**
 * Transport operation payloads
 */
export type TransportPayload =
  | { op: 'play'; at_ms: number; tempo?: number; loop?: boolean }
  | { op: 'record'; mode: RecordMode; preRollMs?: number }
  | { op: 'stop' };

// Zod schemas
export const RecordModeSchema = z.enum([
  'QuickPunch',
  'TrackPunch',
  'Loop',
  'Destructive',
]);

export const TransportPayloadSchema = z.discriminatedUnion('op', [
  z.object({
    op: z.literal('play'),
    at_ms: z.number(),
    tempo: z.number().optional(),
    loop: z.boolean().optional(),
  }),
  z.object({
    op: z.literal('record'),
    mode: RecordModeSchema,
    preRollMs: z.number().optional(),
  }),
  z.object({
    op: z.literal('stop'),
  }),
]);

/**
 * Transport state for FSM
 */
export type TransportState =
  | 'Idle'
  | 'Playing'
  | 'Recording'
  | 'PunchArmed'
  | 'Looping';

export const TransportStateSchema = z.enum([
  'Idle',
  'Playing',
  'Recording',
  'PunchArmed',
  'Looping',
]);
