import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Box, Text } from 'ink';
import IntakeForm from '../components/Intake.js';
import ReportView from '../components/Report.js';
import { recommend } from '../engine/recommend.js';
export default function Index() {
    const [report, setReport] = useState(null);
    const [intake, setIntake] = useState(null);
    const handleComplete = (i) => {
        setIntake(i);
        setReport(recommend(i));
    };
    if (!report || !intake) {
        return (_jsxs(Box, { flexDirection: "column", gap: 1, children: [_jsxs(Box, { children: [_jsx(Text, { bold: true, color: "cyan", children: "k-skincare" }), _jsx(Text, { dimColor: true, children: "  evidence-based K-skincare CLI v0.1" })] }), _jsx(IntakeForm, { onComplete: handleComplete })] }));
    }
    return _jsx(ReportView, { report: report, region: intake.region });
}
