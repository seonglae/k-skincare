# Output Format — k-skincare Plan

Generate plan in user's detected language. Use the structure below; translate section headers but keep RCT citations and brand names in original.

---

## Required sections (in order)

### 1. **Summary** (3-5 lines)
- Patient profile: 1 line (age/sex/region/skin type)
- Top 3 concerns with priority
- Overall strategy: 1 line

### 2. **Concern → Intervention Mapping** (table)

| # | Concern | OTC Action | Rx / In-clinic | Evidence |
|---|---|---|---|---|
| 1 | … | … | … | First-author Year (PMID) |

### 3. **AM Routine** (table)

| Step | Product | Note |
|---|---|---|
| 1 | Cleanser | pH, technique |
| 2 | Toner / essence | — |
| 3 | Serum (Vit C 15%) | absorption time |
| 4 | Eye cream | dot count, technique |
| 5 | Moisturizer | layer count |
| 6 | SPF 50+ broad-spectrum | dose: 2 fingers facial |

### 4. **PM Routine** (table, per day if alternating actives)

```
D1 (Adapalene night): cleanser → 1-2min dry → moisturizer thin → Adapalene → moisturizer thick
D2 (Off): cleanser → toner → eye cream → moisturizer
```

### 5. **Active Ramp-Up Schedule**

| Week | Frequency | Note |
|---|---|---|
| W1-2 | Mon/Wed | adaptation |
| W3-4 | Mon/Wed/Fri | escalate |
| W5+ | every other day | stable |

### 6. **Shopping List** (priority + cost estimate)

| # | Product | Use | Cost (region) |
|---|---|---|---|
| 1 | … | AM cleanser | £X / ₩X / $X |

Order: 가장 필요 → 옵션. Mark each "필수 / 권장 / 옵션".

### 7. **Stop Conditions** (safety)

| Issue | Action |
|---|---|
| Severe dryness >7 days | pause retinoid 1 week |
| Bleeding / crusting | stop active, GP if persistent |
| Eczematous reaction | identify trigger, simplify routine |
| Pre-procedure (laser/peel) | stop Adapalene 7 days before |

### 8. **Evaluation Checkpoints**

- **W4**: photo + symptom score (1-10)
- **W8**: assess Adapalene + active tolerance
- **W12**: progress photos vs baseline, derm if stalled
- **W24**: maintenance phase decision

### 9. **Refer Out** (if applicable)

- Severe acne / nodulocystic → derm (isotretinoin eval)
- Suspicious lesion → urgent derm
- Pregnant / planning pregnancy → derm (retinoid contraindication)
- Skin cancer family history + UV history → derm screening

### 10. **Evidence Citations**

For every active intervention, cite:
- First-author Year + journal abbreviation
- Effect size with units (e.g., "Adapalene 0.1% → 53% inflammatory acne lesion reduction at 12wk")
- Link to `evidence/<file>.md` for full breakdown

---

## Citation style

```
[Intervention] (Author Year, Journal): effect size with CI if available
```

Example: "Adapalene 0.1% (Shalita 1996, JAAD): -53% inflammatory acne at 12wk vs placebo -19%, n=297"

Avoid:
- "Studies show…" (which studies?)
- "Many derms recommend…" (anecdote)
- Marketing claims ("brightening", "rejuvenating") without effect size

---

## Tone

- **Direct** — no hedging like "you might consider"
- **Specific** — dose, frequency, duration
- **Honest** — say "no strong RCT" when evidence weak, "expert consensus" when needed
- **Brief** — tables over paragraphs
- **User's language** — full output in detected language; keep brand/RCT/Latin terms in original with brief gloss

---

## Anti-patterns

- ❌ Wall-of-text plan (use tables)
- ❌ Missing citations
- ❌ Overpromising ("clear skin in 30 days")
- ❌ Recommend more than 5 actives (overload)
- ❌ Skip stop conditions
- ❌ Skip SPF
- ❌ Ignore user's actual products (start fresh slate)
- ❌ Generic "K-skincare" routine without addressing concerns
- ❌ Auto-recommend in-clinic without checking budget (Tier 2 Q14)
