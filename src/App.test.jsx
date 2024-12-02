import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";


describe("App component", () => {
  it("renders home page", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  it("renders shopping page", () => {
    render(<App />);
    const link = screen.getByTestId("shopLink");

    fireEvent.click(link);
    
    expect(screen.findByText(/items/i));

  });
});
