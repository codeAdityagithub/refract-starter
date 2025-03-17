import { render } from "refract-js";

import App from "./App.tsx";

// @ts-expect-error
render(<App />, document.getElementById("root")!);
