import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "../Footer";

test("Renders version text", () => {
  render(<Footer />, { wrapper: BrowserRouter });
  const footerElement = screen.getByRole("contentinfo");
  expect(footerElement).toBeInTheDocument();
});
