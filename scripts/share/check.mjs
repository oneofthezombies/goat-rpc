#!/usr/bin/env node

import { shell } from './utils.mjs'

function main() {
  shell('npx tsc --noEmit')
}

main()
