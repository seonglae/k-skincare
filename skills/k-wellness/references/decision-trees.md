# Decision Trees — Symptom → Intervention (k-wellness)

Each branch cites `evidence/<name>.md` for the recommendation. Effect sizes from peer-reviewed RCT/SR.

---

## Delayed Sleep Phase / Late Bedtime

```
Primary intervention (behavioral, first):
├── AM bright light 30-60min within 30min of wake (≥2,500-10,000 lux)
│       → Sletten 2018, Saxvig 2014 — only intervention that meaningfully shifts circadian phase
├── Caffeine cutoff ≥6h before target bedtime (≥8h if sensitive)
│       → Drake 2013 RCT: 6h pre-bed caffeine cuts total sleep -1h
└── Progressive bedtime advance (30min/2-3 days)

Adjunct supplements (in order of evidence):
├── Glycine 3g 30-60min pre-bed
│       → Yamadera 2007, Bannai 2012 PSG-confirmed SOL reduction
│       → see evidence/diet_sleep.md
├── Magnesium glycinate 200-400mg PM
│       → Boyle 2017 meta-analysis: SOL ↓~17min
├── L-theanine 200mg pre-bed
│       → Hidese 2019 — at 200mg (NOT 400mg+ chronic; 400mg = tachyphylaxis risk)
└── Rx melatonin if behavioral fails (DSWPD protocol)
        → Low-dose IR melatonin 0.3-0.5mg, 5-6h before current sleep onset
        → NOT prolonged-release (Circadin = maintenance, not phase-shift)
        → see evidence/diet_sleep.md
        ⚠️ UK: melatonin Rx only (GP visit)
```

## Sleep Quality / Morning Grogginess

```
First check: sleep duration < 7h chronic?
├── If yes: extend sleep window (sleep hygiene, behavioral) first
└── If no (7-8h but unrested): assess sleep architecture

Possible causes:
├── Delayed phase (see above) — even with 8h, wrong timing = unrested
├── Late carb / heavy dinner < 3h pre-bed
│       → Crispim 2011: late fat → ↑REM latency
├── Alcohol within 4h of bed
│       → He 2024 SR/MA: REM ↓11min per drink
├── Late caffeine (≥14:00 cutoff if 23:00 sleep)
├── Bedroom temp > 21°C
├── Suspected sleep apnea — REFER GP for sleep study
└── Suspected delayed sleep phase syndrome — phase advance protocol

Adjunct interventions:
├── Glycine 3g (depth ↑ — Yamadera 2007)
├── Magnesium glycinate 300mg
├── L-theanine 200mg (NOT 400mg chronic — paradoxical anxiety risk)
└── Avoid PR melatonin chronic if morning grogginess persists
```

## Hyperventilation / Panic Episodes

```
First-line REFERRAL: GP for:
├── Differential dx (panic disorder vs GAD vs dysfunctional breathing syndrome)
├── ECG (rule out cardiac)
├── CBT referral (Cochrane Jones 2013 — gold standard for panic)
└── If <4 weeks improvement: SSRI consideration

Acute episode:
├── 4-7-8 breathing (4 in, 7 hold, 8 out × 4 cycles)
└── L-theanine 200mg (acute, NOT chronic 400mg daily)

Chronic baseline reduction:
├── Aerobic Zone 2 cardio 3×/week 25min
│       → Smits 2008, Kredlow 2015 — anxiolytic effect
├── Phosphatidyl Serine 300mg PM
│       → Hellhammer 2004 — cortisol blunting at stress test
│       ⚠️ PM only; AM PS blunts cortisol awakening response (CAR), worsens sleep + cutting
│       → see evidence/diet_stress.md
├── Avoid NAC if symptoms acute on NAC start
│       → FDA bronchospasm warning; paradoxical anxiety case reports
│       → Washout 7 days if recently started
└── Ashwagandha KSM-66 600mg AM (alternative to PS, monitor LFT)
        → Chandrasekhar 2012 — cortisol -27.9%
        ⚠️ LiverTox C 2024 — hepatotoxicity signal, baseline ALT/AST
        ⚠️ Contraindicated: hyperthyroid, autoimmune (lupus/RA), immunosuppressants
        → see evidence/ashwagandha.md
```

