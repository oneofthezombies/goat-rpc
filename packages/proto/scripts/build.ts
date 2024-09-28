import { shell } from '../../../scripts/utils'
import fs from 'node:fs'
import path from 'node:path'

function reext(src: string, ext: string): string {
  return path.format({
    ...path.parse(src),
    base: undefined,
    ext,
  })
}

function main() {
  shell('mkdir -p dist')
  shell(
    `npx pbjs --target static-module --wrap commonjs --out dist/index.js res/goat_rpc.proto`
  )
  shell(`npx pbts --out dist/index.d.cts dist/index.js`)

  // fs.renameSync('dist/index.js', reext('dist/index.js', '.cjs'))
  // shell(
  //   `npx pbjs --target static-module --wrap es6 --es6 --out dist/index.js res/goat_rpc.proto`
  // )
  // shell(`npx pbts --out dist/index.d.mts dist/index.js`)
  // fs.renameSync('dist/index.js', reext('dist/index.js', '.mjs'))
}

main()
