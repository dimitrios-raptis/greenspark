import { render } from "@testing-library/react";
import OptionProfile from "./../OptionProfile";

test("renders OptionProfile", () => {
  render(<OptionProfile id={2} linked={true} widgetData={[]} handleDataChange={() => {}} />);
});
