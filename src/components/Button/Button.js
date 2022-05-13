import React from 'react';

import style from './Button.module.css';

export const Button = (props) => {
  const {
    onClick,
    text,
    icon,
    children,
    size,
    backgroundColor,
    color,
    margin,
    padding,
  } = props;

  const displayText = text ? text : (typeof (children) === 'string' ? children : '');

  return (
    <button
      className={style.button}
      onClick={onClick}
      title={displayText}
      style={{
        fontSize: size,
        backgroundColor: backgroundColor,
        color: color,
        margin: margin,
        padding: padding,
      }}
    >
      {icon}
      {displayText}
    </button>
  );
};

export default Button;
