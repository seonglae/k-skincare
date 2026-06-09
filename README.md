# k-skincare

[![npm version](https://img.shields.io/npm/v/k-skincare.svg)](https://www.npmjs.com/package/k-skincare)
[![npm downloads](https://img.shields.io/npm/dm/k-skincare.svg)](https://www.npmjs.com/package/k-skincare)
[![license](https://img.shields.io/npm/l/k-skincare.svg)](./LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/seonglae/k-skincare?style=social)](https://github.com/seonglae/k-skincare)

Evidence-based K-skincare + K-wellness consultation. RCT-grounded. Multi-language.

This repo ships **two Claude Code skills** + a standalone interactive CLI:

| Skill | Scope |
|---|---|
| `k-skincare` | acne, pigmentation, dark circles, retinoid protocols, Korean derm procedures, cleanser pH, sensitive skin, body acne |
| `k-wellness` | supplements, sleep / phase advance, cutting / visceral fat, cortisol, hyperventilation, gut / flatus, eye fatigue |

---

## Quick start

### Skills (Claude Code, Cursor, Cline, Copilot, 18+ AI agents)

```bash
# Pick both / either skill interactively
npx skills add seonglae/k-skincare

# List what's in the repo
npx skills add seonglae/k-skincare --list

# Install one skill non-interactively to global Claude Code
npx skills add seonglae/k-skincare --skill k-skincare  -g -a claude-code -y
npx skills add seonglae/k-skincare --skill k-wellness  -g -a claude-code -y
```

After install, restart Claude Code (or `/skills` refresh). The skill auto-activates when the user asks about skincare or wellness.

> Powered by [Vercel Skills](https://skills.sh/). Listed at [skills.sh/seonglae/k-skincare](https://www.skills.sh/seonglae/k-skincare) once install telemetry reaches the threshold.

### Interactive CLI (no Claude required)

```bash
npx k-skincare
```

Pastel + Ink terminal wizard. Asks age / sex / region (UK/KR/US/EU) / skin type / concerns / budget → returns AM/PM routine + region-specific shopping list + RCT citations + warnings (drug interactions, cleanser pH, laser wavelength choice). English. Rule-based engine. No API cost.

---

## k-skincare skill

**Triggers** when user mentions any of:
- Skin concerns — acne, dark circles, pigmentation, pores, wrinkles, sensitivity, scars
- Products — cleanser, toner, serum, moisturizer, SPF, retinoid, AHA/BHA
- Routine building — AM, PM, weekly, retinoid ramp-up
- Korean derm procedures — pico laser, Nd:YAG, PDL, IPL, fractional, MTS

**Behavior**:
1. Detects user language from first message — conducts entire conversation in that language
2. Tier 1 intake (5 essential questions) → basic plan
3. Offers Tier 2 (10 refinement questions) → precise plan
4. Tier 3 (procedure planning) if user is open to in-clinic
5. Output — personalized AM/PM routine + retinoid ramp-up + region-specific shopping list + stop conditions + RCT citations

**Evidence base** — `skills/k-skincare/evidence/` (6 peer-reviewed summaries):
- Retinoid efficacy (Shalita 1996, Bagatin 2018, Kang 2005)
- Cleanser pH (Korting 1995, Gfatter 1997)
- Truncal Malassezia folliculitis (Paichitrojjana 2022)
- Solar lentigines / pico laser (Vachiramon 2022, Negishi 2018)
- Azelaic acid for PIE/PIH (Liu 2024, Thiboutot 2003)
- Dark circles laser selection (AlRamthan 2024 — 1064nm Nd:YAG vs 532nm KTP)

**Refers out**:
- Severe nodulocystic acne → derm for isotretinoin
- Suspicious lesions → urgent derm
- Pregnancy / breastfeeding + retinoid → derm / OB-GYN
- Mental health (BDD, picking) → GP / therapy

---

## k-wellness skill

**Triggers** when user mentions any of:
- Supplements — NAC, magnesium, omega-3, vitamin D, K2, ashwagandha, L-theanine, PS, lutein, astaxanthin, glycine, biotin, zinc
- Sleep — delayed sleep phase, sleep onset insomnia, melatonin, Circadin, Slenyto, phase advance, morning grogginess, REM, deep sleep
- Diet / weight — cutting, visceral fat, BMR/TDEE, caloric deficit, time-restricted eating, protein target, sulfur load, FODMAP
- Mental / stress — hyperventilation, panic, anxiety baseline, cortisol regulation, HPA axis, CBT, Buteyko
- GI — flatus odor, bloating, malabsorption, probiotics, FOS, RS (resistant starch), enzymes
- Vision (screen) — blue light, lutein, astaxanthin, 20-20-20 protocol

**Behavior** — same Tier 1/2/3 intake pattern. Always checks current Rx list before any supplement recommendation. Always offers behavioral first-line when evidence supports.

**Evidence base** — `skills/k-wellness/evidence/` (6 peer-reviewed summaries):
- Diet → stress (Lassale 2019 SR/MA, SMILES Jacka 2017, Su 2018 JAMA omega-3 anxiety)
- Diet → sleep (Sletten 2018 melatonin DSWPD, Drake 2013 caffeine, Yamadera 2007 glycine PSG)
- Diet → eye fatigue (Stringham 2017 macular carotenoids, Nagaki 2002 astaxanthin, DREAM 2018 NEJM negative for omega-3 capsules)
- Diet → gut / gas (Magee 2000 protein → H₂S, Yao 2018 RS suppresses H₂S 82-89%, Suarez 1998 bismuth)
- Ashwagandha (Chandrasekhar 2012 cortisol -27.9%, NIH LiverTox C 2024 hepatotoxicity)
- Vitamin D3 + K2 (Hyppönen 2007 UK 87% deficient, Park 2018 KNHANES Korean 20-34M cohort)

**Refers out**:
- Diagnosed mental illness needing meds → GP / psychiatrist
- Suspected eating disorder → NEDA / BEAT + GP
- Suspected sleep apnea → GP for polysomnography
- Severe vitamin deficiency requiring blood tests → GP
- Pregnancy / breastfeeding supplement decisions → OB-GYN
- Pediatric (<18) → pediatrician
- Hormonal therapy (testosterone, thyroid) → endocrinologist

---

## Language support

Korean / English / Japanese / Chinese / Spanish (tested patterns). Other languages: AI runtime translation. Technical terms (Adapalene, NAC, KSM-66, mg, EPA, DHA) kept in original with brief native gloss.

## What the skill produces

Both skills follow the same output structure:

1. **Summary** — patient profile + top 3 concerns + overall strategy
2. **Concern → Intervention mapping** — table with OTC / Rx / in-clinic columns, RCT citations
3. **AM routine table** — step-by-step with product type + dose + technique
4. **PM routine table** — same; for skincare, alternating days for retinoid + AHA scheduling
5. **Active ramp-up schedule** — W1-2 / W3-4 / W5+ frequency
6. **Shopping list** — priority + region cost estimate
7. **Stop conditions** — safety triggers per intervention
8. **Evaluation checkpoints** — W4 / W8 / W12 photo + self-score
9. **Refer-out flags** — if applicable
10. **Evidence citations** — first-author, year, journal, effect size

## Anti-marketing principles

- Only RCT/SR-evidenced interventions get recommended; expert-consensus items are labeled as such with reasoning
- Effect sizes only — never "boosts", "rejuvenates", "detoxifies"
- Specific dose + timing + duration — never "use as needed"
- Acknowledges where evidence is weak (Vit K2 in young adults, blue-light glasses for sleep — both rejected per evidence)

## Project structure

```
.
├── skills/
│   ├── k-skincare/
│   │   ├── SKILL.md
│   │   ├── intake.md             (Tier 1/2/3 multi-language form)
│   │   ├── references/
│   │   │   ├── decision-trees.md (concern → intervention with RCT anchors)
│   │   │   ├── output-format.md  (10-section plan standard)
│   │   │   └── language-handling.md
│   │   └── evidence/             (6 RCT summaries)
│   └── k-wellness/
│       ├── SKILL.md
│       ├── intake.md
│       ├── references/           (same 3 files, adapted)
│       └── evidence/             (6 RCT summaries)
├── cli/                          (Pastel + Ink + TS — interactive terminal CLI)
├── bin/                          (n/a — single bin via package.json)
├── README.md
├── LICENSE
└── package.json                  (single npm package: `k-skincare`)
```

## Contributing

Issues and PRs welcome. Open an issue first for substantive changes. RCT additions/corrections especially appreciated — must include PMID/DOI.

## License

MIT. Cite RCT primary sources, not this skill.

---

**Disclaimer**: This software provides general skincare / wellness information based on peer-reviewed research. It is NOT medical advice. Consult a qualified dermatologist / physician for individual diagnosis and treatment.
