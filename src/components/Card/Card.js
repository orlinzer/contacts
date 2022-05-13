import React from 'react';

import style from './Card.module.css';

export function Card (props) {
  const {color, onClick, children} = props;

  return (
    <div
      className={style.card}
      style={{
        ...props.style,
        backgroundColor: color,
      }}

      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default Card;
