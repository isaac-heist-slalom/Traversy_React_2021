import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/test-utils";
import { Button } from "../Button";

test("Renders button", () => {
  renderWithProviders(<Button color="purple" text="test" />);
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toBeInTheDocument();
});

test("Renders expected text on button", () => {
  renderWithProviders(<Button color="purple" text="test" />);
  const buttonElement = screen.getByRole("button");
  expect(buttonElement.textContent).toBe("test");
});

test("Renders color when passed on prop button", () => {
  renderWithProviders(<Button color="purple" text="test" />);
  const buttonElement = screen.getByRole("button");
  expect(buttonElement.style.backgroundColor).toBe("purple");
});

test("Renders default color when no color prop passed in", () => {
  renderWithProviders(<Button text="test" />);
  const buttonElement = screen.getByRole("button");
  expect(buttonElement.style.backgroundColor).toBe("steelblue");
});
