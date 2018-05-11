import path from "path";
// import webpack from "webpack";
// import UglifyJsPlugin from "uglifyjs-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  // debug: true,
  // noInfo: false,
  // mode: "production",
  devtool: "source-map",
  optimization: {
    minimize: true
  },
  entry: [
    path.resolve(__dirname, "src/index")
  ],
  target: "web",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "bundle.js"
  },
  plugins: [
    // Create HTML file that includes references to bundled JS.
    new HtmlWebpackPlugin({
      template: "src/index.html",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDocType: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true
    })
    // Eliminate duplicate packages when generating bundle
    // new webpack.optimize.DedupePlugin()
    // Minify JS
    //new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ["babel-loader"] },
      { test: /\.css$/, loaders: ["style-loader","css-loader"] }
    ]
  }
}
