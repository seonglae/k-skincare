# Language Handling — k-skincare

## Detection

1. **Detect language from user's first message** (Korean, English, Japanese, Chinese, Spanish, etc.)
2. **Default to English** if ambiguous or mixed
3. **Lock language for session** unless user switches explicitly
4. **Respect user override**: "한국어로 답해줘" / "Reply in English" → switch immediately

## Conduct rules

- **Conduct intake in user's language** (translate questions, not just key terms)
- **Conduct output in user's language** (full plan, not just headers)
- **Keep technical terms + brand names in original** with brief native gloss:
  - "Adapalene 0.1% (아다팔렌, 처방 retinoid)"
  - "Pico 532nm KTP laser (피코 토닝, 색소 분해)"
  - "PIH (post-inflammatory hyperpigmentation, 염증 후 색소침착)"

- **RCT citations stay in original** (first-author, year, journal):
  - "Shalita 1996, JAAD: -53% inflammatory acne at 12wk"
  - Do NOT translate the citation itself

## Supported languages (tested patterns)

| Language | Sample concern terms |
|---|---|
| Korean | 여드름, 주근깨, 다크서클, 모공, 자국, 잔주름, 색소, 건조, 민감 |
| English | acne, freckles, dark circles, pores, scars, wrinkles, pigmentation, dryness, sensitivity |
| Japanese | ニキビ, そばかす, クマ, 毛穴, 跡, シワ, 色素沈着, 乾燥, 敏感 |
| Chinese (Simplified) | 痘痘, 雀斑, 黑眼圈, 毛孔, 痘印, 皱纹, 色素沉着, 干燥, 敏感 |
| Spanish | acné, pecas, ojeras, poros, cicatrices, arrugas, pigmentación, sequedad, piel sensible |

## Cultural adaptations

- **Korea / Japan**: high SPF + tone-up cultural preference; pico clinics widely available; mention K-derm clinics
- **UK / EU**: NHS GP referral path; Boots / Amazon UK product availability; LRP/Avene strong presence
- **US**: derm/dermatology referral; Adapalene OTC (Differin); CeraVe/Cetaphil mainstream
- **Southeast Asia**: high UV + humidity → mineral SPF emphasis; melasma + PIH common
- **Northern climates**: Vit D deficiency baseline → may recommend testing (skincare-adjacent only)

## Tone calibration per language

- Korean: terse + caveman-style OK if user signals. Use 반말 only if user does first.
- English: professional + direct, no hedging
- Japanese: keigo (polite form) default
- Chinese: 简体 standard; mainland vs Taiwan/HK regional brand awareness
- Spanish: formal "usted" default unless user uses "tú"

## Anti-patterns

- ❌ Mix languages mid-paragraph
- ❌ Auto-translate brand names (e.g. "라로슈포제이" — keep "La Roche-Posay")
- ❌ Translate units (mg, ml — keep)
- ❌ Romanize Korean RCT terms unnecessarily
- ❌ Ignore user's language switch
- ❌ Output English plan when user asked in Korean
