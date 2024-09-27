#!/usr/bin/env node

import { shell } from './share/utils.mjs'
import fs from 'node:fs'
import path from 'node:path'

if (process.argv[1] === import.meta.filename) {
  shell('mkdir -p dist/src')
  const jsPath = 'dist/src/generated.js'
  shell(
    `npx pbjs --target static-module --wrap commonjs --es6 --out ${jsPath} res/goat_rpc.proto`
  )
  shell(`npx npx pbts --out dist/src/generated.d.ts ${jsPath}`)
  const cjsPath = path.format({
    ...path.parse(jsPath),
    base: undefined,
    ext: '.cjs',
  })
  fs.renameSync(jsPath, cjsPath)
}
