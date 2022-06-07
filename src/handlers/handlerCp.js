import { copyFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import displayCurrentDirectory from '../helpers/displayCurrentDirectory.js'

export default async function handlerCp([pathToFile, pathToNewDirectory]) {
  try {
    pathToFile = resolve(pathToFile)
    pathToNewDirectory = resolve(pathToNewDirectory)
    console.log(pathToFile, pathToNewDirectory)
    await copyFile(pathToFile, pathToNewDirectory)
    displayCurrentDirectory()
  } catch (error) {
    console.error('Operation failed')
  }
}
