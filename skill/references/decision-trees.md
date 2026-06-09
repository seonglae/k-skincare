# Decision Trees — Concern → Intervention

Each branch cites evidence file (`evidence/<name>.md`) for the recommendation. Effect sizes are from peer-reviewed RCT/SR.

---

## Acne Vulgaris (얼굴)

```
Comedonal (whitehead/blackhead)
├── 1st: Adapalene 0.1% (Differin) PM, ramp-up
│       → 53% inflammatory lesion ↓ at 12wk (Shalita 1996)
│       → see evidence/retinoids.md
├── + Low-pH cleanser AM+PM
│       → Korting 1995: alkaline soap +5% acne vs syndet -22%
│       → see evidence/cleanser_ph.md
└── Adjunct: Azelaic acid 15-20% (PIE/PIH co-existing)
        → see evidence/azelaic_pie.md

Inflammatory (papules/pustules)
├── Adapalene + BP (combination Rx) — derm referral if available
├── Or Adapalene 0.1% + Azelaic 15%
└── If no improvement at 12wk → derm for oral antibiotic / spironolactone / isotretinoin

Nodulocystic / cystic
└── REFER OUT — derm for oral isotretinoin evaluation
```

## Truncal Acne (귀 / 뒷목 / 가슴 / 등 / 어깨)

```
Distribution clue: 모낭염성 (folliculitis pattern, monomorphic)
├── 1st: Suspect Malassezia folliculitis
│       → Paichitrojjana 2022 aOR 8.89× for scalp lesions
│       → Treat: Nizoral 2% (ketoconazole) shampoo on body 2-3×/week
│           - Lather scalp + ears + neck + chest
│           - LEAVE 5 minutes
│           - Body-wash during wait, rinse last
│       → see evidence/truncal_malassezia.md
├── 2nd (if mixed): Adapalene PM applied to body areas
└── Hair product audit: silicone/oil residue on hairline/neck/ears = trigger
        → Shower sequence: shampoo → conditioner → bodywash → face last
```

## Solar Lentigines / Freckles (주근깨)

```
Trigger: UV history (beach, tropics, no SPF)
Mandatory: SPF 50+ daily, broad-spectrum, 2 fingers facial dose
├── OTC: Vit C L-AA 10-20% AM (Pinnell 2003 photoprotection)
│   + Adapalene PM (epidermal turnover)
│   + Azelaic 15% (tyrosinase inhibitor)
├── Rx: Hydroquinone 4% (8wk cycle, then break) — derm
├── In-clinic 1st line: Pico 755nm Alexandrite (Vachiramon 2022 — superior to 532nm KTP in Asian skin)
│       → 4-8 sessions, 2-4wk apart
├── 2nd line: Pico 532nm KTP — effective but PIH risk 4.65-10.2% in Fitz IV+
│       → see evidence/lentigines.md
└── PIH prevention pre/post-laser: TXA 3-5% topical + niacinamide 4-10% × 2wk
```

## Dark Circles (다크서클)

```
Type identification first (Tier 2 Q7)
├── Pigmentary (brown, persists on pressure)
│   ├── Vit C AM (Lueangarun 2018: oral TXA -49% mMASI; topical also effective)
│   ├── Niacinamide 4-10% PM
│   ├── (Rx) Hydroquinone 4% short course
│   └── In-clinic: 1064nm Nd:YAG low-fluence
│       ⚠️ AVOID 532nm KTP in Asian/Fitz IV (AlRamthan 2024: PIH risk)
│       → see evidence/dark_circles_glycolic.md
├── Vascular (blue/purple, blanches)
│   ├── PDL 595nm (V-beam) 1-3 sessions
│   ├── Caffeine 3-5% topical (mild)
│   └── Adequate sleep, cold compress
├── Structural (tear trough shadow)
│   └── HA filler (derm) — OTC ineffective
└── Mixed → combination plan per dominant component

⚠️ Adapalene around eyes = CONTRAINDICATED (PIH paradox, eyelid eczema)
```

## Post-Inflammatory (자국)

```
Color identification
├── PIE (post-inflammatory erythema, pink/red)
│   ├── 1st: Azelaic 15% × 8-12wk (Liu 2024 RCT)
│   │   → see evidence/azelaic_pie.md
│   ├── 2nd: PDL 595nm if no response at 12wk
│   └── ⚠️ AHA aggressive use can worsen → reduce frequency
├── PIH (post-inflammatory hyperpigmentation, brown)
│   ├── Same as solar lentigines protocol (Vit C + Adapalene + Azelaic + SPF)
│   ├── Topical TXA 3-5% (Lueangarun 2018 mechanism)
│   └── In-clinic: pico toning if persistent >6 months
└── Perioral dermatitis (papules + scale around mouth, NOT typical scar)
    ├── ❌ STOP topical steroids (canonical trigger)
    ├── ❌ STOP heavy occlusives perioral area
    ├── Switch toothpaste: SLS-free (Sensodyne Pronamel) ← cheapest first move
    └── If persists: derm for oral tetracycline / topical azelaic 15%
```

## Pore Visibility (모공)

```
Mechanism: sebaceous filaments + photoaging dilation + age
├── Adapalene PM (turnover ↑, sebum modulation)
├── Niacinamide 4-10% AM/PM (Hakozaki 2002)
├── Salicylic acid 2% 2-3×/wk PM (BHA, sebaceous-soluble)
├── Daily SPF (UV → collagen ↓ → pore widening)
└── In-clinic: pico toning, Inmode FX, fractional RF (best evidence)
⚠️ Complete pore "closure" impossible — only improvement
```

