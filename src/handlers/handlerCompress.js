import { createReadStream, createWriteStream } from 'node:fs'
import { parse, resolve } from 'node:path'
import { pipeline } from 'node:stream/promises'
import { createBrotliCompress } from 'node:zlib'
import displayCurrentDirectory from '../helpers/displayCurrentDirectory.js'
import isDirectory from '../helpers/isDirectory.js'
import isFile from '../helpers/isFile.js'

export default async function handlerCompress([pathToFile, pathToDestination]) {
  try {
    const isNotDirectory = !(await isDirectory(pathToDestination))
    const isNotFile = !(await isFile(pathToFile))

    if (isNotDirectory) throw new Error("it's not a directory")
    if (isNotFile) throw new Error("it's not a file")

    pathToFile = resolve(pathToFile)
    const { base } = parse(pathToFile)
    const fileName = `${base}.br`
    pathToDestination = resolve(pathToDestination, fileName)

    const readableStream = createReadStream(pathToFile)
    const writableStream = createWriteStream(pathToDestination)
    const brotliCompress = createBrotliCompress()
    await pipeline(readableStream, brotliCompress, writableStream)
    displayCurrentDirectory()
  } catch (error) {
    console.error('Operation failed')
  }
}
