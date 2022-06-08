export default function handlerLine(eventEmitter, line) {
  const [command, ...args] = line.split(' ')

  if (
    /^(?:up|cd|ls|cat|add|rn|cp|mv|rm|os|hash|compress|decompress)/.test(line)
  ) {
    eventEmitter.emit(command, args)
  } else {
    console.error('Invalid input')
  }

  this.prompt()
}
