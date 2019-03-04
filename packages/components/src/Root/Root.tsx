import { jsx } from "@emotion/core";
import { Fragment } from "react";
import ErrorBoundary from "react-error-boundary";
import Helmet from "react-helmet";

import App from "../App";

const Root = () => (
  <ErrorBoundary>
    <Fragment>
      <Helmet htmlAttributes={{ lang: "en" }}>
        <meta charSet="utf-8" />
        <meta name="keywords" content={["my", "keywords", "joined"].join(",")} />
        <meta name="description" content="My description" />
      </Helmet>
      <App />
    </Fragment>
  </ErrorBoundary>
);

export default Root;
