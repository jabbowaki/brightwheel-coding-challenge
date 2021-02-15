import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/top 100 starred github repos/i);
  expect(linkElement).toBeInTheDocument();
});
