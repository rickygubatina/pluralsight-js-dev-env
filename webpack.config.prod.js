import path from "path";
import webpack from "webpack";
// import UglifyJsPlugin from "uglifyjs-webpack-plugin";

export default {
  // debug: true,
  // noInfo: false,
  // mode: "production",
  devtool: "source-map",
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
    // Eliminate duplicate packages when generating bundle
    //new webpack.optimize.DedupePlugin(),
    // Minify JS
    webpack.optimize.minimize()
  ],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ["babel-loader"] },
      { test: /\.css$/, loaders: ["style-loader","css-loader"] }
    ]
  }
}
