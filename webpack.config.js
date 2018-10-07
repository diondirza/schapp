const path = require('path')

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: "./src/index.js",
  devtool: 'cheap-module-source-map',
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "app.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}
