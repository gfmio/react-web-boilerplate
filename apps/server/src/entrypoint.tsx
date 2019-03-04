/** Server entrypoint */

import { jsx } from "@emotion/core";
import compression from "compression";
import express from "express";
import http from "http";
import ReactDOMServer from "react-dom/server";
import Helmet from "react-helmet";
import { StaticRouter, StaticRouterContext } from "react-router";
import Root from "../../../packages/components/src/Root";
import Html from "./Html";

import path from "path";

const app = express();

app.use(compression());

app.use("/static", express.static(path.resolve(__dirname, "..", "..", "browser", "dist"), { fallthrough: true }));

app.use((req, res) => {
  const staticRouterContext: StaticRouterContext = {};

  const html = ReactDOMServer.renderToStaticMarkup(
    <StaticRouter context={staticRouterContext} location={req.url}>
      <Root />
    </StaticRouter>,
  );

  // Redirect
  if (staticRouterContext.url) {
    res.writeHead(staticRouterContext.statusCode || 301, {
      Location: staticRouterContext.url,
    });
    res.end();
    return;
  }

  const helmet = Helmet.renderStatic();
  const markup = ReactDOMServer.renderToStaticMarkup(<Html helmet={helmet} html={html} />);

  res
    .status(staticRouterContext.statusCode || 200)
    .send("<!doctype html>" + markup)
    .end();
});

const server = http.createServer(app);
server.listen(3000, "0.0.0.0", () => {
  console.log("Listening on port 3000");
});
