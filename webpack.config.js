const path = require('path');
module.exports = {
mode:"production",
devtool:"source-map",
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
    module: {
        rules: [
            {
              test:/\.css$/,
              use:['style-loader', 'css-loader']
            },
            { test: /\.m?js$/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env', '@babel/preset-react' ],
                }
              }
            },
            {
              test: /\.(png|svg|jpe?g|gif)$/,
              include: /images/,
              use: [
                {
                  loader: 'file-loader',
                  options: {
                    name: '[name].[ext]',
                    outputPath: 'images/',
                    publicPath: 'images/'
                  }
                }
              ]
            }

        ]
    }

};