import { publish } from '@vitejs/release-scripts'

publish({
  defaultPackage: 'plugin-docue',
  provenance: true,
  packageManager: 'pnpm',
})
