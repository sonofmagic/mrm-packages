import type { IContext } from './type'
import { json } from 'mrm-core'
const task = (ctx: IContext) => {
  const prettierrc = json('.prettierrc')
  if (!prettierrc.exists()) {
    prettierrc.merge({
      tabWidth: 2,
      useTabs: false,
      semi: false,
      singleQuote: true,
      endOfLine: 'lf',
      trailingComma: 'none',
      printWidth: 80
    })
    prettierrc.save()
  }
}

export default task
