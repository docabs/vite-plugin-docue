// import type { DocueJSXPluginOptions } from '@docue/babel-plugin-jsx'
import type { FilterPattern } from 'vite'

export interface FilterOptions {
  include?: FilterPattern
  exclude?: FilterPattern
}

export type Options = //DocueJSXPluginOptions &
  FilterOptions & { babelPlugins?: any[] }
