#!/usr/bin/env node

import { shell } from './utils.mjs'

if (process.argv[1] === import.meta.filename) {
  shell('npx nodemon')
}
