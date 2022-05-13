import React from 'react';

import style from './List.css';

export function List (props) {
  const {author, title, year, description, cover} = props;

  return (
    <div className={style.list}>
    </div>
  );
}

export default List;
