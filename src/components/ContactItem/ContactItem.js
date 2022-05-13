import React from 'react';

import style from './ContactItem';

export function ContactItem (props) {
  const {author, title, year, description, cover} = props;

  return (
    <div className={style.ContactItem}>
      <img />
    </div>
  );
}

export default ContactItem;
