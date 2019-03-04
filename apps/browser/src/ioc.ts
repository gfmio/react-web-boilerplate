import "reflect-metadata";

import { Container } from "inversify";
import { helpers } from "inversify-vanillajs-helpers";
const { annotate } = helpers;

import Ui from "./interfaces/Ui";
import ReactUi from "./services/ReactUi";
import token from "./util/token";

const ReactUiConfig = token<ReactUi.Props>("ReactUi.Props");
const ReactUi1 = token<ReactUi>("ReactUi1");
const ReactUi2 = token<ReactUi>("ReactUi2");

const container = new Container();

// Makes inversify aware of ReactUi and injects whatever is bound to
// `ReactUiConfig` into its constructor
annotate(ReactUi, [ReactUiConfig]);

// A named binding for React
container.bind(ReactUi1).to(ReactUi);
container
  .bind(ReactUiConfig)
  .toConstantValue({ mountId: "app" })
  .whenInjectedInto(ReactUi1);

// Another named binding with React to show how different configurations of the
// same service can be bound to different names
container.bind(ReactUi2).to(ReactUi);
container
  .bind(ReactUiConfig)
  .toConstantValue({ mountId: "app2" })
  .whenInjectedInto(ReactUi2);

// Binds a generic token to a more concrete one - the outside world only needs
// to know about Ui and can launch whatever is bound to it
container.bind(Ui).toService(ReactUi1);

export default container;
