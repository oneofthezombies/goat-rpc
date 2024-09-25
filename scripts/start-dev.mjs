import { run } from './utils.mjs'

run(
  process.argv[0],
  [
    '--import',
    '@swc-node/register/esm-register',
    '--enable-source-maps',
    'src/index.ts',
  ],
  {
    env: {
      ...process.env,
      SWCRC: JSON.stringify(true),
    },
  }
)
