import { render, fireEvent } from "@testing-library/react";
import Switch from "./Switch";

const handleClick = jest.fn();
const testData = {
  id: 1,
  active: true,
  handleClick,
};

test("renders Switch", () => {
  render(<Switch id={testData.id} active={testData.active} handleClick={() => {}} />);
});

test("calls handleClick function when clicked", () => {
  const { container } = render(<Switch id={testData.id} active={testData.active} handleClick={testData.handleClick} />);
  const switchElement = container.querySelector(".slider");

  fireEvent.click(switchElement);
  expect(handleClick).toHaveBeenCalled();
});