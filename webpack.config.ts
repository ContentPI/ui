const path = require('path')

const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'lib',
    umdNamedDefine: true,
    globalObject: 'this'
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        oneOf: [
          {
            include: [
              path.resolve(__dirname, './src/Accordion/icons'),
              path.resolve(__dirname, './src/Menu/icons'),
              path.resolve(__dirname, './src/Modal/icons'),
              path.resolve(__dirname, './src/Spinner/loaders'),
              path.resolve(__dirname, './src/components/Atoms/Spinner/loaders'),
              path.resolve(__dirname, './src/Steps')
            ],
            use: 'svg-url-loader'
          },
          {
            include: path.resolve(__dirname, './src/Icon/icons'),
            use: '@svgr/webpack'
          }
        ]
      },
      {
        test: /\.(tsx|ts)$/,
        exclude: /node_modules/,
        use: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: ['*', '.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@atoms': path.resolve(__dirname, 'src/components/Atoms/index.ts'),
      '@molecules': path.resolve(__dirname, 'src/components/Molecules/index.ts'),
      '@organisms': path.resolve(__dirname, 'src/components/Organisms/index.ts'),
      '@theme': path.resolve(__dirname, 'src/theme/index.ts'),
      react: path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom')
    }
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React'
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'ReactDOM',
      root: 'ReactDOM'
    },
    'prop-types': {
      root: 'PropTypes',
      commonjs2: 'prop-types',
      commonjs: 'prop-types',
      amd: 'prop-types'
    },
    slug: 'slug',
    moment: 'moment',
    '@contentpi/utils': '@contentpi/utils',
    emotion: 'emotion',
    '@emotion/react': '@emotion/react',
    '@emotion/styled': '@emotion/styled',
    'isomorphic-fetch': 'isomorphic-fetch'
  },
  devtool: devMode ? 'source-map' : '',
  mode: devMode ? 'development' : 'production'
}
