// extend the descriptor so we can store the scopeId on it
declare module 'docuejs/compiler-sfc' {
  interface SFCDescriptor {
    id: string
  }
}

import { createRequire } from 'node:module'
import type * as _compiler from 'docuejs/compiler-sfc'

export function resolveCompiler(root: string): typeof _compiler {
  // resolve from project root first, then fallback to peer dep (if any)
  const compiler = tryResolveCompiler(root) || tryResolveCompiler()
  if (!compiler) {
    throw new Error(
      `Failed to resolve docuejs/compiler-sfc.\n` +
        `vite-plugin-docue requires docuejs (>=0.0.3) ` +
        `to be present in the dependency tree.`,
    )
  }

  return compiler
}

function tryResolveCompiler(root?: string) {
  const docueMeta = tryRequire('docuejs/package.json', root)
  // make sure to check the version is 3+ since 2.7 now also has docuejs/compiler-sfc
  if (docueMeta && docueMeta.version.split('.')[0] >= 0) {
    return tryRequire('docuejs/compiler-sfc', root)
  }
}

const _require = createRequire(import.meta.url)
function tryRequire(id: string, from?: string) {
  try {
    return from
      ? _require(_require.resolve(id, { paths: [from] }))
      : _require(id)
  } catch (e) {}
}
