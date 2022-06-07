import { stdout } from 'node:process'
import { createReadStream } from 'node:fs'
import displayCurrentDirectory from '../helpers/displayCurrentDirectory.js'
import handlerError from './handlerError.js'
import { resolve } from 'node:path'
import { finished } from 'node:stream'

export default async function handlerCat([pathToFile]) {
  try {
    pathToFile = resolve(pathToFile)
    const readableStream = createReadStream(pathToFile, { encoding: 'utf8' })

    readableStream.pipe(stdout)

    finished(readableStream, (error) => {
      if (error) {
        handlerError()
      } else {
        stdout.write('\n')
        displayCurrentDirectory()
      }
    })
  } catch (error) {
    console.error('Operation failed')
  }
}
