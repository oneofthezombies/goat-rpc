type GenerateOptions = {}

export async function generate(options: GenerateOptions) {
  console.log('generate', options)
}

function parseArgv(argv: string[]): GenerateOptions {
  console.log('parseArgv', argv)
  return {}
}

export async function main(argv: string[]) {
  console.log('main')
  await generate(parseArgv(argv))
}

main(process.argv)
