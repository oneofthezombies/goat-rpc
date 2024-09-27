#!/usr/bin/env node

import path from 'node:path'
import fs from 'node:fs'

/**
 *
 * @param {string} rootPath
 * @param {string} filename
 * @returns {void}
 */
function symlink(rootPath, filename) {
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

    fs.rmSync(dstPath, { force: true, recursive: true })
  }

  fs.mkdirSync(path.dirname(dstPath), { recursive: true })
  fs.symlinkSync(srcPath, dstPath)
}

/**
 *
 * @returns {{rootPath: string}}
 */
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

if (process.argv[1] === import.meta.filename) {
  const { rootPath } = parseArgv()
  const srcs = ['scripts/share', '.swcrc', 'nodemon.json']
  for (const src of srcs) {
    symlink(rootPath, src)
  }
  console.log(
    `symlinked ${srcs.join(' ')} from ${rootPath} to ${process.cwd()}`
  )
}
