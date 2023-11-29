const { nodeExternalsPlugin } = require('esbuild-node-externals')

require('esbuild')
  .build({
    entryPoints: ['app.ts'],
    bundle: true,
    outfile: 'dist/index.js',
    platform: 'node',
    plugins: [
      nodeExternalsPlugin({
        dependencies: false,
      }),
    ],
    external: [
      'cors',
      'kcors',
      '@koa/cors',
      '@babel/plugin-proposal-export-namespace-from',
      '@babel/plugin-transform-modules-commonjs',
      '@babel/preset-typescript/package.json',
    ],
  })
  .catch(err => {
    console.log(err)
    process.exit(1)
  })
