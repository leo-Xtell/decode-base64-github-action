import * as core from '@actions/core'
import * as tmp from 'tmp'
import * as fs from 'fs/promises'

async function Run()
{
  const decoded = Buffer.from(core.getInput('base64'), 'base64')
  const output = core.getInput('output-path')
  const environment = core.getInput('environment')

  let path
  
  if (!!output) {
    path = output
  } else {
    path = tmp.tmpNameSync()
  }

  await fs.writeFile(path, decoded)

  core.setOutput('decoded', decoded)
  core.setOutput('output-path', path)

  if (!!environment) {
    process.env[environment] = decoded.toString()
  }
}

try {
  Run()
} catch (ex: any) {
  core.setFailed(ex.message)
}
