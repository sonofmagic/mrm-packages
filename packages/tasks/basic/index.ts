import { json, packageJson, lines, install } from 'mrm-core'

interface IOptions {}

const task = () => {
  const pkg = packageJson()

  const publishConfig = pkg.get('publishConfig')
  if (!publishConfig) {
    pkg.set('publishConfig.access', 'public')
    pkg.set('publishConfig.registry', 'https://registry.npmjs.org')
    pkg.save()
  }
}

task.description = 'icebreaker config'
task.parameters = {}
export = task
