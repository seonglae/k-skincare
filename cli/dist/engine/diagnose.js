export function diagnose(intake) {
    const dx = [];
    if (intake.skinType === 'combination' || intake.skinType === 'oily') {
        if (intake.concerns.includes('dryness')) {
            dx.push('Combination + dehydrated — surface oil, deeper dehydration');
        }
    }
    if (intake.concerns.includes('body_acne')) {
        dx.push('Body acne (ear/scalp/neck distribution) — Malassezia folliculitis likely (Paichitrojjana 2022 aOR 8.89). Test with ketoconazole 2% shampoo 4wk before reaching for BPO');
    }
    if (intake.concerns.includes('lentigines') || intake.concerns.includes('pigmentation')) {
        dx.push('Pigmentation present — top intervention: daily SPF + Vit C (AM) + retinoid (PM). Procedural escalation: pico 532nm KTP');
    }
    if (intake.concerns.includes('dark_circles')) {
        dx.push('Dark circles — differentiate pigmentary (brown, doesn\'t blanch) vs vascular (blue, blanches) vs structural (shadow on stretch)');
    }
    if (intake.concerns.includes('pie')) {
        dx.push('PIE (post-inflammatory erythema) — Azelaic 15% first-line, PDL 595nm if topical plateau');
    }
    if (intake.age >= 28) {
        dx.push('Age ≥28 — photoaging prevention is high-ROI; retinoid is single most powerful single intervention');
    }
    const isAlkalineCleanser = intake.currentProducts?.cleanser?.toLowerCase().match(/white clay|soap|senka|biore foam/);
    if (isAlkalineCleanser) {
        dx.push('Current cleanser appears alkaline (saponified) — Korting 1995 RCT: alkaline worsens acne, raises pH; consider AM swap to low-pH syndet (PM kept)');
    }
    return dx;
}
