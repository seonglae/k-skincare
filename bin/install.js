#!/usr/bin/env node
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import { existsSync, mkdirSync, cpSync, readFileSync, rmSync } from 'node:fs';
import { homedir } from 'node:os';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PKG_ROOT = resolve(__dirname, '..');
const SKILL_SRC = join(PKG_ROOT, 'skills', 'k-skincare');

const args = process.argv.slice(2);
const cmd = args[0];

if (!cmd || cmd === 'help' || cmd === '--help' || cmd === '-h') {
  printHelp();
  process.exit(0);
}

if (cmd === 'init') {
  const local = args.includes('--local');
  install({ local });
  process.exit(0);
}

if (cmd === 'uninstall') {
  const local = args.includes('--local');
  uninstall({ local });
  process.exit(0);
}

console.error(`Unknown command: ${cmd}\n`);
printHelp();
process.exit(1);

function printHelp() {
  const pkg = JSON.parse(readFileSync(join(PKG_ROOT, 'package.json'), 'utf-8'));
  console.log(`
${pkg.name} v${pkg.version}
${pkg.description}

Usage:
  npx ${pkg.name} init             Install skill globally (~/.claude/skills/k-skincare/)
  npx ${pkg.name} init --local     Install skill in current project (./.claude/skills/k-skincare/)
  npx ${pkg.name} uninstall        Remove globally-installed skill
  npx ${pkg.name} uninstall --local Remove project-local skill
  npx ${pkg.name} help             Show this help

After install, restart Claude Code or run /skills to refresh.
Skill auto-activates when user asks about skincare, acne, pigmentation, retinoids, K-derm procedures.

Evidence: ${pkg.homepage || 'https://github.com/seonglae/k-skincare'}
`);
}

function targetDir(local) {
  const base = local ? join(process.cwd(), '.claude', 'skills') : join(homedir(), '.claude', 'skills');
  return join(base, 'k-skincare');
}

function install({ local }) {
  const dest = targetDir(local);
  const where = local ? 'project' : 'global';

  if (!existsSync(SKILL_SRC)) {
    console.error(`Skill source missing: ${SKILL_SRC}`);
    process.exit(1);
  }

  mkdirSync(dest, { recursive: true });
  cpSync(SKILL_SRC, dest, { recursive: true, force: true });

  console.log(`\n✅ k-skincare installed (${where}): ${dest}`);
  console.log(`
Files copied:
  - SKILL.md (entry)
  - intake.md (multi-tier form template)
  - references/decision-trees.md
  - references/output-format.md
  - references/language-handling.md
  - evidence/ (6 RCT summary files)

Next:
  1. Restart Claude Code (or run /skills to refresh discovery)
  2. Ask a skincare question in any language — skill auto-activates
Uninstall: npx k-skincare uninstall${local ? ' --local' : ''}
`);
}

function uninstall({ local }) {
  const dest = targetDir(local);
  if (!existsSync(dest)) {
    console.log(`Not installed at: ${dest}`);
    process.exit(0);
  }
  rmSync(dest, { recursive: true, force: true });
  console.log(`✅ Removed: ${dest}`);
}
