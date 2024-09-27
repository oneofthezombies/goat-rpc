#!/usr/bin/env node

import { shell } from '../utils.mjs'

shell(
  'node --import @swc-node/register/esm-register --enable-source-maps src/index.ts',
  {
    env: {
      ...process.env,
      SWCRC: JSON.stringify(true),
    },
  }
)
