# Language Handling — k-wellness

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
| Korean | 수면, 불면, 피로, 스트레스, 과호흡, 살빼기, 내장지방, 방귀, 눈피로, 영양제 |
| English | sleep, insomnia, fatigue, stress, hyperventilation, weight loss, visceral fat, flatus, eye fatigue, supplements |
| Japanese | 睡眠, 不眠, 疲労, ストレス, 過呼吸, 減量, 内臓脂肪, おなら, 眼精疲労, サプリ |
| Chinese (Simplified) | 睡眠, 失眠, 疲劳, 压力, 过度换气, 减肥, 内脏脂肪, 排气, 眼疲劳, 补充剂 |
| Spanish | sueño, insomnio, fatiga, estrés, hiperventilación, pérdida de peso, grasa visceral, flatulencia, fatiga ocular, suplementos |

## Cultural adaptations

- **Korea / Japan**: high screen time + indoor lifestyle → Vit D + lutein common; melatonin Rx only in Korea
- **UK / EU**: NHS GP for sleep/Vit D testing free; Boots availability; melatonin Rx only (Circadin / Slenyto)
- **US**: derm/dermatology referral; Adapalene OTC (Differin); CeraVe/Cetaphil mainstream
- **Southeast Asia**: high UV + humidity → mineral SPF emphasis; melasma + PIH common
- **Northern climates**: Vit D deficiency baseline → may recommend testing (wellness-adjacent only)

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
