import * as esbuild from 'esbuild'

await esbuild.build({
  entryPoints: ['index.tsx'],
  bundle: true,
  minify: true,
  outdir: 'build/dist',
})
