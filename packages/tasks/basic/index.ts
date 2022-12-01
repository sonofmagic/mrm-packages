import { json, packageJson, lines, install } from 'mrm-core'

interface IOptions {
  eslintPreset: string
}

const task = ({ eslintPreset }: IOptions) => {
  // Define packages to install.
  const packages = ['eslint']

  // Append custom eslint-config in case it's defined
  if (eslintPreset !== 'eslint:recommended') {
    packages.push(`eslint-config-${eslintPreset}`)
  }

  // Create or load .eslintignore, and set basic ignores
  lines('.eslintignore').add(['node_modules/']).save()

  // Create or load package.json
  const pkg = packageJson()

  pkg
    // Set linting script
    .setScript('lint', 'eslint . --cache --fix')
    // Set pretest script
    .prependScript('pretest', 'npm run lint')
    // Save changes to package.json
    .save()

  // Create or load .eslintrc
  const eslintrc = json('.eslintrc')

  // Use Babel parser if the project depends on Babel
  if (pkg.get('devDependencies.babel-core')) {
    const parser = 'babel-eslint'
    packages.push(parser)
    eslintrc.merge({ parser })
  }

  // Configure ESlint preset, if set (defaults to eslint:recommended)
  if (eslintPreset) {
    eslintrc.set('extends', eslintPreset)
  }

  // Save changes to .eslintrc
  eslintrc.save()

  // Install new npm dependencies
  install(packages)
}

task.description = 'Adds .gitignore'
task.parameters = {
  // Follows Inquirer.js questions format.
  eslintPreset: {
    // input, number, confirm, list, rawlist, expand, checkbox, password, editor
    type: 'input',
    message: 'ESLint preset to use as basis',
    default: 'eslint:recommended'
  }
}
export = task
