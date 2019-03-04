import { jsx } from "@emotion/core";
import { FC } from "react";
import { Route, RouteProps } from "react-router";
import Status from "../Status";

namespace RouteWithStatus {
  export interface Props extends RouteProps {
    code: number;
  }
}

const RouteWithStatus: FC<RouteWithStatus.Props> = ({ code, ...props }) => (
  <Status code={code}>
    <Route {...props} />
  </Status>
);

export default RouteWithStatus;
