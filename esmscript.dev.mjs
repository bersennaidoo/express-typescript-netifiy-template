import * as esbuild from 'esbuild'

let ctx = await esbuild.context({
  entryPoints: ['cmd/api/index.ts'],
  bundle: false,
  sourcemap: true,
  platform: 'node',
  outdir: 'build/dist',
})

await ctx.watch()

