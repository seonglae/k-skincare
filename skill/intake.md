# Intake Form — k-skincare

**Conduct entire intake in user's detected language.** Translate questions at runtime. Do NOT show this template verbatim — adapt to natural conversational flow.

---

## Tier 1 — Essential (5 questions, ALWAYS ask)

Required to generate any plan.

1. **Demographics**: Age + sex + country/city of residence
   - Why: UV index, Vit D status, climate, healthcare access (UK/KR/US/SEA/EU)

2. **Skin type**: Combination / Oily / Dry / Sensitive / Normal
   - Probe: "Does T-zone get oily by midday? Cheeks tight after wash?"

3. **Top 3 skin concerns ranked**:
   - Common: 여드름/acne, 주근깨/freckles, 다크서클/dark circles, 모공/pores, 잔주름/wrinkles, 자국/scars, 색소/pigmentation, 건조/dryness, 민감/redness, 칙칙/dullness
   - Ask for priority order

4. **Current products** (each step, brand if known):
   - Cleanser (AM + PM same? different?)
   - Toner / essence
   - Serum / treatment
   - Moisturizer
   - SPF (daily? broad-spectrum? amount applied?)
   - Body wash
   - Hair products (if any near face/scalp/neck/ears)

5. **Known allergies / sensitivities**:
   - Contact allergens (fragrance, limonene, linalool, MI/MCI, lanolin, nickel)
   - Recent contact dermatitis or rash episodes
   - Patch-test history

---

## Tier 2 — Refinement (10 questions, ASK if user wants detailed plan)

Trigger: After Tier 1 plan, offer "더 정확히 하려면 추가 질문 받을게" / "Want a more precise plan? 10 more questions."

6. **Acne distribution** (if acne is concern):
   - Face: forehead / cheeks / chin / jawline / nose
   - Body: ears / neck / chest / back / shoulders
   - Lesion type: comedonal (whitehead/blackhead) / inflammatory / nodulocystic

7. **Dark circles type** (if concern):
   - Vascular (blue/purple, fades on pressure)
   - Pigmentary (brown, persists on pressure)
   - Structural (shadow from hollow/eye-bag)
   - Mixed

8. **Pigmentation type** (if concern):
   - Freckles/ephelides (small, UV-sensitive)
   - Solar lentigines (larger, UV history)
   - PIH (brown post-acne)
   - PIE (red post-acne)
   - Melasma (symmetric face mask, hormonal)

9. **Sun exposure history**:
   - Recent intense UV (beach, tropics)?
   - Past tanning bed?
   - Daily outdoor time + SPF compliance

10. **Shower / hair routine**:
    - AM or PM shower?
    - Cleansing order (face first or last?)
    - Hair products (silicone/oil residue near hairline/neck/ears = truncal acne trigger)
    - Pillowcase wash frequency

11. **Diet patterns** (relevant for inflammation + cofactors):
    - Dairy frequency (acne association — Adebamowo 2008)
    - Sugar / high-glycemic load
    - Omega-3 sources (oily fish, EPA supplements)
    - Hydration

12. **Lifestyle**:
    - Sleep hours + quality
    - Stress level (1-10)
    - Smoking / alcohol
    - Exercise (sweat exposure → acne mechanica)

13. **Existing medications / supplements** (skincare-relevant only):
    - Hormonal contraceptives (acne effect)
    - Isotretinoin history (past or present)
    - Topical/oral antibiotics
    - Other skincare-active meds (steroids, etc.)
    - ⚠️ Don't deep-dive supplements/medication — refer to k-wellness skill if available

14. **Budget / willingness for procedures**:
    - OTC only / OTC + Rx topicals / OTC + in-clinic procedures
    - Travel to Korea/Japan/US for procedures? Or local only?

15. **Photos** (request consent):
    - "If comfortable, share self-photos (natural light, no filter, front + 45° L/R) for visual confirmation of concern type"
    - If declined, work from text descriptions only

---

## Tier 3 — Procedure Planning (5 questions, IF Tier 2 budget answer = "open to procedures")

16. **Procedure history**: Past lasers, peels, microneedling?
17. **Downtime tolerance**: 0 / few hours / 1-3 days / 1 week
18. **Pain tolerance + numbing**: OK with topical anesthetic / IV sedation needed
19. **Clinic access**: City / country
20. **Timeline**: Single trip vs ongoing series (4-6 sessions standard for pico)

---

## Behavior rules

- **Don't ask all at once**. Conversational, one batch at a time.
- **Tier 1 → output basic plan → offer Tier 2** (don't auto-cascade).
- **Skip questions not relevant** to user's concerns (e.g. if no acne → skip Tier 2 Q6).
- **Probe vague answers**: "건조해요" → ask T-zone vs cheeks, tightness vs flaking
- **Save user's answers** mentally for the output stage — don't re-ask.
- **Multi-language**: translate every question into user's language. Keep technical terms (Adapalene, niacinamide, RCT) in English with brief native explanation.

## Anti-patterns

- ❌ Long bullet-point form dump
- ❌ Medical history far outside skin (refer to k-wellness)
- ❌ Asking same question 3 ways
- ❌ Recommendations before Tier 1 complete
- ❌ Generic "drink water + wear SPF" — useless without intake context
