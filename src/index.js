import EventEmitter from 'node:events'
import { stdin as input, stdout as output } from 'node:process'
import * as readline from 'node:readline'
import handlerAdd from './handlers/handlerAdd.js'
import handlerCat from './handlers/handlerCat.js'
import handlerCd from './handlers/handlerCd.js'
import handlerLine from './handlers/handlerLine.js'
import handlerLs from './handlers/handlerLs.js'
import handlerUp from './handlers/handlerUp.js'
import displayCurrentDirectory from './helpers/displayCurrentDirectory.js'

displayCurrentDirectory()

const eventEmitter = new EventEmitter()
eventEmitter
  .on('cat', handlerCat)
  .on('add', handlerAdd)
  .on('up', handlerUp)
  .on('cd', handlerCd)
  .on('ls', handlerLs)

const rl = readline.createInterface({
  input,
  output,
})

rl.on('line', handlerLine.bind(rl, eventEmitter))
