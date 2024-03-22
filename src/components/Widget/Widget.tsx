import React from "react";
import OptionProfile from "./OptionProfile";
import OptionColor from "./OptionColor";
import Logo from "../Icons/Logo";
import BadgeActivation from "./BadgeActivation";
import { WidgetData } from "../../types/PropTypes";

type Props = {
  data: WidgetData;
  widgetData: WidgetData[];
  handleDataChange: (value: WidgetData[]) => void;
}

const Widget = ({ data, widgetData, handleDataChange }:Props) => {
  const { action, active, amount, id, linked, selectedColor, type } = data;

  return (
    <div className={`widget widget--${selectedColor}`}>
      <div className="widget__header">
        <Logo className="widget__logo" />
        <div className="widget__header-info">
          <p className="widget__super-heading">
            This product {action}
          </p>
          <p className="widget__heading">{amount} {type}</p>
        </div>
      </div>
      <div className="widget__content">
        <OptionProfile
          id={id}
          linked={linked}
          widgetData={widgetData}
          handleDataChange={handleDataChange}
        />
        <OptionColor
          id={id}
          selectedColor={selectedColor}
          widgetData={widgetData}
          handleDataChange={handleDataChange}
        />
        <BadgeActivation
          id={id}
          active={active}
          widgetData={widgetData}
          handleDataChange={handleDataChange}
        />
      </div>
    </div>
  );
};

export default Widget;
