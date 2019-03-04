import webpack from "webpack";
import merge from "webpack-merge";
import common from "./webpack.common";

const productionConfig: webpack.Configuration = merge(common, {
  mode: "production",
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
    "react-router": "ReactRouter",
    "react-router-dom": "ReactRouterDOM",
    "reflect-metadata": "Reflect",
    tslib: "window",
    "@emotion/core": "emotionCore",
    "@emotion/styled": "emotionStyled",
  },
});

export default productionConfig;
