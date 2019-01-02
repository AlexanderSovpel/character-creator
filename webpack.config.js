module.exports = {
  entry: './src/index.js',

  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },

  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react']
      }
    }]
  },

  resolve: {
    extensions: ['*', '.js', '.jsx']
  },

  devServer: {
    contentBase: './dist',
    hot: true
  }
};