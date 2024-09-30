import { spawnSync, SpawnSyncOptions } from 'node:child_process'

export function run(
  command: string,
  args?: string[],
  options?: SpawnSyncOptions
) {
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

    console.error(
      `${command} ${args.join(
        ' '
      )} exited with code ${result.status.toString()}`
    )
    process.exit(result.status)
  }

  if (result.signal !== null) {
    console.error(
      `${command} ${args.join(' ')} exited with signal ${result.signal}`
    )
    process.exit(1)
  }

  throw new Error(`unexpected run result. result: ${JSON.stringify(result)}`)
}

export function shell(command: string, options?: SpawnSyncOptions) {
  options ??= {}
  if (options.shell === undefined) {
    options.shell = true
  }

  run(command, [], options)
}
