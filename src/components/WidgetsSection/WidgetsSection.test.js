import { render } from "@testing-library/react";
import WidgetsSection from "./WidgetsSection";

test("renders WidgetsSection", () => {
  render(<WidgetsSection />);
});

test("displays initial loading state", () => {
  const { getByText } = render(<WidgetsSection />);
  const loadingText = getByText("Loading...");
  expect(loadingText).toBeInTheDocument();
});