import * as core from '@actions/core'
import * as tmp from 'tmp'
import * as fs from 'fs/promises'

async function Run()
{
  const decoded = Buffer.from(core.getInput('base64'), 'base64')
  const environment = core.getInput('environment')
  const output = !!core.getInput('output-path') ? core.getInput('output-path') : tmp.tmpNameSync()

  await fs.writeFile(output, decoded)

  core.setOutput('decoded', decoded.toString())
  core.setOutput('output-path', output)

  if (!!environment) {
    process.env[environment] = decoded.toString()
  }
}

try {
  Run()
} catch (ex: any) {
  core.setFailed(ex.message)
}
