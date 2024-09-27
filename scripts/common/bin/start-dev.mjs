#!/usr/bin/env node

import { run } from '../utils.mjs'

run(
  process.execPath,
  [
    '--import',
    '@swc-node/register/esm-register',
    '--enable-source-maps',
    'src/index.ts',
  ],
  {
    env: {
      ...process.env,
      SWCRC: JSON.stringify(true),
    },
  }
)
