const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const distPath = path.join(__dirname, 'dist')

const commonConfig = {
  resolve: {
    extensions: ['.Webpack.js', '.web.js', '.ts', '.js', '.jsx', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'ts-loader',
        },
      },
    ],
  },
}

const client = {
  ...commonConfig,
  devtool: 'source-map',
  entry: './client/app.tsx',
  mode: 'development',
  name: 'client',
  output: {
    path: path.join(distPath, 'www'),
    filename: 'app-bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'client/index.html',
      filename: 'index.html',
    }),
  ],
}

const server = {
  ...commonConfig,
  devtool: 'source-map',
  entry: './server/server.ts',
  mode: 'development',
  name: 'server',
  output: {
    path: path.join(distPath, 'server'),
    filename: './server.cjs',
  },
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,
  },
  // budnling everything in one file
  resolveLoader: {
    modules: [
      __dirname + '/node_modules',
    ],
  },
}

module.exports = [client, server]
