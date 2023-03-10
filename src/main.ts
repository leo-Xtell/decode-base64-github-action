import * as core from '@actions/core'
import * as tmp from 'tmp'
import * as fs from 'fs/promises'

async function Run()
{
  const decoded = Buffer.from(core.getInput('base64'), 'base64')

  let path
  
  if (!!core.getInput('output-path')) {
    path = core.getInput('output-path')
  } else {
    path = tmp.tmpNameSync()
  }

  await fs.writeFile(path, decoded)

  core.setOutput('decoded', decoded)
  core.setOutput('output-path', path)

  if (!!core.getInput('enviroment')) {
    process.env[core.getInput('enviroment')] = decoded.toString()
  }
}

try {
  Run()
} catch (ex: any) {
  core.setFailed(ex.message)
}
