const path = require('path');

module.exports = {
  entry: './src/index.js', // Change this to your main entry file
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // other rules for different file types
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'), // Adjust to your static file directory
    },
    compress: true,
    port: 3000,
    historyApiFallback: true, // Keeps navigation correct for single-page apps
    open: true, // Automatically opens the browser
  },
};
