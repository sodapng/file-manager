import { open } from 'node:fs/promises'
import { resolve } from 'node:path'
import { cwd } from 'node:process'
import displayCurrentDirectory from '../helpers/displayCurrentDirectory.js'

export default async function handlerAdd([newFileName]) {
  try {
    const pathToFile = resolve(cwd(), newFileName)
    const filehandle = await open(pathToFile, 'a')
    await filehandle.close()
    displayCurrentDirectory()
  } catch (error) {
    console.error('Operation failed')
  }
}
