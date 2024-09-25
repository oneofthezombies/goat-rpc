import { spawnSync } from 'child_process'
import path from 'path'

export function run(command, args, options) {
  args ??= []
  options ??= {}
  if (options.stdio === undefined) {
    options.stdio = 'inherit'
  }

  const result = spawnSync(command, args, options)
  if (result.error) {
    throw result.error
  }

  if (result.status !== null) {
    if (result.status === 0) {
      return
    }

    throw new Error(
      `${command} ${args.join(' ')} exited with code ${result.status}`
    )
  }

  if (result.signal !== null) {
    throw new Error(
      `${command} ${args.join(' ')} exited with signal ${result.signal}`
    )
  }

  throw new Error(`unexpected run result. result: ${result}`)
}

export function npxPath() {
  return path.resolve(path.dirname(process.execPath), 'npx')
}
