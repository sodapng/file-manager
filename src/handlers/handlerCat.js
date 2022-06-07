import { stdout } from 'node:process'
import { createReadStream } from 'node:fs'
import displayCurrentDirectory from '../helpers/displayCurrentDirectory.js'
import handlerError from './handlerError.js'
import { resolve } from 'node:path'

export default async function handlerCat([pathToFile]) {
  try {
    pathToFile = resolve(pathToFile)
    const readableStream = createReadStream(pathToFile, { encoding: 'utf8' })

    readableStream.on('error', handlerError).on('end', displayCurrentDirectory)

    readableStream.pipe(stdout)
  } catch (error) {
    console.error('Operation failed')
  }
}
