import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({
  children,
  isReset,
  isActive,
  isResetPressed,
  ...otherProps
}) => (
  <button
    className={`${
      isResetPressed ? "reset-pressed" : isReset ? "reset-button" : ""
    } ${isActive ? "stop" : ""} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
