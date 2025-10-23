import { z } from 'zod';
import { randomUUID } from 'node:crypto';

/**
 * Client type discriminator for event source
 */
export type ClientType =
  | 'jarvis_web'
  | 'dawg_web'
  | 'ios'
  | 'desktop'
  | 'claude'
  | 'chatgpt'
  | 'cv'
  | 'runner';

/**
 * Event type discriminator for all system events
 */
export type EventType =
  | 'conversation.append'
  | 'task.updated'
  | 'memory.upsert'
  | 'file.added'
  | 'presence.update'
  | 'daw.transport'
  | 'daw.session.patch'
  | 'cv.frame.analyzed'
  | 'cv.object.detected'
  | 'cv.ocr.result'
  | 'cv.diff.alert';

/**
 * Actor metadata - who/what generated this event
 */
export interface Actor {
  user_id: string;
  device_id: string;
  client: ClientType;
}

/**
 * Canonical Event Envelope - all events use this structure
 */
export interface EventEnvelope<T = unknown> {
  event_id: string;
  ts: number;
  seq?: number;
  version: 1;
  org_id: string;
  project_id: string;
  thread_id: string;
  actor: Actor;
  type: EventType;
  payload: T;
}

// Zod schemas for runtime validation
export const ActorSchema = z.object({
  user_id: z.string(),
  device_id: z.string(),
  client: z.enum([
    'jarvis_web',
    'dawg_web',
    'ios',
    'desktop',
    'claude',
    'chatgpt',
    'cv',
    'runner',
  ]),
});

export const EventEnvelopeSchema = z.object({
  event_id: z.string(),
  ts: z.number(),
  seq: z.number().optional(),
  version: z.literal(1),
  org_id: z.string(),
  project_id: z.string(),
  thread_id: z.string(),
  actor: ActorSchema,
  type: z.enum([
    'conversation.append',
    'task.updated',
    'memory.upsert',
    'file.added',
    'presence.update',
    'daw.transport',
    'daw.session.patch',
    'cv.frame.analyzed',
    'cv.object.detected',
    'cv.ocr.result',
    'cv.diff.alert',
  ]),
  payload: z.unknown(),
});

/**
 * Helper to create a new event envelope
 */
export function createEventEnvelope<T>(
  params: Omit<EventEnvelope<T>, 'event_id' | 'ts' | 'version'>
): EventEnvelope<T> {
  return {
    event_id: randomUUID(),
    ts: Date.now(),
    version: 1,
    ...params,
  };
}
