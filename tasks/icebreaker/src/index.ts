import packageJsonTask from './packageJson'
import editorconfigTask from './editorconfig'
import { createContext } from './context'
import type { IParams } from './type'

const task = async (params: IParams) => {
  // 创建一个上下文，传递给每一个方法，作为作用域的延伸
  const ctx = await createContext(params)
  // 这里根据需求选择，串行或者并发
  await packageJsonTask(ctx)
  await editorconfigTask(ctx)
}

task.description = 'icebreaker config'
task.parameters = {}
export default task