## Visceral Fat / Cutting

```
First: calculate TDEE baseline
├── BMR estimate (Mifflin-St Jeor)
├── Activity multiplier 1.2-1.55
└── Set deficit -300 to -500 kcal/day (NOT > -500 → adaptive thermogenesis)

Mandatory floor:
├── 1700 kcal absolute minimum for adult male
├── 1500 kcal absolute minimum for adult female
└── Protein 1.6-1.8 g/kg → LBM preservation (Helms 2014, Longland 2016)

Visceral fat-specific drivers (target these):
├── Alcohol 0-1 drink/week (Yamada 2010 — direct visceral deposition)
├── Fructose elimination (HFCS, juice — keep whole fruit OK)
├── Late carbs minimized (<3h pre-bed)
├── Time-restricted eating 8-10h window (Sutton 2018, Wilkinson 2020 — visceral -3%)
└── Sleep 7h+ (Patel 2008 — sleep deficit ↑ cortisol ↑ visceral)

Exercise:
├── Zone 2 jog 3×/week 25min (HR 60-70% max)
│       → Vissers 2013 meta — aerobic > resistance for visceral
├── HIIT 1×/week 10min optional
│       → Maillard 2018 — visceral -17% over 12wk
└── Resistance training maintained (LBM preservation, BMR floor)

Monitor:
├── Weekly Sunday AM weigh-in
├── Waist circumference (visceral proxy — Korean male <90cm target)
├── Sleep score
└── Hunger/satiety + libido (markers of over-restriction)

⚠️ DO NOT recommend:
- Carnivore (anti-aging X, sulfur ↑↑, micronutrient gap)
- Aggressive deficit (>-500 kcal)
- Skipping breakfast on Circadin / melatonin days (residual grogginess + low blood sugar = panic risk)
- Caloric restriction during acute panic episode (eat to maintenance 48h post-panic)
```

## Flatus Odor (Hydrogen Sulfide)

```
First check (red flags → refer GP):
├── Blood in stool
├── Unexplained weight loss
├── Night sweats / fever
├── Severe abdominal pain
└── Recent antibiotic course (C. diff risk)

Dietary intervention (primary):
├── Reduce sulfur amino acid load:
│   - Limit cysteine-heavy foods: beef, pork, eggs, garlic, onion, broccoli, kale
│   - Switch meat 1-2 of 3 daily meals → fish / chicken / legumes
│       → Magee 2000: H₂S linear with animal protein
├── Resistant Starch at every meat meal:
│   - Cooled rice / cooled potato / cooled sweet potato / green banana / oats
│       → Yao 2018 RCT: RS ↓ H₂S 82-89%
├── Vegetable 2 fistfuls per meal (400g/day)
│       → Aune 2017 — mortality benefit
└── Hydration adequate

Supplemental:
├── Digestive enzyme complex pre-meal (each meal)
│       → Reduces undigested protein → less H₂S substrate
├── Probiotic (Lactobacillus + Bifidobacterium)
│       → Wegh 2022 — moderate evidence
└── Bimuno FOS (prebiotic) if dietary inadequate
        → Yao 2018 — H₂S directly suppressed
        → see evidence/diet_gut_gas.md

Emergency social:
├── Bismuth subsalicylate (Pepto-Bismol) 524mg 1h pre-event
│       → Suarez 1998 RCT: H₂S >95%↓
└── ⚠️ Not for daily use; black tongue/stool side effect
```

## Eye Fatigue / Screen-induced Blurriness

