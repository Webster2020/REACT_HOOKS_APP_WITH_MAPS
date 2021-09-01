import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

test("Render App component!", () => {
  render(<App />);
});

