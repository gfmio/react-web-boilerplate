import token from "../util/token";

interface Ui {
  display(): Promise<void>;
}
const Ui = token<Ui>("Ui");

export default Ui;
