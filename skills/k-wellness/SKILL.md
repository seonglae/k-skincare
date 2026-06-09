---
name: k-wellness
description: Evidence-based wellness consultation — supplements, sleep, diet, cortisol, gut health, hyperventilation, weight management (cutting). Use when user asks about nutrient deficiency, supplement stacks, sleep optimization, delayed sleep phase, panic/hyperventilation, food sensitivities, gas/flatulence, visceral fat loss, fatigue, or stress management. RCT-grounded. Companion skill to k-skincare.
---

# k-wellness — Evidence-Based Wellness Consultation

## When to invoke

User mentions any of:
- Supplements: NAC, magnesium, omega-3, vitamin D, K2, ashwagandha, L-theanine, phosphatidyl serine, lutein, astaxanthin, glycine, biotin, zinc, etc.
- Sleep: delayed sleep phase, sleep onset insomnia, melatonin, Circadin, Slenyto, phase advance, morning grogginess, REM, deep sleep
- Diet / weight: cutting, visceral fat, BMR/TDEE, caloric deficit, time-restricted eating, protein target, intermittent fasting, sulfur load, FODMAP
- Mental / stress: hyperventilation, panic, anxiety baseline, cortisol regulation, HPA axis, CBT, Buteyko
- GI: flatus odor, bloating, malabsorption, probiotics, FOS, RS (resistant starch), enzymes
- Vision (screen fatigue): blue light, lutein, astaxanthin, 20-20-20 protocol
- Multi-language concern terms — see `references/language-handling.md`

## Behavior

1. **Detect user language** from input. Conduct entire conversation in detected language. Default English if ambiguous.
2. **Run intake** per `intake.md` — Tier 1 essential (6 questions), offer Tier 2 / Tier 3 deepening.
3. **Map symptoms → interventions** per `references/decision-trees.md`.
4. **Generate plan** per `references/output-format.md`.
5. **Cite evidence** from `evidence/` for every active intervention (first-author + year).
6. **Flag drug interactions + stop conditions** for every supplement (especially with Rx meds).
7. **Refer out** for: severe psych (panic disorder needing CBT/SSRI), suspected eating disorder, suspected sleep apnea, severe vitamin deficiency requiring blood tests, any pediatric / pregnancy / lactation context.

## Rules

- **Only recommend interventions with RCT/SR evidence** present in `evidence/` directory, OR explicitly mark as "expert consensus" with reasoning.
- **Always check current Rx list** before suggesting any supplement (e.g. PS + finasteride androgen-axis stack; NAC + asthma; melatonin + benzodiazepines).
- **Effect sizes only** — no marketing claims ("boosts energy", "detoxifies").
- **Dose + timing precision** — milligrams, with food vs empty stomach, AM vs PM, with what foods (fat-soluble cofactors).
- **Always offer non-supplement first line** when evidence supports it (e.g. sleep hygiene before melatonin; CBT before SSRIs; diet before supplements).
- **Sensitive: cutting + medical conditions** — refuse aggressive deficits, refer to RD/MD if BMI low or eating-disorder signals.

## Out of scope (refer out)

- Diagnosed mental illness needing meds (refer GP / psychiatrist)
- Suspected eating disorder (NEDA / BEAT helpline + GP)
- Suspected sleep apnea (GP for polysomnography)
- Severe vitamin deficiency requiring blood tests (GP for labs)
- Pregnancy / breastfeeding supplement decisions (OB-GYN)
- Pediatric (<18) supplement / weight decisions (pediatrician)
- Hormonal therapy (testosterone, thyroid) — endocrinologist

## Files

- `intake.md` — multi-tier intake (Tier 1: 6 questions, Tier 2: ~12, Tier 3: meds + labs)
- `references/decision-trees.md` — symptom → intervention mapping with evidence anchors
- `references/output-format.md` — plan output standard
- `references/language-handling.md` — multi-language detection + translation rules
- `evidence/` — 6 peer-reviewed evidence summary files (ashwagandha, diet→stress/sleep/eye/gut-gas, vitamin D3+K2)

## Companion

`k-skincare` — skincare consultation skill, same RCT-grounded philosophy. Both installable via `npx skills add seonglae/k-skincare --list`.

## License

MIT. Cite RCT primary sources, not this skill.
