import { render, fireEvent } from "@testing-library/react";
import BadgeActivation from "./../BadgeActivation";

test("renders BadgeActivation", () => {
  render(<BadgeActivation id={2} active={false} widgetData={[]} handleDataChange={() => {}} />);
});


test("toggles badge activation state when clicked", () => {
  const testData = {
    id: 1,
    active: true,
  };

  const { getByText } = render(<BadgeActivation id={testData.id} active={testData.active} widgetData={[]} handleDataChange={() => {}} />);
  const activateText = getByText("Activate badge");

  fireEvent.click(activateText);
  expect(activateText).toHaveClass("widget__option-text");
});