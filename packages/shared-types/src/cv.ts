import { z } from 'zod';

/**
 * Computer Vision event payloads
 */
export interface CVFrameAnalyzed {
  frame_id: string;
  timestamp: number;
  hash: string;
  objects?: CVObject[];
  text?: CVText[];
  caption?: string;
}

export interface CVObject {
  label: string;
  confidence: number;
  bbox: [number, number, number, number]; // [x, y, width, height]
}

export interface CVText {
  text: string;
  confidence: number;
  bbox: [number, number, number, number];
}

export interface CVDiffAlert {
  frame_id: string;
  prev_frame_id: string;
  diff_score: number; // 0-1, higher = more different
  threshold: number;
  changed_regions?: Array<[number, number, number, number]>;
}

// Zod schemas
export const CVObjectSchema = z.object({
  label: z.string(),
  confidence: z.number().min(0).max(1),
  bbox: z.tuple([z.number(), z.number(), z.number(), z.number()]),
});

export const CVTextSchema = z.object({
  text: z.string(),
  confidence: z.number().min(0).max(1),
  bbox: z.tuple([z.number(), z.number(), z.number(), z.number()]),
});

export const CVFrameAnalyzedSchema = z.object({
  frame_id: z.string(),
  timestamp: z.number(),
  hash: z.string(),
  objects: z.array(CVObjectSchema).optional(),
  text: z.array(CVTextSchema).optional(),
  caption: z.string().optional(),
});

export const CVDiffAlertSchema = z.object({
  frame_id: z.string(),
  prev_frame_id: z.string(),
  diff_score: z.number().min(0).max(1),
  threshold: z.number(),
  changed_regions: z.array(z.tuple([z.number(), z.number(), z.number(), z.number()])).optional(),
});
