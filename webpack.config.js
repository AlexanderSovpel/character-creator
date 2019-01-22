module.exports = {
  entry: './src/index.js',
  mode: 'development',

  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react',
          ],
        },
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader',
      }
    ],
  },

  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },

  devServer: {
    contentBase: './dist',
    compress: true,
    port: 9000,
    watchContentBase: true,
    progress: true,
  },
};