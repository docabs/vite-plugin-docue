import { defineConfig } from 'vite'
import createConfig from './vite.config.js'

export default defineConfig((env) => {
  const config = createConfig(env)
  return Object.assign(config, {
    ssr: {
      noExternal: /./,
    },
    resolve: {
      // necessary because docue.ssrUtils is only exported on cjs modules
      alias: [
        {
          find: '@docue/runtime-dom',
          replacement: '@docue/runtime-dom/dist/runtime-dom.cjs.js',
        },
        {
          find: '@docue/runtime-core',
          replacement: '@docue/runtime-core/dist/runtime-core.cjs.js',
        },
      ],
    },
    optimizeDeps: {
      exclude: ['@vitejs/test-example-external-component'],
    },
  })
})
