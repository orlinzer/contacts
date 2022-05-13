import React, { useState } from 'react';

// import { IoPersonCircle } from 'react-icons/io';
import { IoIosAddCircle, Person } from 'react-icons/io';
import { MdPerson, MdPersonPinCircle, MdPeople, MdOutlinePeople } from 'react-icons/md';
import { BsPersonCircle } from 'react-icons/bs';

// import style from './Avatar';

/**
 * @typedef AvatarProperties
 * @type {object}
 * @property {string} name - avatar name.
 * @property {string} src - avatar image source.
 * @property {string} color - avatar color.
 * @property {number} borderWidth - avatar border's width.
 * @property {string} borderColor - avatar border's color.
 * @property {ReactNode} children - avatar name.
 */

/**
 *
 * @param {AvatarProperties} props
 * @returns Avatar
 */
export const Avatar = ({name, src, color, borderWidth, borderColor, children}) => {

  const initials = name ? name.split(' ').map(word => word[0]).join('').toUpperCase() : undefined;
  // const initials = name ? name.split(' ').map(word => word[0]).join('').toLocaleLowerCase() : undefined;
  // const initials = name ? name.split(' ').length : undefined;
  // const initials = name;

  const style = {
    // width: '4em',
    // height: '4em',
    borderRadius: '50%',
    fontSize: '2em',
    backgroundColor: color,
    cursor: 'pointer',
  };

  return (
    <React.Fragment>
      {
        src ? (
          <img
            // className={style.avatar}
            style={style}
            src={src}
            alt={name}
            title={name}
          />
        ) : (
          initials ? (
            <p
              // className={style.avatar}
              style={{
                ...style,
                margin: 0,
                padding: '10px',
                width: '2em',
                height: '2em',
                fontSize: '2em',
                fontWeight: 'bold',
                textAlign: 'center',
                borderWidth: borderWidth,
                borderColor: borderColor,
              }}
              title={name}
            >
              {initials}
            </p>
          ) : (
            <span
              title={name}
            >
              <BsPersonCircle
                // className={style.avatar}
                style={style}
              />
            </span>
          )
        )
      }
    </React.Fragment>
  );
}

export default Avatar;
