import path from 'path'
import fs from 'fs'

async function symlink(rootPath, filename) {
  const srcPath = path.resolve(rootPath, filename)
  if (!fs.existsSync(srcPath)) {
    throw new Error(`source ${filename} not found. path: ${srcPath}`)
  }

  const dstPath = path.resolve(process.cwd(), filename)
  if (srcPath === dstPath) {
    return
  }

  if (fs.existsSync(dstPath)) {
    const stat = fs.statSync(dstPath)
    if (stat.nlink === 0) {
      throw new Error(
        `destination ${filename} is not a symbolic link. path: ${dstPath}`
      )
    }

    fs.rmSync(dstPath, { force: true })
  }

  fs.symlinkSync(srcPath, dstPath)
  console.log(`symbolic linked. ${srcPath} -> ${dstPath}`)
}

function parseArgv() {
  if (process.argv.length < 3) {
    throw new Error(`argv[2] must workspace's root path`)
  }

  const rootPath = process.argv[2]
  if (!fs.existsSync(rootPath)) {
    throw new Error(`root path is not exist. path: ${rootPath}`)
  }

  return {
    rootPath,
  }
}

const { rootPath } = parseArgv()
symlink(rootPath, '.swcrc')
symlink(rootPath, 'scripts')
