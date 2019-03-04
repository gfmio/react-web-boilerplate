import path from "path";
import webpack from "webpack";

const common: webpack.Configuration = {
  entry: "./src/entrypoint.tsx",

  output: {
    filename: "app.js",
    chunkFilename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },

  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [],
};

export default common;
