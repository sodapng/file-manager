import { rename } from 'node:fs/promises'
import { parse, resolve } from 'node:path'
import displayCurrentDirectory from '../helpers/displayCurrentDirectory.js'
import isDirectory from '../helpers/isDirectory.js'

export default async function handlerMv([pathToFile, pathToNewDirectory]) {
  try {
    const isNotDirectory = !(await isDirectory(pathToNewDirectory))

    if (isNotDirectory) throw new Error('invalid path_to_new_directory')

    pathToFile = resolve(pathToFile)
    const { base } = parse(pathToFile)
    pathToNewDirectory = resolve(pathToNewDirectory, base)
    await rename(pathToFile, pathToNewDirectory)
    displayCurrentDirectory()
  } catch (error) {
    console.error('Operation failed')
  }
}
