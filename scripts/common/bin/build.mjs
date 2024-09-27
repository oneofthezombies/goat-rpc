#!/usr/bin/env node

import { run, npxPath } from './utils.mjs'

run(npxPath(), ['swc', '--out-dir', 'dist', 'src'])
run(npxPath(), ['tsc', '--declaration', '--emitDeclarationOnly'])
