import { z } from 'zod';

export const SkinType = z.enum(['oily', 'dry', 'combination', 'sensitive', 'normal']);
export type SkinType = z.infer<typeof SkinType>;

export const Concern = z.enum([
  'acne',
  'pigmentation',
  'lentigines',
  'pores',
  'dryness',
  'redness',
  'pie',
  'dark_circles',
  'wrinkles',
  'photoaging',
  'body_acne',
  'malassezia',
]);
export type Concern = z.infer<typeof Concern>;

export const Region = z.enum(['uk', 'kr', 'us', 'eu']);
export type Region = z.infer<typeof Region>;

export const Budget = z.enum(['low', 'mid', 'high']);
export type Budget = z.infer<typeof Budget>;

export const Intake = z.object({
  age: z.number().int().min(13).max(100),
  gender: z.enum(['m', 'f', 'other']),
  fitzpatrick: z.enum(['I', 'II', 'III', 'IV', 'V', 'VI']).optional(),
  skinType: SkinType,
  concerns: z.array(Concern).min(1).max(5),
  region: Region,
  budget: Budget,
  currentProducts: z.object({
    cleanser: z.string().optional(),
    toner: z.string().optional(),
    serum: z.string().optional(),
    moisturizer: z.string().optional(),
    sunscreen: z.string().optional(),
    exfoliant: z.string().optional(),
    eyeCream: z.string().optional(),
  }).optional(),
});
export type Intake = z.infer<typeof Intake>;

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: 'cleanser' | 'toner' | 'serum' | 'moisturizer' | 'sunscreen' | 'exfoliant' | 'retinoid' | 'shampoo' | 'body';
  ingredients: string[];
  ph?: number;
  price: { uk?: number; kr?: number; us?: number; eu?: number };
  url?: { uk?: string; kr?: string; us?: string; eu?: string };
  evidenceFor: Concern[];
}

export interface Citation {
  paper: string;
  pmid?: string;
  doi?: string;
  effect: string;
  quality: 'A' | 'B' | 'C';
}

export interface RoutineStep {
  step: number;
  product: string;
  note?: string;
}

export interface Routine {
  am: RoutineStep[];
  pm: { [day: string]: RoutineStep[] };
}

export interface Report {
  diagnosis: string[];
  routine: Routine;
  shopping: Product[];
  citations: Citation[];
  warnings: string[];
}