```
Behavioral (free, first):
├── 20-20-20 rule (every 20min, look at 20ft, for 20sec)
├── Screen distance 50-70cm
├── Blink consciously
├── Lubricant drops (preservative-free — Hylo-Comod, Optase)
└── Anti-reflective coating on glasses

Supplements (with fat-containing meal):
├── Lutein 10mg + Zeaxanthin 2mg (AREDS2 ratio)
│       → Stringham 2017 — eye strain ↓30% over 6mo at 24mg macular carotenoids
├── Astaxanthin 4-6mg
│       → Nagaki 2002 — accommodation function ↑
└── Omega-3 EPA+DHA from oily fish (NOT capsules per DREAM 2018 for dry eye)
        → see evidence/diet_eye.md

⚠️ Skip:
- Blue light glasses (Cochrane 2023 — no efficacy on strain or sleep)
- Bilberry capsules (test-tube only, no human RCT)
- AREDS2 multi for non-AMD young adults (Dosing made for elderly AMD; lutein/zeax fine on own)

⚠️ Refer optometrist if:
- Worsening over weeks
- One-eye changes
- Field defects, halos, flashes
- Family history glaucoma >40y or DR
```

## Stress / Cortisol Regulation

```
Behavioral first:
├── Zone 2 aerobic 3×/week (Smits 2008)
├── 4-7-8 breathing daily 2× (Russo 2017)
├── Sleep 7h+ (cortisol ↑ on <7h)
├── Sunlight AM 10min (cortisol awakening + SCN entrainment)
└── CBT for chronic anxiety (Cochrane Jones 2013)

Dietary cofactors:
├── Mg deficient → Mg glycinate 200-400mg PM
├── Vit D <30 ng/mL → D3 2,000-4,000 IU + sun
│       → see evidence/vitamin_d_k2.md
├── Omega-3 EPA <500mg/day → up to 2g/day from fish or supplement
│       → Su 2018 JAMA — anxiety benefit at ≥2g
└── B-complex if deficient (rare in eaters)

Supplements (if behavior+diet plateau):
├── Phosphatidyl Serine 300mg PM (NOT AM — preserves CAR)
│       → Hellhammer 2004 — cortisol blunting
├── Ashwagandha KSM-66 600mg AM (alternative; LFT check)
│       → Chandrasekhar 2012 — cortisol -27.9%
│       ⚠️ Hepatotoxicity signal (LiverTox C 2024)
│       ⚠️ Don't stack with PS (redundant + over-blunt risk)
└── Avoid NAC if you have asthma or panic history
        ⚠️ FDA bronchospasm; paradoxical anxiety case reports
```

## Anti-patterns (never recommend)

- ❌ "Detox" cleanses / juice fasts (no evidence, risk)
- ❌ Mega-dose Vit C / B-vitamins (no benefit beyond RDA in eaters)
- ❌ Activated charcoal capsules for flatus (Suarez 1999 RCT negative)
- ❌ Blue-light blocking glasses for sleep / eye strain (Cochrane 2023 null)
- ❌ Generic AREDS2 multi for non-AMD young adults (over-dose iron/zinc/copper)
- ❌ Heavy metal "chelation" without medical indication (dangerous)
- ❌ "Adrenal fatigue" supplement stacks (not a recognized diagnosis)
- ❌ Carnivore diet (anti-aging X, sulfur ↑↑ → gut, micronutrient gap)
- ❌ Aggressive caloric restriction (>-500 kcal) — adaptive thermogenesis, hormone disruption
- ❌ Chronic high-dose L-theanine 400mg+ (tachyphylaxis, paradoxical anxiety in some)
- ❌ Bedtime NAC if sulfur-sensitive (H₂S flatus + vivid dreams)
- ❌ Same-day Ashwagandha + Phosphatidyl Serine (redundant cortisol blunting)
- ❌ PR melatonin (Circadin) for phase advance (it's maintenance; use IR low-dose)
