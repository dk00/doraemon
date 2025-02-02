import * as React from "react";
import { render, screen } from "@testing-library/react";

import App from "../src";

describe("App", () => {
  it("should render correctly", () => {
    render(<App />);
    expect(screen.getByRole("heading").textContent).toBe("Hello World!");
  });
});
