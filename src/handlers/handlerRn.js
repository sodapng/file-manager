import { rename } from 'node:fs/promises'
import { resolve } from 'node:path'
import displayCurrentDirectory from '../helpers/displayCurrentDirectory.js'

export default async function handlerRn([pathToFile, newFileName]) {
  try {
    pathToFile = resolve(pathToFile)
    await rename(pathToFile, newFileName)
    displayCurrentDirectory()
  } catch (error) {
    console.error('Operation failed')
  }
}
