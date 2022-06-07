import { createHash } from 'node:crypto'
import { createReadStream } from 'node:fs'
import { resolve } from 'node:path'
import { stdout } from 'node:process'
import { finished } from 'node:stream'
import displayCurrentDirectory from '../helpers/displayCurrentDirectory.js'
import handlerError from './handlerError.js'

export default async function handlerHash([pathToFile]) {
  try {
    pathToFile = resolve(pathToFile)
    const hash = createHash('sha256')
    const readableStream = createReadStream(pathToFile)

    readableStream.pipe(hash).setEncoding('hex').pipe(stdout)

    finished(readableStream, (error) => {
      if (error) {
        handlerError(error)
      } else {
        stdout.write('\n')
        displayCurrentDirectory()
      }
    })
  } catch (error) {
    console.error('Operation failed')
  }
}
