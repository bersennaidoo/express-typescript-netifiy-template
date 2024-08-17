import * as esbuild from 'esbuild'

await esbuild.build({
  entryPoints: ['cmd/api/index.ts'],
  bundle: true,
  minify: true,
  outdir: 'build/dist',
})
