import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/test-utils";
import { vi } from "vitest";
import { AddTask } from "../AddTask";

test("Renders two text inputs", () => {
  renderWithProviders(<AddTask />);
  const inputElements = screen.queryAllByPlaceholderText(/add/i);
  expect(inputElements.length).toBe(2);
});

test("Renders inputs with no text", () => {
  renderWithProviders(<AddTask />);
  const inputElements = screen.queryAllByPlaceholderText(/add/i);
  inputElements.map((ele) => {
    expect(ele.textContent).toBe("");
  });
});

test("Renders 'Set Reminder' checkbox as unchecked", () => {
  renderWithProviders(<AddTask />);
  const checkboxElement = screen.getByRole("checkbox");
  expect(checkboxElement).not.toBeChecked();
});

test("Inputs with text and checkbox clear once button is submitted", () => {
  renderWithProviders(<AddTask />);
  const checkboxElement = screen.getByRole("checkbox");
  fireEvent.change(checkboxElement, { target: { checked: true } });

  const inputElements = screen.queryAllByPlaceholderText(/add/i);
  inputElements.forEach((ele, idx) => {
    fireEvent.change(ele, { target: { value: `Test Text${idx}` } });
  });

  const submitElement = screen.getByRole("button");
  fireEvent.click(submitElement);

  inputElements.map((ele) => {
    expect(ele.textContent).toBe("");
  });

  expect(checkboxElement).not.toBeChecked();
});

test("Renders Alert when button clicked and no input text added", () => {
  window.alert = vi.fn();

  renderWithProviders(<AddTask />);
  const submitElement = screen.getByRole("button");
  fireEvent.click(submitElement);

  expect(window.alert).toHaveBeenCalledWith("Please add a task");
});
