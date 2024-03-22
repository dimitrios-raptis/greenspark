import React from "react";
import { WidgetData, WidgetColor } from "../../types/PropTypes";

type Props = {
  id: number;
  selectedColor: "blue" | "green" | "beige" | "white" | "black";
  widgetData: WidgetData[];
  handleDataChange: (value: WidgetData[]) => void;
}
const colorList: WidgetColor[] = [WidgetColor.Blue, WidgetColor.Green, WidgetColor.Beige, WidgetColor.White, WidgetColor.Black];

const OptionColor = ({ id, selectedColor, widgetData, handleDataChange }:Props) => {
  const handleClick = (id: number, color: WidgetColor) => {
    const newData = widgetData?.map((item) => {
      if (item.id === id) {
        const updatedItem = {
          ...item,
          selectedColor: color,
        };

        return updatedItem;
      }
      return item;
    });
    handleDataChange(newData || []);
  };

  return (
    <div className='widget__options-wrapper'>
      <div className='widget__option-text-wrapper'>
        <p className='widget__option-text'>Badge colour</p>
      </div>
      <div className='widget__option-colors'>
        {colorList.map((color) => {
          const initialSelection = selectedColor === color ? "widget__color--selected" : "";
          return (
            <div
              key={color}
              className={`widget__color widget__color--${color} ${initialSelection}`}
              onClick={() => handleClick(id, color)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default OptionColor;
