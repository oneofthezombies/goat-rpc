import { shell } from './share/utils'
import fs from 'node:fs'
import path from 'node:path'

function main() {
  shell('mkdir -p dist')
  const jsPath = 'dist/index.js'
  shell(
    `npx pbjs --target static-module --wrap commonjs --out ${jsPath} res/goat_rpc.proto`
  )
  shell(`npx pbts --out dist/index.d.cts ${jsPath}`)
  fs.renameSync(
    jsPath,
    path.format({
      ...path.parse(jsPath),
      base: undefined,
      ext: '.cjs',
    })
  )
  shell(
    `npx pbjs --target static-module --wrap es6 --es6 --out ${jsPath} res/goat_rpc.proto`
  )
  shell(`npx pbts --out dist/index.d.mts ${jsPath}`)
  fs.renameSync(
    jsPath,
    path.format({
      ...path.parse(jsPath),
      base: undefined,
      ext: '.mjs',
    })
  )
}

main()
