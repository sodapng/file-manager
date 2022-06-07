import EventEmitter from 'node:events'
import { stdin as input, stdout as output } from 'node:process'
import * as readline from 'node:readline'
import handlerAdd from './handlers/handlerAdd.js'
import handlerCat from './handlers/handlerCat.js'
import handlerCd from './handlers/handlerCd.js'
import handlerCp from './handlers/handlerCp.js'
import handlerLine from './handlers/handlerLine.js'
import handlerLs from './handlers/handlerLs.js'
import handlerMv from './handlers/handlerMv.js'
import handlerRm from './handlers/handlerRm.js'
import handlerRn from './handlers/handlerRn.js'
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
  .on('rn', handlerRn)
  .on('cp', handlerCp)
  .on('rm', handlerRm)
  .on('mv', handlerMv)

const rl = readline.createInterface({
  input,
  output,
})

rl.on('line', handlerLine.bind(rl, eventEmitter))
