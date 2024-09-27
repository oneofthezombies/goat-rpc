import { shell } from './utils'

function main() {
  shell('scripts/share/ts-node.sh src/index.ts', {
    env: {
      ...process.env,
      SWCRC: JSON.stringify(true),
    },
  })
}

main()
