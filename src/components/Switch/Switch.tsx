import React from "react";

type Props = {
  id: number;
  active: boolean;
  handleClick: (id: number) => void;
}

const Switch = ({ id, active, handleClick }:Props) => {
  return (
    <div
      className="slider"
      onClick={() => handleClick(id)}
    >
      <div
        className={`slider__input ${active ? "slider__input--checked" : ""}`}
      />
      <div className="slider__label">
        <span className="slider__inner" />
      </div>
    </div>
  );
};

export default Switch;
