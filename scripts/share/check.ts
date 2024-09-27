import { shell } from './utils'

function main() {
  shell('npx tsc --noEmit')
}

main()
