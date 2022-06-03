import * as React from "react";
import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById(`root`));

const render = () => {
  root.render(<h1>Hello, World!</h1>);
};

export default render;
