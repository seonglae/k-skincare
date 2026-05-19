import React, { useState } from 'react';
import { Box, Text } from 'ink';
import { TextInput, Select, MultiSelect } from '@inkjs/ui';
import type { Intake } from '../engine/types.js';

type Step =
  | 'age'
  | 'gender'
  | 'region'
  | 'skinType'
  | 'concerns'
  | 'budget'
  | 'done';

export default function IntakeForm({ onComplete }: { onComplete: (i: Intake) => void }) {
  const [step, setStep] = useState<Step>('age');
  const [data, setData] = useState<Partial<Intake>>({ currentProducts: {} });

  if (step === 'age') {
    return (
      <Box flexDirection="column">
        <Text bold>Age?</Text>
        <TextInput
          placeholder="29"
          onSubmit={(v) => {
            const n = parseInt(v, 10);
            if (!isNaN(n)) {
              setData({ ...data, age: n });
              setStep('gender');
            }
          }}
        />
      </Box>
    );
  }

  if (step === 'gender') {
    return (
      <Box flexDirection="column">
        <Text bold>Gender?</Text>
        <Select
          options={[
            { label: 'Male', value: 'm' },
            { label: 'Female', value: 'f' },
            { label: 'Other', value: 'other' },
          ]}
          onChange={(value) => {
            setData({ ...data, gender: value as 'm' | 'f' | 'other' });
            setStep('region');
          }}
        />
      </Box>
    );
  }

  if (step === 'region') {
    return (
      <Box flexDirection="column">
        <Text bold>Region (for product availability)?</Text>
        <Select
          options={[
            { label: 'UK', value: 'uk' },
            { label: 'Korea', value: 'kr' },
            { label: 'US', value: 'us' },
            { label: 'EU', value: 'eu' },
          ]}
          onChange={(value) => {
            setData({ ...data, region: value as any });
            setStep('skinType');
          }}
        />
      </Box>
    );
  }

  if (step === 'skinType') {
    return (
      <Box flexDirection="column">
        <Text bold>Skin type?</Text>
        <Select
          options={[
            { label: 'Combination (oily T-zone, dry cheeks)', value: 'combination' },
            { label: 'Oily', value: 'oily' },
            { label: 'Dry', value: 'dry' },
            { label: 'Sensitive', value: 'sensitive' },
            { label: 'Normal', value: 'normal' },
          ]}
          onChange={(value) => {
            setData({ ...data, skinType: value as any });
            setStep('concerns');
          }}
        />
      </Box>
    );
  }

  if (step === 'concerns') {
    return (
      <Box flexDirection="column">
        <Text bold>Concerns? (space to select, enter to confirm — max 5)</Text>
        <MultiSelect
          options={[
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
          ]}
          onSubmit={(values) => {
            const c = values.slice(0, 5);
            setData({ ...data, concerns: c as any });
            setStep('budget');
          }}
        />
      </Box>
    );
  }

  if (step === 'budget') {
    return (
      <Box flexDirection="column">
        <Text bold>Budget per product?</Text>
        <Select
          options={[
            { label: 'Low (£20 cap)', value: 'low' },
            { label: 'Mid (£35 cap)', value: 'mid' },
            { label: 'High (£200 cap)', value: 'high' },
          ]}
          onChange={(value) => {
            const final = { ...data, budget: value as any } as Intake;
            setStep('done');
            onComplete(final);
          }}
        />
      </Box>
    );
  }

  return <Text dimColor>Computing recommendations…</Text>;
}
