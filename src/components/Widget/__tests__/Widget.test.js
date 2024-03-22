import { render } from "@testing-library/react";
import Widget from "./../Widget";

const testWidgetData = {
  id: 1,
  action: "collects",
  active: true,
  amount: 10,
  linked: true,
  selectedColor: "beige",
  type: "trees"
};

test("renders Widget component", () => {
  render(<Widget data={testWidgetData} widgetData={[testWidgetData]} handleDataChange={() => {}} />);
});
