import type { createContext } from './context'

export interface IParams {}

export type IContext = Awaited<ReturnType<typeof createContext>>
