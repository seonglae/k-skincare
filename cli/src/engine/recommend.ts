import type { Intake, Product, Report, Routine, Citation } from './types.js';
import { PRODUCTS } from '../data/products.js';
import { CITATIONS } from '../data/citations.js';
import { diagnose } from './diagnose.js';

const PRICE_LIMITS = { low: 20, mid: 35, high: 200 };

export function recommend(intake: Intake): Report {
  const diagnosis = diagnose(intake);

  // Filter products by region availability + budget + concerns
  const limit = PRICE_LIMITS[intake.budget];
  const candidates = PRODUCTS.filter((p) => {
    const price = p.price[intake.region];
    if (price === undefined) return false;
    if (price > limit && p.category !== 'retinoid') return false;
    return p.evidenceFor.some((c) => intake.concerns.includes(c));
  });

  // Build routine
  const routine = buildRoutine(intake, candidates);

  // Top shopping list: dedupe by category, max 1 per category
  const shopping = pickShopping(candidates, intake);

  // Citations for concerns
  const citations: Citation[] = intake.concerns.flatMap(
    (c) => CITATIONS[c] ?? []
  );

  // Warnings
  const warnings: string[] = [];
  if (intake.concerns.includes('dark_circles')) {
    warnings.push('Dark circles: avoid 532nm pico KTP if pigmentary type in Fitzpatrick III–IV (AlRamthan 2024 — PIH risk). Use 1064nm Nd:YAG.');
  }
  if (intake.concerns.includes('body_acne')) {
    warnings.push('Body acne: BPO/Salicylic NOT first-line for suspected Malassezia. Try ketoconazole 2% shampoo 4wk first.');
  }
  if (intake.currentProducts?.exfoliant?.toLowerCase().includes('aha')) {
    warnings.push('AHA + retinoid: never same night. Use AHA Saturday only, retinoid M/W/F.');
  }

  return { diagnosis, routine, shopping, citations, warnings };
}

function buildRoutine(intake: Intake, candidates: Product[]): Routine {
  const am = [
    { step: 1, product: 'Cleanser (low-pH)', note: 'Round Lab Dokdo Cleanser or LRP Toleriane' },
    { step: 2, product: 'Toner', note: 'Round Lab Dokdo Toner (PHA 1.5% + HA)' },
    { step: 3, product: 'Vit C serum', note: 'Inkey 15% or Goodal Green Tangerine' },
    { step: 4, product: 'Moisturizer', note: "Paula's Choice Skin Balancing (niacinamide + Vit C ester)" },
    { step: 5, product: 'SPF50+ PA++++', note: '2 finger length, reapply 2-3h outdoor. Dr.Jart Tone Up.' },
  ];

  const pmBase = (active: string | null) => {
    const steps = [{ step: 1, product: 'Cleanser', note: 'Stronger cleanser OK for PM (remove SPF/sebum)' }];
    if (active) steps.push({ step: 2, product: active, note: 'Active layer' });
    steps.push({ step: steps.length + 1, product: 'Moisturizer', note: 'Thick for PM' });
    return steps;
  };

  const pm: { [day: string]: any[] } = {};
  const useRetinoid = intake.concerns.some((c) =>
    ['acne', 'pigmentation', 'wrinkles', 'pores', 'photoaging', 'lentigines'].includes(c)
  );
  const useAHA = intake.currentProducts?.exfoliant !== undefined;

  pm['Mon'] = pmBase(useRetinoid ? 'Adapalene 0.1% (pea-sized)' : null);
  pm['Tue'] = pmBase(null);
  pm['Wed'] = pmBase(useRetinoid ? 'Adapalene 0.1%' : null);
  pm['Thu'] = pmBase(null);
  pm['Fri'] = pmBase(useRetinoid ? 'Adapalene 0.1%' : null);
  pm['Sat'] = pmBase(useAHA ? 'AHA 8%' : null);
  pm['Sun'] = pmBase(null);

  return { am, pm };
}

function pickShopping(candidates: Product[], intake: Intake): Product[] {
  const byCategory = new Map<string, Product>();
  for (const p of candidates) {
    const existing = byCategory.get(p.category);
    if (!existing) byCategory.set(p.category, p);
    else {
      const score = (q: Product) =>
        q.evidenceFor.filter((c) => intake.concerns.includes(c)).length;
      if (score(p) > score(existing)) byCategory.set(p.category, p);
    }
  }
  return Array.from(byCategory.values());
}
