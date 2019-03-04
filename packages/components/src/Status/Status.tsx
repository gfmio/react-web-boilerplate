import { jsx } from "@emotion/core";
import { FC } from "react";
import { Route } from "react-router";

namespace Status {
  export interface Props {
    code: number;
  }
}

const Status: FC<Status.Props> = ({ code, children }) => (
  <Route
    render={({ staticContext }) => {
      if (staticContext) {
        staticContext.statusCode = code;
      }
      return children;
    }}
  />
);

export default Status;
