import React from "react";

type Props = {
  size?: string;
  color?: string;
  className?: string;
}

const CheckboxBlank = ({
  size,
  color = "black",
  className,
}:Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={color}
      width={size}
      height={size}
      className={className}
    >
      <path
        d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM5 5V19H19V5H5Z">
      </path>
    </svg>
  );
};

export default CheckboxBlank;
