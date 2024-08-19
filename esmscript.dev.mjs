import * as esbuild from 'esbuild'

let ctx = await esbuild.context({
  entryPoints: ['cmd/api/index.ts'],
  bundle: true,
  sourcemap: true,
  platform: 'node',
  tsconfig: "./tsconfig.json",
  outdir: 'build/dist',
})

await ctx.watch()

