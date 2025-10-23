import { z } from 'zod';
import { Insert, Send } from './session.js';

/**
 * Routing graph node types
 */
export type NodeType = 'Track' | 'Bus' | 'Aux' | 'Master' | 'VCA';

/**
 * Routing graph structure for validation and mutation
 */
export interface RoutingGraph {
  nodes: RoutingNode[];
  edges: RoutingEdge[];
}

export interface RoutingNode {
  id: string;
  type: NodeType;
  inserts: Insert[];
  sends: Send[];
  metadata?: RoutingNodeMetadata;
}

export interface RoutingNodeMetadata {
  latency_ms?: number;
  channel_count?: number;
  color?: string;
  position?: { x: number; y: number };
}

export interface RoutingEdge {
  id: string;
  from: string;
  to: string;
  channel_layout: string;
  latency_hint_ms: number;
}

/**
 * Validation result for routing graph
 */
export interface RoutingValidation {
  valid: boolean;
  errors: RoutingError[];
}

export interface RoutingError {
  code: 'CYCLE_DETECTED' | 'INVALID_CHANNEL_WIDTH' | 'MISSING_NODE' | 'FAN_IN_LIMIT' | 'FAN_OUT_LIMIT';
  message: string;
  node_ids?: string[];
}

// Zod schemas
export const NodeTypeSchema = z.enum(['Track', 'Bus', 'Aux', 'Master', 'VCA']);

export const RoutingNodeMetadataSchema = z.object({
  latency_ms: z.number().optional(),
  channel_count: z.number().optional(),
  color: z.string().optional(),
  position: z.object({ x: z.number(), y: z.number() }).optional(),
});

export const RoutingEdgeSchema = z.object({
  id: z.string(),
  from: z.string(),
  to: z.string(),
  channel_layout: z.string(),
  latency_hint_ms: z.number(),
});

export const RoutingErrorSchema = z.object({
  code: z.enum(['CYCLE_DETECTED', 'INVALID_CHANNEL_WIDTH', 'MISSING_NODE', 'FAN_IN_LIMIT', 'FAN_OUT_LIMIT']),
  message: z.string(),
  node_ids: z.array(z.string()).optional(),
});
