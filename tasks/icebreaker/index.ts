import { json, packageJson, lines, install, ini } from 'mrm-core'

interface IOptions {}

const task = () => {
  const pkg = packageJson()

  const publishConfig = pkg.get('publishConfig')
  if (!publishConfig) {
    pkg.set('publishConfig.access', 'public')
    pkg.set('publishConfig.registry', 'https://registry.npmjs.org')
    pkg.save()
  }
  const editorconfig = ini('.editorconfig', 'https://editorconfig.org')
  if (!editorconfig.exists()) {
    const generalRules = {
      indent_style: 'space',
      indent_size: '2',
      end_of_line: 'lf',
      charset: 'utf-8',
      trim_trailing_whitespace: false,
      insert_final_newline: false
    }
    editorconfig.set('_global', { root: true }).set('*', generalRules)
    editorconfig.save()
  }
}

task.description = 'icebreaker config'
task.parameters = {}
export = task
