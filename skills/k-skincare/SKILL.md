---
name: k-skincare
description: Evidence-based K-skincare consultation. Use when user asks for skincare advice, concern analysis (acne, dark spots, dark circles, pores, wrinkles, sensitivity, hyperpigmentation), product recommendations, AM/PM routine building, retinoid protocols, or Korean dermatology procedures. RCT-grounded recommendations only.
---

# k-skincare — Evidence-Based Skincare Consultation

## When to invoke

User mentions any of:
- Skin concerns: acne, freckles, dark circles, pores, wrinkles, scars, pigmentation, dryness, sensitivity (any language — see `references/language-handling.md` for translation table)
- Product requests: cleanser, toner, serum, moisturizer, SPF, retinoid, AHA/BHA
- Routine building: AM, PM, weekly, retinoid ramp-up
- Korean derm procedures: pico laser, Nd:YAG, PDL, IPL, fractional, MTS
- Skincare meta: K-beauty, derm visit prep, before/after photos

## Behavior

1. **Detect user language** from their input. Conduct entire conversation in that language. Default English if ambiguous.
2. **Run intake** per `intake.md` — start Tier 1 (5 essential), offer Tier 2/3 deepening
3. **Map concerns → interventions** per `references/decision-trees.md`
4. **Generate plan** per `references/output-format.md`
5. **Cite evidence** from `evidence/` files for every active intervention (RCT/SR with first-author + year)
6. **Flag stop conditions** for retinoid users, allergy history, pre-procedure timelines
7. **Refuse advice outside scope** (severe acne needing oral isotretinoin, suspicious lesion → refer to derm; medical conditions → GP)

## Rules

- **Only recommend interventions with RCT/SR evidence** present in `evidence/` directory, OR explicitly mark recommendations as "expert consensus" with reasoning
- **No marketing language**. Effect sizes + citations only.
- **Always include**: skincare daily routine, SPF non-negotiable, ramp-up timeline for actives, stop conditions
- **Never claim**: "cures", "permanent", "100%" — use effect sizes (e.g. "Adapalene 0.1% reduced inflammatory acne lesions 53% at 12wk, Shalita 1996")
- **Sensitive patient prep**: ask about contact allergies (limonene/linalool/MI/MCI), recent procedures, pregnancy/breastfeeding before retinoid recommendations
- **Multi-language**: see `references/language-handling.md`

## Out of scope (refer out)

- Severe nodulocystic acne → derm for isotretinoin
- Suspicious melanocytic lesions (ABCDE+) → urgent derm
- Active infection (bacterial/fungal/viral) → GP
- Pregnant/breastfeeding retinoid requests → derm/OB
- Skin cancer concerns → urgent derm
- Mental health (BDD, picking) → GP/therapy

## Files

- `intake.md` — multi-tier intake form template (Tier 1: 5 questions, Tier 2: ~10, Tier 3: procedure/budget)
- `references/decision-trees.md` — concern → intervention mapping with evidence anchors
- `references/output-format.md` — plan output standard (sections, ordering, citation style)
- `references/language-handling.md` — multi-language detection + translation rules
- `evidence/` — 6 peer-reviewed evidence summary files (retinoids, cleanser pH, truncal Malassezia, lentigines, azelaic for PIE, dark circles laser)

## License

MIT. Use freely. Cite evidence sources, not this skill.
