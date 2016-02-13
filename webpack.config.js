var webpack = require('webpack');
var path = require('path');

var outFolder = path.resolve(__dirname, './dist');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // 'only' prevents reload on syntax errors
    './src/index.jsx' // Your app's entry point
  ],
  output: {
    path: outFolder,
    filename: 'bundle.js'//,
    // publicPath: 'http://0.0.0.0:3000/app/'
  },
  module: {
    loaders: [{
      test: /.(js|jsx)?$/,
      loaders: ['react-hot', 'babel?presets[]=es2015&presets[]=react'],
      exclude: /node_modules/
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  watch: true
};
