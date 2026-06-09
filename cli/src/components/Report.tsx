import React from 'react';
import { Box, Text } from 'ink';
import type { Report } from '../engine/types.js';

export default function ReportView({ report, region }: { report: Report; region: 'uk' | 'kr' | 'us' | 'eu' }) {
  const currency = region === 'kr' ? '₩' : region === 'us' ? '$' : '£';
  return (
    <Box flexDirection="column" gap={1}>
      <Box>
        <Text bold color="cyan">━━ Diagnosis ━━</Text>
      </Box>
      {report.diagnosis.map((d, i) => (
        <Text key={i}>• {d}</Text>
      ))}

      <Box marginTop={1}>
        <Text bold color="cyan">━━ AM Routine ━━</Text>
      </Box>
      {report.routine.am.map((s) => (
        <Text key={s.step}>
          {s.step}. <Text bold>{s.product}</Text>
          {s.note && <Text dimColor>  ({s.note})</Text>}
        </Text>
      ))}

      <Box marginTop={1}>
        <Text bold color="cyan">━━ PM Routine ━━</Text>
      </Box>
      {Object.entries(report.routine.pm).map(([day, steps]) => (
        <Box key={day} flexDirection="column">
          <Text bold color="magenta">{day}:</Text>
          {steps.map((s: any) => (
            <Text key={s.step}>  {s.step}. {s.product} {s.note && <Text dimColor>— {s.note}</Text>}</Text>
          ))}
        </Box>
      ))}

      <Box marginTop={1}>
        <Text bold color="cyan">━━ Shopping ━━</Text>
      </Box>
      {report.shopping.map((p) => (
        <Text key={p.id}>
          • <Text bold>{p.brand} {p.name}</Text> — {currency}{p.price[region]}
        </Text>
      ))}

      <Box marginTop={1}>
        <Text bold color="cyan">━━ Evidence (RCT) ━━</Text>
      </Box>
      {report.citations.slice(0, 8).map((c, i) => (
        <Text key={i}>
          • <Text color="green">[{c.quality}]</Text> {c.paper} — <Text dimColor>{c.effect}</Text>
        </Text>
      ))}

      {report.warnings.length > 0 && (
        <>
          <Box marginTop={1}>
            <Text bold color="yellow">━━ ⚠️  Warnings ━━</Text>
          </Box>
          {report.warnings.map((w, i) => (
            <Text key={i} color="yellow">• {w}</Text>
          ))}
        </>
      )}
    </Box>
  );
}
