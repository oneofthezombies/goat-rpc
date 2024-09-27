#!/usr/bin/env node

import { shell } from './utils.mjs'

if (process.argv[1] === import.meta.filename) {
  shell('npx swc --out-dir dist src')
  shell('npx tsc --declaration --emitDeclarationOnly')
}
