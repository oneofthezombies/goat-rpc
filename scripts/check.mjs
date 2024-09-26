#!/usr/bin/env node

import { run, npxPath } from './utils.mjs'

run(npxPath(), ['tsc', '--noEmit'])
