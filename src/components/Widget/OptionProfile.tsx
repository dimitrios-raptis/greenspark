import React from "react";
import Tooltip from "../Tooltip";
import Checkbox from "../Icons/Checkbox";
import CheckboxBlank from "../Icons/CheckboxBlank";
import { WidgetData } from "../../types/PropTypes";

type Props = {
  id: number;
  linked: boolean;
  widgetData: WidgetData[];
  handleDataChange: (value: WidgetData[]) => void;
}

const OptionProfile = ({ id, linked, widgetData, handleDataChange }:Props) => {
  const handleClick = (id: number) => {
    const newData = widgetData?.map((item) => {
      if (item.id === id) {
        const updatedItem = {
          ...item,
          linked: !linked,
        };
        return updatedItem;
      }
      return item;
    });
    handleDataChange(newData);
  };

  return (
    <div className='widget__options-wrapper'>
      <div className='widget__option-text-wrapper'>
        <p className='widget__option-text'>Link to Public Profile</p>
        <Tooltip />
      </div>
      <div className='widget__checkbox'>
        {linked ? (
          <div onClick={() => handleClick(id)}  data-testid="option-profile-checkbox">
            <Checkbox size="1.8rem" className="widget__checkbox-icon"  />
          </div>
        ) : (
          <div onClick={() => handleClick(id)}>
            <CheckboxBlank size="1.8rem" className="widget__checkbox-icon" />
          </div>
        )}
      </div>
    </div>
  );
};

export default OptionProfile;
