const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // Entry file
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // Clean dist before each build
    publicPath: "./", // Ensures assets load correctly on GitHub Pages
  },
  mode: "development",
  devServer: {
    static: "./dist", // Serve files from dist/
    port: 8080, // Runs on localhost:8080
    open: true, // Automatically open browser
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Match .css files
        use: ["style-loader", "css-loader"], // Loaders to handle CSS
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // Match image files
        type: "asset/resource", // Copy images to dist/
        generator: {
          filename: "images/[name][ext]", // Keep original filename inside dist/images/
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html", // Use the template file
      filename: "index.html", // Output HTML file in dist/
      favicon: "./src/images/favicon.jpg",
    }),
  ],
};
