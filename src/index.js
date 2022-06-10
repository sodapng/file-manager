import EventEmitter from 'node:events'
import { homedir } from 'node:os'
import {
  argv,
  chdir,
  exit,
  stdin as input,
  stdout as output,
} from 'node:process'
import * as readline from 'node:readline'
import handleAdd from './handlers/handleAdd.js'
import handleCat from './handlers/handleCat.js'
import handleCd from './handlers/handleCd.js'
import handleCompress from './handlers/handleCompress.js'
import handleCp from './handlers/handleCp.js'
import handleDecompress from './handlers/handleDecompress.js'
import handleHash from './handlers/handleHash.js'
import handleLine from './handlers/handleLine.js'
import handleLs from './handlers/handleLs.js'
import handleMv from './handlers/handleMv.js'
import handleOs from './handlers/handleOs.js'
import handleRm from './handlers/handleRm.js'
import handleRn from './handlers/handleRn.js'
import handleUp from './handlers/handleUp.js'
import displayCurrentDirectory from './helpers/displayCurrentDirectory.js'

chdir(homedir())

const args = Object.fromEntries(
  argv.slice(2).map((arg) => {
    const [key, value] = arg.split('=')
    return [key, value]
  })
)

console.log(`Welcome to the File Manager, ${args['--username']}!`)
displayCurrentDirectory()

const eventEmitter = new EventEmitter()
eventEmitter.setMaxListeners(0)

eventEmitter
  .on('up', handleUp)
  .on('cd', handleCd)
  .on('ls', handleLs)
  .on('cat', handleCat)
  .on('add', handleAdd)
  .on('rn', handleRn)
  .on('cp', handleCp)
  .on('mv', handleMv)
  .on('rm', handleRm)
  .on('hash', handleHash)
  .on('os', handleOs)
  .on('compress', handleCompress)
  .on('decompress', handleDecompress)

const rl = readline.createInterface({
  input,
  output,
})

rl.on('line', handleLine.bind(rl, eventEmitter))
  .on('SIGINT', () => rl.close())
  .on('close', () => {
    console.log(`Thank you for using File Manager, ${args['--username']}!`)
    setTimeout(() => exit(0), 100)
  })
