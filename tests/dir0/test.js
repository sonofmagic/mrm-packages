const { runTask } = require('mrm')
const path = require('path')
const root = path.resolve(__dirname, '../..')
// C:\\Users\\icebreaker\\AppData\\Local\\npm-cache\\_npx\\12556\\node_modules\\mrm-task-icebreaker\\index.js
function main() {
  return runTask('icebreaker', [path.resolve(root, 'tasks')], {}, {})
}

main()