## Wrinkles / Fine Lines / Photoaging (잔주름)

```
Tier 1 OTC:
├── Adapalene 0.1% PM (Bagatin 2018 photoaging: comparable to tretinoin)
├── Vit C L-AA 15-20% AM (Fitzpatrick 2002 collagen ↑)
├── Niacinamide 4-10%
├── Daily SPF 50+ (single biggest intervention)
└── see evidence/retinoids.md

Tier 2 Rx (derm):
├── Tretinoin 0.025-0.05% (stronger than adapalene for photoaging)
├── Hydroquinone if pigmentation co-occurs
└── Topical Vit A acid derivatives

Tier 3 In-clinic:
├── Fractional CO2 / Erbium (downtime 5-7 days)
├── Microneedling RF
├── Botulinum toxin (dynamic wrinkles only)
└── Filler (volume loss)
```

## Sensitive / Reactive Skin

```
1. Identify trigger:
   - Fragrance / EOs (limonene, linalool, citral) → patch test
   - Surfactant (SLS in cleanser/toothpaste)
   - Active stacking (retinoid + AHA + Vit C all PM = irritation)
   - Climate / hard water

2. Simplify routine to 3 steps:
   - Gentle low-pH cleanser (Round Lab Dokdo, La Roche Toleriane Dermo-Cleanser)
   - Barrier moisturizer (Ceramide 1+3+6-II preferred — see CeraVe PM, or LRP Toleriane Cream)
   - Daily SPF (mineral preferred if reactive)

3. Reintroduce actives one at a time:
   - Week 1-2: cleanser + moisturizer + SPF only
   - Week 3-4: add one active (e.g. niacinamide)
   - Week 5+: assess, add next

4. Patch test:
   - Inner forearm 3 days BID before face use
   - For new actives or after any contact dermatitis history
```

## Retinoid Ramp-Up Protocol (Adapalene 0.1%)

```
Week 1-2: 2×/week PM only (Mon/Wed)
Week 3-4: 3×/week (Mon/Wed/Fri)
Week 5+: every other day (~3.5×/wk) — most stable long-term
Week 12+: nightly possible if tolerated

Application: Open sandwich method (Jaad 2025)
1. Cleanse → 1-2min dry-down (wet skin = irritation ↑↑)
2. Moisturizer thin layer 1min absorption
3. Adapalene pea-sized dot for whole face
4. 5-point apply (forehead, cheeks, nose, chin)
5. Avoid eye area 1cm + lip vermilion 1-2mm
6. 1-2min absorption
7. Moisturizer second layer thick

⚠️ Don't pre-mix on hand = dilution ↓ bioactivity (full sandwich -3× per JAAD 2025)
⚠️ Same-day with AHA / BHA / PHA / Vit C PM = irritation spike
⚠️ Pre-procedure: STOP 7 days before laser/peel
⚠️ Pregnancy/breastfeeding: AVOID (Cat C — refer to derm)

Stop conditions:
- Severe dryness/cracking >7 days
- Bleeding
- Eczema-type reaction
- Severe persistent burning
→ Pause 1 week, recover with bland moisturizer + SPF
```

## Cleansing pH Decision

```
AM + PM: Use pH 5.5-6.5 syndet cleanser
- Korting 1995 RCT: alkaline soap +5% acne, syndet -22% over 6mo (p<0.0001)
- Gfatter 1997: alkaline cleansers strip 5× more stratum corneum lipids
- see evidence/cleanser_ph.md

Avoid:
- Bar soaps (typically pH 9-10)
- "Whip" cleansers with saponified fatty acids + KOH (e.g. some Korean white-clay foams)
- SLS-heavy cleansers if sensitive

Acceptable brands (verify pH on barcode/manufacturer):
- Round Lab 1025 Dokdo Cleanser (pH ~5.5)
- CeraVe Hydrating Cleanser (pH 5.5)
- COSRX Low pH Good Morning Cleanser
- La Roche-Posay Toleriane Caring Wash
- Cetaphil Gentle Skin Cleanser
```

## Body / Areas Beyond Face

```
Elbows / knees (hyperpigmentation, thickening)
├── AmLactin 12% (lactic acid + ammonium lactate) BID
├── Daily SPF if exposed
└── Adapalene spot-treat if AmLactin plateaus (intact skin only)

Foot vesicles + itching
├── Differential: tinea pedis (vesicular) vs dyshidrotic eczema vs contact derm
├── 1st empirical: Terbinafine 1% (Lamisil) BID × 2-4wk if tinea suspected
├── ⚠️ DO NOT pick/cut with nail clippers — spread + secondary infection
├── No improvement 2wk → GP for KOH scrape
└── If dyshidrotic suspected → hydrocortisone 1% short course
```

---

## Anti-patterns (never recommend)

- ❌ "Drink more water" as primary intervention (effect size 0 in RCT)
- ❌ Lemon juice / DIY acids (pH unpredictable, photosensitizing)
- ❌ Toothpaste on pimples (SLS irritant)
- ❌ Apple cider vinegar toner (acid burn risk)
- ❌ Heavy occlusives + retinoid same step (PIH on dark skin, congestion)
- ❌ Niacinamide-Vit C "incompatibility" myth (debunked — they layer fine)
- ❌ "Skin purging" excuse for >8wk worsening (real worsening = stop)
- ❌ Multi-step 10+ routines (compliance drops, irritation rises)
