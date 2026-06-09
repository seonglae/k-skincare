# k-skincare

Evidence-based K-skincare consultation. RCT-grounded. Multi-language.

Two ways to use:
1. **Interactive CLI** (no Claude required) — `npx k-skincare`
2. **Claude Code skill** (multi-language, conversational) — `npx skills add seonglae/k-skincare`

Repo ships **2 skills**:
- `k-skincare` — dermatology / cleanser / retinoid / pigmentation / Korean derm procedures
- `k-wellness` — supplements / sleep / cutting / cortisol / hyperventilation / gut

## Interactive CLI

```bash
npx k-skincare
```

Pastel + Ink terminal wizard. Asks age / sex / region (UK/KR/US/EU) / skin type / concerns / budget → returns AM/PM routine + region-specific shopping list + RCT citations + warnings (drug interactions, cleanser pH, laser wavelength choice). English. Rule-based engine.

## Claude Code skill

Vercel skills CLI (multi-agent — Claude Code, Cursor, Cline, Copilot, 18+):

```bash
npx skills add seonglae/k-skincare                                        # interactive (lets you pick which skill)
npx skills add seonglae/k-skincare --list                                 # show available skills (k-skincare + k-wellness)
npx skills add seonglae/k-skincare --skill k-skincare -g -a claude-code -y   # install skincare only, global
npx skills add seonglae/k-skincare --skill k-wellness -g -a claude-code -y   # install wellness only
```

Restart Claude Code (or `/skills` refresh) — skill auto-activates when user asks about skincare.

### What the skill does

Triggers when user mentions:
- Skin concerns (acne, dark circles, pigmentation, pores, wrinkles, sensitivity, scars)
- Product recommendations (cleanser, toner, serum, moisturizer, SPF, retinoid)
- Routine building (AM, PM, retinoid ramp-up)
- Korean derm procedures (pico, Nd:YAG, PDL, IPL, fractional)

### Behavior

1. **Detects user language** — entire conversation in detected language
2. **Tier 1 intake** (5 essential questions) → basic plan
3. **Offers Tier 2** (10 more) → refined plan
4. **Tier 3** (procedure planning) if user open to in-clinic
5. **Output**: personalized AM/PM routine + ramp-up + shopping list + stop conditions + RCT citations

## Evidence base

`skills/k-skincare/evidence/` — 6 peer-reviewed summary files:

- Retinoid efficacy (Shalita 1996, Bagatin 2018, Kang 2005)
- Cleanser pH (Korting 1995, Gfatter 1997)
- Truncal Malassezia folliculitis (Paichitrojjana 2022)
- Solar lentigines / pico laser (Vachiramon 2022, Negishi 2018)
- Azelaic acid for PIE/PIH (Liu 2024, Thiboutot 2003)
- Dark circles laser selection (AlRamthan 2024)

All PMIDs/DOIs verified. No marketing claims.

## Language support (skill)

Korean / English / Japanese / Chinese / Spanish (tested patterns). Other languages: AI runtime translation.

## Out of scope (refers out)

- Severe nodulocystic acne → derm for isotretinoin
- Suspicious lesions → urgent derm
- Pregnancy / breastfeeding + retinoid → derm
- Mental health (BDD, picking) → GP

## k-wellness skill

Same repo, second skill: supplements / sleep / cutting / cortisol / hyperventilation / gut. RCT-grounded (6 evidence files: ashwagandha, diet→stress/sleep/eye/gut-gas, vitamin D3+K2).

Trigger terms: insomnia, fatigue, stress, hyperventilation, weight loss, visceral fat, flatus, eye fatigue, supplement stack questions.

Install via Vercel CLI (above) or auto-included when `npx skills add seonglae/k-skincare` interactive.

## License

MIT. Cite RCT primary sources, not this skill.
