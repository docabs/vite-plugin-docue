import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: ['src/index'],
  externals: ['vite', 'docuejs/compiler-sfc', '@docue/compiler-sfc'],
  clean: true,
  declaration: 'compatible',
  rollup: {
    emitCJS: true,
    inlineDependencies: true,
  },
})
