import { Link as RouterLink } from "react-router-dom";
import uuid from "react-uuid";
import { ImBin } from 'react-icons/im';

import Avatar from "../Avatar/Avatar";

import styles from './ContactListContact.module.css';

import '../../modules/User'

/**
 * @typedef ContactListContactProperties
 * @type {object}
 * @property {User} user - user
 */
//  * @property {string} name - user's name.
//  * @property {string?} src - user's image.
//  * @property {string?} phone - user's phone.
//  * @property {string?} email - user's email.
//  * @property {string[]?} tags - user's tags.

/**
 *
 * @param {ContactListContactProperties} param0
 * @returns ContactListContact
 */
export const ContactListContact = ({user}) => {

  return (
    <RouterLink
      style={{
        color: 'black',
        textDecoration: 'none',
      }}
      to={`contacts/${user.name}`}
    >
      <div className={styles.ContactListContact}>
        <Avatar src={user.src} name={user.name}/>
        <span
          style={{
            paddingLeft: '1em',
            width: '40%',
          }}
        >
          {user.name}
        </span>
        <span
          style={{
            paddingLeft: '1em',
            width: '15%',
          }}
        >
          {user.phone}
        </span>
        <span
          style={{
            paddingLeft: '1em',
            width: '15%',
          }}
        >
          {user.email}
        </span>
        <span
          style={{
            paddingLeft: '1em',
            width: '15%',
          }}
        >
          {user.tags?.map((tag) => (
            <p
              key={uuid()}
              style={{
                backgroundColor: 'rgba(0,0,0,0.25)',
              }}
            >
              tag
            </p>
          ))}
        </span>
        <span
          style={{
            paddingLeft: '1em',
            width: '15%',
          }}
        >
          <ImBin />
        </span>
      </div>
    </RouterLink>
  );
}

export default ContactListContact;
