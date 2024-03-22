import { render } from "@testing-library/react";
import OptionColor from "./../OptionColor";

test("renders OptionColor", () => {
  render(<OptionColor id={3} selectedColor="whie" widgetData={[]} handleDataChange={() => {}} />);
});
