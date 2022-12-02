import parse from 'parse-git-config'
import { getGitUserInfo } from 'git-user-info'
import type { IParams } from './type'

export async function createContext(params: IParams) {
  const gitConfig = await parse()
  const gitInfo = await getGitUserInfo()
  return {
    params,
    gitConfig,
    gitInfo
  }
}
