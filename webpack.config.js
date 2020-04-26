const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ],
    resolve: {
        modules: [__dirname, 'src', 'node_modules'],
        extensions: ['*', '.js', '.jsx'],
        alias: {
          views: path.resolve(__dirname, 'src/views/'),
          components: path.resolve(__dirname, 'src/components/'),
          reducer: path.resolve(__dirname, 'src/reducer/')
        }
      },
    module: {
        rules: [
            {
              test: /\.jsx?$/,
              exclude: /node_modules/,
              loader: require.resolve('babel-loader')
            },
            {
              test:/\.s?css$/,
              use:['style-loader','css-loader', 'sass-loader']
            },
            {
              test: /\.(png|svg|jpg|gif)$/,
              use: ['file-loader']
          }
        ]
    }
}
