import { shell } from './utils'

function main() {
  shell('npx swc --out-dir dist src')
  shell('npx tsc --declaration --emitDeclarationOnly')
}

main()
