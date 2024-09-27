import { spawnSync } from 'node:child_process'
import path from 'node:path'

export function run(command, args, options) {
  args ??= []
  options ??= {}
  if (options.stdio === undefined) {
    options.stdio = 'inherit'
  }
  if (options.shell === undefined) {
    options.shell = true
  }

  const result = spawnSync(command, args, options)
  if (result.error) {
    throw result.error
  }

  if (result.status !== null) {
    if (result.status === 0) {
      return
    }

    console.error(
      `${command} ${args.join(' ')} exited with code ${result.status}`
    )
    process.exit(result.status)
  }

  if (result.signal !== null) {
    console.error(
      `${command} ${args.join(' ')} exited with signal ${result.signal}`
    )
    process.exit(1)
  }

  throw new Error(`unexpected run result. result: ${result}`)
}

export function npxPath() {
  return path.resolve(path.dirname(process.execPath), 'npx')
}
