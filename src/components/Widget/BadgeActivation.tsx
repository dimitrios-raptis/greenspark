import React from "react";
import Switch from "../Switch";
import { WidgetData } from "../../types/PropTypes";

type Props = {
  id: number;
  active: boolean;
  widgetData: WidgetData[];
  handleDataChange: (value: WidgetData[]) => void;
}

const BadgeActivation = ({ id, active, widgetData, handleDataChange }:Props) => {

  const handleClick = (id: number) => {
    const newData = widgetData.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          active: !active,
        };
      } else {
        // If a badge is active, deactivate all others
        if (!active) {
          return {
            ...item,
            active: false,
          };
        }
      }
      return item;
    });
    handleDataChange(newData);
  };

  return (
    <div className='widget__options-wrapper'>
      <p className='widget__option-text'>Activate badge</p>
      <Switch id={id} active={active} handleClick={handleClick} />
    </div>
  );
};
export default BadgeActivation;
