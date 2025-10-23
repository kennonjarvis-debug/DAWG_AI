import { z } from 'zod';
import { RoutingGraph } from './routing.js';

/**
 * DAW Session CRDT structure
 */
export interface DAWSession {
  project_id: string;
  tracks: Track[];
  clips: Clip[];
  markers: Marker[];
  routing: RoutingGraph;
  mix: MixState;
  settings: SessionSettings;
}

export interface Track {
  id: string;
  name: string;
  type: 'audio' | 'midi' | 'aux' | 'master';
  armed: boolean;
  solo: boolean;
  mute: boolean;
  volume: number;
  pan: number;
  inserts: Insert[];
  sends: Send[];
  inputDeviceId?: string;
  outputDeviceId?: string;
}

export interface Clip {
  id: string;
  track_id: string;
  start_ms: number;
  duration_ms: number;
  offset_ms: number;
  blob_url?: string;
  audio_buffer_id?: string;
}

export interface Marker {
  id: string;
  position_ms: number;
  label: string;
  type: 'section' | 'beat' | 'custom';
}

export interface Insert {
  id: string;
  plugin_id: string;
  enabled: boolean;
  position: 'pre' | 'post';
  params: Record<string, number>;
}

export interface Send {
  id: string;
  destination_id: string;
  level: number;
  position: 'pre' | 'post';
  enabled: boolean;
}

export interface MixState {
  master_volume: number;
  master_pan: number;
}

export interface SessionSettings {
  sample_rate: number;
  buffer_size: number;
  tempo: number;
  time_signature: [number, number];
  loop_enabled: boolean;
  loop_start_ms: number;
  loop_end_ms: number;
}

// Zod schemas
export const InsertSchema = z.object({
  id: z.string(),
  plugin_id: z.string(),
  enabled: z.boolean(),
  position: z.enum(['pre', 'post']),
  params: z.record(z.number()),
});

export const SendSchema = z.object({
  id: z.string(),
  destination_id: z.string(),
  level: z.number(),
  position: z.enum(['pre', 'post']),
  enabled: z.boolean(),
});

export const TrackSchema = z.object({
  id: z.string(),
  name: z.string(),
  type: z.enum(['audio', 'midi', 'aux', 'master']),
  armed: z.boolean(),
  solo: z.boolean(),
  mute: z.boolean(),
  volume: z.number(),
  pan: z.number(),
  inserts: z.array(InsertSchema),
  sends: z.array(SendSchema),
  inputDeviceId: z.string().optional(),
  outputDeviceId: z.string().optional(),
});

export const ClipSchema = z.object({
  id: z.string(),
  track_id: z.string(),
  start_ms: z.number(),
  duration_ms: z.number(),
  offset_ms: z.number(),
  blob_url: z.string().optional(),
  audio_buffer_id: z.string().optional(),
});

export const MarkerSchema = z.object({
  id: z.string(),
  position_ms: z.number(),
  label: z.string(),
  type: z.enum(['section', 'beat', 'custom']),
});

export const SessionSettingsSchema = z.object({
  sample_rate: z.number(),
  buffer_size: z.number(),
  tempo: z.number(),
  time_signature: z.tuple([z.number(), z.number()]),
  loop_enabled: z.boolean(),
  loop_start_ms: z.number(),
  loop_end_ms: z.number(),
});
