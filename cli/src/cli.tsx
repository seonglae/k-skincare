#!/usr/bin/env node
import Pastel from 'pastel';

const app = new Pastel({
  importMeta: import.meta,
  name: 'k-skincare',
  description: 'Evidence-based K-skincare consultation CLI',
  version: '0.1.0',
});

await app.run();
