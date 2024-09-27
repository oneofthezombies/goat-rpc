#!/usr/bin/env node

import { run, npxPath } from './common/utils.mjs'

run('mkdir', ['-p', 'dist/src'])
run(npxPath(), [
  'pbjs',
  '--target',
  'static-module',
  '--wrap',
  'commonjs',
  '--es6',
  '--out',
  'dist/src/generated.cjs',
  'res/goat_rpc.proto',
])

run(
  [
    'npx',
    'pbjs',
    '--target',
    'static-module',
    '--wrap',
    'commonjs',
    '--es6',
    'res/goat_rpc.proto',
    '|',
    'npx',
    'pbts',
    '--out',
    'dist/src/generated.d.ts',
    '-',
  ].join(' '),
  [],
  { shell: true }
)
