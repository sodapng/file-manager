import { finished, Writable } from 'node:stream'
import { promisify } from 'node:util'

export const finishedAsync = promisify(finished)

export function customOutput() {
  return new Writable({
    decodeStrings: false,
    write(chunk, _, callback) {
      console.log(chunk)
      callback()
    },
  })
}
