import { describe, it, expect } from "vitest";
import { render, renderHook} from "@testing-library/react";
import { useFetchProducts } from "./components/Shop";
import App from "./App";
import { BrowserRouter } from "react-router-dom";


describe("App component", () => {
  it("renders home page", () => {
    const { container } = render(<BrowserRouter><App /></BrowserRouter>);
    expect(container).toMatchSnapshot();
  });
});

describe("Shop component", () => {
  it("fetch products", () => {
    const { result } = renderHook(() => useFetchProducts());

    expect(result.current.products).not.toBeUndefined();
  });
})
