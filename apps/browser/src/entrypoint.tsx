/** Browser app */

import Ui from "./interfaces/Ui";
import container from "./ioc";

container.get(Ui).display();
