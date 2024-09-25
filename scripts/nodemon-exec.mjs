import { run, npxPath } from './utils.mjs'

run(npxPath(), [
  'concurrently',
  '--kill-others-on-fail',
  '--prefix',
  '[{name}]',
  '--prefix-colors',
  'bgBlue.bold,bgRed.bold',
  'npm:start:dev',
  'npm:check',
])
