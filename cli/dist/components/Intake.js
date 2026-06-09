import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Box, Text } from 'ink';
import { TextInput, Select, MultiSelect } from '@inkjs/ui';
export default function IntakeForm({ onComplete }) {
    const [step, setStep] = useState('age');
    const [data, setData] = useState({ currentProducts: {} });
    if (step === 'age') {
        return (_jsxs(Box, { flexDirection: "column", children: [_jsx(Text, { bold: true, children: "Age?" }), _jsx(TextInput, { placeholder: "29", onSubmit: (v) => {
                        const n = parseInt(v, 10);
                        if (!isNaN(n)) {
                            setData({ ...data, age: n });
                            setStep('gender');
                        }
                    } })] }));
    }
    if (step === 'gender') {
        return (_jsxs(Box, { flexDirection: "column", children: [_jsx(Text, { bold: true, children: "Gender?" }), _jsx(Select, { options: [
                        { label: 'Male', value: 'm' },
                        { label: 'Female', value: 'f' },
                        { label: 'Other', value: 'other' },
                    ], onChange: (value) => {
                        setData({ ...data, gender: value });
                        setStep('region');
                    } })] }));
    }
    if (step === 'region') {
        return (_jsxs(Box, { flexDirection: "column", children: [_jsx(Text, { bold: true, children: "Region (for product availability)?" }), _jsx(Select, { options: [
                        { label: 'UK', value: 'uk' },
                        { label: 'Korea', value: 'kr' },
                        { label: 'US', value: 'us' },
                        { label: 'EU', value: 'eu' },
                    ], onChange: (value) => {
                        setData({ ...data, region: value });
                        setStep('skinType');
                    } })] }));
    }
    if (step === 'skinType') {
        return (_jsxs(Box, { flexDirection: "column", children: [_jsx(Text, { bold: true, children: "Skin type?" }), _jsx(Select, { options: [
                        { label: 'Combination (oily T-zone, dry cheeks)', value: 'combination' },
                        { label: 'Oily', value: 'oily' },
                        { label: 'Dry', value: 'dry' },
                        { label: 'Sensitive', value: 'sensitive' },
                        { label: 'Normal', value: 'normal' },
                    ], onChange: (value) => {
                        setData({ ...data, skinType: value });
                        setStep('concerns');
                    } })] }));
    }
    if (step === 'concerns') {
        return (_jsxs(Box, { flexDirection: "column", children: [_jsx(Text, { bold: true, children: "Concerns? (space to select, enter to confirm \u2014 max 5)" }), _jsx(MultiSelect, { options: [
                        { label: 'Acne', value: 'acne' },
                        { label: 'Pigmentation / PIH', value: 'pigmentation' },
                        { label: 'Solar lentigines (sunspots)', value: 'lentigines' },
                        { label: 'Enlarged pores', value: 'pores' },
                        { label: 'Dryness / tightness', value: 'dryness' },
                        { label: 'Redness / flushing', value: 'redness' },
                        { label: 'PIE (post-acne red marks)', value: 'pie' },
                        { label: 'Dark circles', value: 'dark_circles' },
                        { label: 'Fine lines', value: 'wrinkles' },
                        { label: 'Photoaging (general)', value: 'photoaging' },
                        { label: 'Body acne (ear/scalp/neck)', value: 'body_acne' },
                        { label: 'Suspected Malassezia folliculitis', value: 'malassezia' },
                    ], onSubmit: (values) => {
                        const c = values.slice(0, 5);
                        setData({ ...data, concerns: c });
                        setStep('budget');
                    } })] }));
    }
    if (step === 'budget') {
        return (_jsxs(Box, { flexDirection: "column", children: [_jsx(Text, { bold: true, children: "Budget per product?" }), _jsx(Select, { options: [
                        { label: 'Low (£20 cap)', value: 'low' },
                        { label: 'Mid (£35 cap)', value: 'mid' },
                        { label: 'High (£200 cap)', value: 'high' },
                    ], onChange: (value) => {
                        const final = { ...data, budget: value };
                        setStep('done');
                        onComplete(final);
                    } })] }));
    }
    return _jsx(Text, { dimColor: true, children: "Computing recommendations\u2026" });
}
