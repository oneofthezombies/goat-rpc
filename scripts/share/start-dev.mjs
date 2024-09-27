#!/usr/bin/env node

import { shell } from './utils.mjs'

if (process.argv[1] === import.meta.filename) {
  shell(
    'node --import @swc-node/register/esm-register --enable-source-maps src/index.ts',
    {
      env: {
        ...process.env,
        SWCRC: JSON.stringify(true),
      },
    }
  )
}
