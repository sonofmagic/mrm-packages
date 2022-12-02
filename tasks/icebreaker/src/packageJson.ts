import { packageJson } from 'mrm-core'
import type { IContext } from './type'

const task = (ctx: IContext) => {
  const { gitConfig } = ctx
  const pkg = packageJson()

  const publishConfig = pkg.get('publishConfig')
  if (!publishConfig) {
    pkg.set('publishConfig.access', 'public')
    pkg.set('publishConfig.registry', 'https://registry.npmjs.org')
  }

  const repository = pkg.get('repository')
  if (!repository) {
    const url = gitConfig?.['remote "origin"'].url
    if (url) {
      // 'git@github.com:sonofmagic/mrm-packages.git'
      const arr = url.split(':')
      const suffix = arr[arr.length - 1]
      const prefix = arr[0]

      if (prefix === 'git@github.com') {
        pkg.set('repository.type', 'git')
        pkg.set('repository.url', `git+https://github.com/${suffix}`)
      }
    }
  }
  pkg.save()
}

export default task
