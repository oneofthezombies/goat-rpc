import { shell } from './utils'

function main() {
  shell('npx rimraf dist')
}

main()
