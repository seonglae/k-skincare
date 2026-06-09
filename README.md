# k-skincare

Evidence-based K-skincare consultation skill for Claude Code. RCT-grounded. Multi-language.

## Install

### Option 1 — Vercel skills CLI (recommended, multi-agent: Claude Code, Cursor, Cline, Copilot, 18+)

```bash
npx skills add seonglae/k-skincare                                # interactive
npx skills add seonglae/k-skincare -g -a claude-code -y           # global, non-interactive
npx skills add seonglae/k-skincare --list                         # show all skills in repo
```

### Option 2 — Standalone installer (Claude Code only)

```bash
npx k-skincare init             # global → ~/.claude/skills/k-skincare/
npx k-skincare init --local     # project → ./.claude/skills/k-skincare/
npx k-skincare uninstall        # remove
```

Restart Claude Code (or `/skills` refresh) — skill auto-activates when user asks about skincare.

### Option 3 — Standalone interactive CLI (no Claude required)

```bash
npx k-skincare-cli              # terminal wizard, rule-based engine, English only
```

Pastel + Ink TUI. Takes age / sex / region / skin type / concerns / budget → outputs routine + shopping list + RCT citations.

## What it does

Triggers when user mentions:
- Skin concerns (acne, dark circles, pigmentation, pores, wrinkles, sensitivity, scars)
- Product recommendations (cleanser, toner, serum, moisturizer, SPF, retinoid)
- Routine building (AM, PM, retinoid ramp-up)
- Korean derm procedures (pico, Nd:YAG, PDL, IPL, fractional)

## Behavior

1. **Detects user language** — conducts entire conversation in detected language
2. **Tier 1 intake** (5 essential questions) → basic plan
3. **Offers Tier 2** (10 more) → refined plan
4. **Tier 3** (procedure planning) if user open to in-clinic
5. **Output**: personalized AM/PM routine + ramp-up + shopping list + stop conditions + RCT citations

## Evidence base

`skills/k-skincare/evidence/` — 6 peer-reviewed summary files covering:

- Retinoid efficacy (Shalita 1996, Bagatin 2018, Kang 2005)
- Cleanser pH (Korting 1995, Gfatter 1997)
- Truncal Malassezia folliculitis (Paichitrojjana 2022)
- Solar lentigines / pico laser (Vachiramon 2022, Negishi 2018)
- Azelaic acid for PIE/PIH (Liu 2024, Thiboutot 2003)
- Dark circles laser selection (AlRamthan 2024)

All PMIDs/DOIs verified. No marketing claims.

## Language support

Korean / English / Japanese / Chinese / Spanish (tested patterns). Other languages: AI runtime translation.

## Out of scope (refers out)

- Severe nodulocystic acne → derm for isotretinoin
- Suspicious lesions → urgent derm
- Pregnancy / breastfeeding + retinoid → derm
- Mental health (BDD, picking) → GP

## Companion (coming)

Supplements / nutrition / sleep / cortisol / cutting → `k-wellness` (separate skill).

## Uninstall

```bash
npx k-skincare uninstall          # global
npx k-skincare uninstall --local  # project-local
```

## License

MIT. Cite RCT primary sources, not this skill.
