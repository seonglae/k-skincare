import React, { useState } from 'react';
import { Box, Text } from 'ink';
import IntakeForm from '../components/Intake.js';
import ReportView from '../components/Report.js';
import { recommend } from '../engine/recommend.js';
import type { Intake, Report } from '../engine/types.js';

export default function Index() {
  const [report, setReport] = useState<Report | null>(null);
  const [intake, setIntake] = useState<Intake | null>(null);

  const handleComplete = (i: Intake) => {
    setIntake(i);
    setReport(recommend(i));
  };

  if (!report || !intake) {
    return (
      <Box flexDirection="column" gap={1}>
        <Box>
          <Text bold color="cyan">k-skincare</Text>
          <Text dimColor>  evidence-based K-skincare CLI v0.1</Text>
        </Box>
        <IntakeForm onComplete={handleComplete} />
      </Box>
    );
  }

  return <ReportView report={report} region={intake.region} />;
}
