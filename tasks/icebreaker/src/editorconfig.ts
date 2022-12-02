import { ini } from 'mrm-core'
import type { IContext } from './type'
const task = (ctx: IContext) => {
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

export default task
