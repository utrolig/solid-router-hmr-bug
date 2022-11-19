/* @refresh reload */
import { Router } from "@solidjs/router";
import { render } from "solid-js/web";

import { Root } from "./Root";

render(
  () => (
    <Router>
      <Root />
    </Router>
  ),
  document.getElementById("root") as HTMLElement
);
