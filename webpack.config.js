module.exports = {
  mode: 'production',
  entry: "./src/js/index.js",
  output: {
    filename: "main.js"
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
          plugins: ["@babel/plugin-proposal-class-properties"],
        },
      }, ],
    }, ],
  },
  target: ["web", "es5"],
}