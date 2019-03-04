import { jsx } from "@emotion/core";
import { FC } from "react";
import { HelmetData } from "react-helmet";

namespace Html {
  export interface Props {
    helmet: HelmetData;
    html: string;
  }
}

const Html: FC<Html.Props> = ({ helmet, html }) => (
  <html {...helmet.htmlAttributes.toComponent()}>
    <head>
      {helmet.base.toComponent()}
      {helmet.title.toComponent()}
      {helmet.meta.toComponent()}
      {helmet.link.toComponent()}
      {helmet.style.toComponent()}
    </head>
    <body {...helmet.bodyAttributes.toComponent()}>
      {helmet.noscript.toComponent()}
      {/* React mount point */}
      <main id="app" dangerouslySetInnerHTML={{ __html: html }} />
      {/* All externally imported libraries */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.8.3/umd/react.production.min.js" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.8.3/umd/react-dom.production.min.js" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/react-router/4.3.1/react-router.min.js" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/react-router-dom/4.3.1/react-router-dom.min.js" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/reflect-metadata/0.1.13/Reflect.min.js" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/tslib/1.9.3/tslib.min.js" />
      <script src="https://unpkg.com/@emotion/core@10.0.7/dist/core.umd.min.js" />
      <script src="https://unpkg.com/@emotion/styled@10.0.7/dist/styled.umd.min.js" />
      {/* Application bundles */}
      <script src="/static/app.js" />
      <script src="/static/vendors~main.bundle.js" />
    </body>
  </html>
);

export default Html;
