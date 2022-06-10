import displayCurrentDirectory from '../helpers/displayCurrentDirectory.js'

export default function handlerError(error) {
  if (error) {
    console.error('Operation failed')
  } else {
    displayCurrentDirectory()
  }
}
