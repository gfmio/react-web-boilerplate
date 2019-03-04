import { jsx } from "@emotion/core";
import { postConstruct } from "inversify";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import Root from "../../../../packages/components/src/Root";

import Ui from "../interfaces/Ui";

namespace ReactUi {
  export interface RequiredProps {
    mountId: string;
  }
  export interface OptionalProps {}
  export interface Props extends RequiredProps, OptionalProps {}
}

class ReactUi implements Ui {
  constructor(protected readonly props: ReactUi.Props) {}

  @(postConstruct() as any)
  public postConstruct() {
    console.log("hello world");
  }

  public async display() {
    ReactDOM.hydrate(
      <BrowserRouter>
        <Root />
      </BrowserRouter>,
      document.getElementById(this.props.mountId),
    );
  }
}

export default ReactUi;
