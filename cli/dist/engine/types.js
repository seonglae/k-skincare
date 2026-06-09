import { z } from 'zod';
export const SkinType = z.enum(['oily', 'dry', 'combination', 'sensitive', 'normal']);
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
export const Region = z.enum(['uk', 'kr', 'us', 'eu']);
export const Budget = z.enum(['low', 'mid', 'high']);
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
