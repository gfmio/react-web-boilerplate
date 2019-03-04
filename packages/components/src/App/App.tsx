import { jsx } from "@emotion/core";
import { FC } from "react";
import { Route, Switch } from "react-router";
import RedirectWithStatus from "../RedirectWithStatus";
import RouteWithStatus from "../RouteWithStatus";
import Timer from "../Timer";

const Home: FC = () => (
  <div css={{ color: "green" }}>
    Hello World <Timer />
  </div>
);
const NotFound: FC = () => <div css={{ color: "red" }}>Not found</div>;

const App: FC = () => (
  <Switch>
    <Route path="/" exact={true} strict={true} component={Home} />
    <RedirectWithStatus from="/redirect" to="/" />
    <RouteWithStatus code={404} path="" component={NotFound} />
  </Switch>
);

export default App;
