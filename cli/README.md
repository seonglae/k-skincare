# @seonglae/k-skincare

Evidence-based K-skincare consultation CLI. Built with Pastel + Ink + TypeScript.

## Usage

```bash
npx @seonglae/k-skincare
```

Interactive prompts ask:
- Age, gender, region (UK/KR/US/EU)
- Skin type (combination, oily, dry, sensitive, normal)
- Concerns (acne, pigmentation, lentigines, pores, dryness, redness, PIE, dark circles, wrinkles, photoaging, body acne, Malassezia)
- Budget tier (low / mid / high)

Returns:
- Diagnosis (rule-based, derived from inputs)
- AM routine
- PM routine (day-by-day with retinoid + AHA cycling)
- Shopping list filtered by region availability + budget
- RCT citations per concern
- Warnings (drug interactions, cleanser pH issues, laser wavelength choice)

## Local development

```bash
npm i
npm run dev      # tsx (no build step)
npm run build    # tsc → dist/
npm start        # node dist/cli.js
```

## Architecture

```
src/
├── cli.tsx                 # Pastel entry
├── commands/
│   └── index.tsx           # default command
├── components/
│   ├── Intake.tsx          # multi-step form
│   └── Report.tsx          # rendered output
├── engine/
│   ├── types.ts            # Zod schemas
│   ├── diagnose.ts         # rule-based diagnosis
│   └── recommend.ts        # routine + shopping + citations
└── data/
    ├── products.ts         # UK + KR + US + EU product DB
    └── citations.ts        # RCT references by concern
```

## Evidence base

All RCT citations sourced from `../evidence/` and `../supplement/evidence/` (12 peer-reviewed briefs).

## License

MIT
