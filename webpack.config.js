module.exports = {
  mode: "production",
  entry: "./src/js/index.js",
  output: {
    filename: "js/main.js"
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: [{
        loader: "babel-loader",
        options: {
          presets: [
            "@babel/preset-env",
          ],
        },
      }, ],
    }, ],
  },
  target: ["web", "es5"],
}