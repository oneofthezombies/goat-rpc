import { shell } from '../../../scripts/utils'
import fs from 'node:fs'
import path from 'node:path'

function pathReext(src: string, ext: string): string {
  return path.format({
    ...path.parse(src),
    base: undefined,
    ext,
  })
}

function fsReextSync(src: string, ext: string) {
  fs.renameSync(src, pathReext(src, ext))
}

function main() {
  shell('mkdir -p dist')
  shell(
    `npx pbjs --target static-module --wrap commonjs --out dist/index.js res/goat_rpc.proto`
  )
  shell(`npx pbts --out dist/index.d.cts dist/index.js`)
  fsReextSync('dist/index.js', '.cjs')
}

main()
