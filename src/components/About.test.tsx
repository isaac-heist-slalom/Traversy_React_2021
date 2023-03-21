import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import About from "./About";

test("Renders version text", () => {
  render(<About />, { wrapper: BrowserRouter });
  const textElement = screen.getByText(/version/i);
  expect(textElement).toBeInTheDocument();
});
