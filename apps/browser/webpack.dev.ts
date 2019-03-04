import webpack from "webpack";
import merge from "webpack-merge";
import common from "./webpack.common";

const devConfig: webpack.Configuration = merge(common, {
  devtool: "source-map",
  mode: "development",
});

export default devConfig;
