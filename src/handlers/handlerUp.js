import { chdir } from 'node:process'
import displayCurrentDirectory from '../helpers/displayCurrentDirectory.js'

export default async function handlerUp() {
  try {
    chdir('..')
    displayCurrentDirectory()
  } catch (error) {
    console.error('Operation failed')
  }
}
