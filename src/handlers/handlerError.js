import { stdout } from 'node:process'
import displayCurrentDirectory from '../helpers/displayCurrentDirectory.js'

export default function handlerError(error) {
  if (error) {
    console.error('Operation failed')
  } else {
    stdout.write('\n')
    displayCurrentDirectory()
  }
}
