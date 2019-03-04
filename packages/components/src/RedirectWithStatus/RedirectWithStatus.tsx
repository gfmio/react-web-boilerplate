import { jsx } from "@emotion/core";
import { FC } from "react";
import { Redirect, RedirectProps, Route } from "react-router";
import Status from "../Status";

namespace RedirectWithStatus {
  export interface Props extends RedirectProps {
    code?: number;
  }
}

const RedirectWithStatus: FC<RedirectWithStatus.Props> = ({ code, ...props }) => (
  <Status code={code!}>
    <Redirect {...props} />
  </Status>
);

RedirectWithStatus.defaultProps = {
  code: 301,
};

export default RedirectWithStatus;
