import { shell } from './share/utils'
import fs from 'node:fs'
import path from 'node:path'

function main() {
  shell('mkdir -p dist/src')
  const jsPath = 'dist/src/index.js'
  shell(
    `npx pbjs --target static-module --wrap commonjs --es6 --out ${jsPath} res/goat_rpc.proto`
  )
  shell(`npx pbts --out dist/src/index.d.ts ${jsPath}`)
  const cjsPath = path.format({
    ...path.parse(jsPath),
    base: undefined,
    ext: '.cjs',
  })
  fs.renameSync(jsPath, cjsPath)
}

main()
