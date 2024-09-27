#!/usr/bin/env node

import { shell } from './common/utils.mjs'

shell('mkdir -p dist/src')
shell(
  'npx pbjs --target static-module --wrap commonjs --es6 --out dist/src/generated.cjs res/goat_rpc.proto'
)
shell(
  'npx pbjs --target static-module --wrap commonjs --es6 res/goat_rpc.proto | npx pbts --out dist/src/generated.d.ts -'
)
