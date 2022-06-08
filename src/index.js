import EventEmitter from 'node:events'
import { stdin as input, stdout as output } from 'node:process'
import * as readline from 'node:readline'
import handlerAdd from './handlers/handlerAdd.js'
import handlerCat from './handlers/handlerCat.js'
import handlerCd from './handlers/handlerCd.js'
import handlerCompress from './handlers/handlerCompress.js'
import handlerCp from './handlers/handlerCp.js'
import handlerDecompress from './handlers/handlerDecompress.js'
import handlerHash from './handlers/handlerHash.js'
import handlerLine from './handlers/handlerLine.js'
import handlerLs from './handlers/handlerLs.js'
import handlerMv from './handlers/handlerMv.js'
import handlerOs from './handlers/handlerOs.js'
import handlerRm from './handlers/handlerRm.js'
import handlerRn from './handlers/handlerRn.js'
import handlerUp from './handlers/handlerUp.js'
import displayCurrentDirectory from './helpers/displayCurrentDirectory.js'

displayCurrentDirectory()

const eventEmitter = new EventEmitter()
eventEmitter
  .on('up', handlerUp)
  .on('cd', handlerCd)
  .on('ls', handlerLs)
  .on('cat', handlerCat)
  .on('add', handlerAdd)
  .on('rn', handlerRn)
  .on('cp', handlerCp)
  .on('mv', handlerMv)
  .on('rm', handlerRm)
  .on('hash', handlerHash)
  .on('os', handlerOs)
  .on('compress', handlerCompress)
  .on('decompress', handlerDecompress)

const rl = readline.createInterface({
  input,
  output,
})

rl.prompt()
rl.on('line', handlerLine.bind(rl, eventEmitter))
