import { cpus, userInfo } from 'node:os'
import { arch, platform } from 'node:process'
import displayCurrentDirectory from '../helpers/displayCurrentDirectory.js'

export default async function handlerOs(param) {
  try {
    if (!param) throw new Error('parameter is not specified')

    const { username, homedir } = userInfo()
    const EOL = platform === 'win32' ? '\\r\\n' : '\\n'
    const cpusInfo = cpus().map(({ model, speed }) => ({ model, speed }))

    const osInfo = {
      '--EOL': EOL,
      '--cpus': cpusInfo,
      '--homedir': homedir,
      '--username': username,
      '--architecture': arch,
    }

    if (!osInfo[param]) throw new Error(`no such parameter`)

    console.table(osInfo[param])
    displayCurrentDirectory()
  } catch (error) {
    console.error('Operation failed')
  }
}
