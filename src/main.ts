import * as core from '@actions/core'
import * as tmp from 'tmp'
import * as fs from 'fs/promises'

async function Run()
{
  if (!core.getInput('base64')) {
    throw new Error('Base64 input is required.')
  }

  const decoded = Buffer.from(core.getInput('base64'), 'base64')
  const environment = core.getInput('environment')
  const output = !!core.getInput('output-path') ? core.getInput('output-path') : tmp.tmpNameSync()

  await fs.writeFile(output, decoded)

  core.setOutput('decoded', decoded.toString())
  core.setOutput('output-path', output)

  if (!!environment) {
    core.exportVariable(environment, decoded.toString())
  }
}

try {
  Run()
} catch (ex: any) {
  core.setFailed(ex.message)
}
