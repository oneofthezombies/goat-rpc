#!/usr/bin/env node

import { shell } from './utils.mjs'

function main() {
  shell('npx swc --out-dir dist src')
  shell('npx tsc --declaration --emitDeclarationOnly')
}

main()
