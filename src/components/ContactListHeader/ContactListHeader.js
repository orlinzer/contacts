
import styles from './ContactListHeader.module.css';

export const ContactListHeader = () => {

  return (
    <div className={styles.ContactListHeader}>
      <span
        style={{
          paddingLeft: '1em',
          width: '40%',
        }}
      >
        Name
      </span>
      <span
        style={{
          paddingLeft: '1em',
          width: '15%',
        }}
      >
        Phone
      </span>
      <span
        style={{
          paddingLeft: '1em',
          width: '15%',
        }}
      >
        Email
      </span>
      <span
        style={{
          paddingLeft: '1em',
          width: '15%',
        }}
      >
        Tags
      </span>
      <span
        style={{
          paddingLeft: '1em',
          width: '15%',
        }}
      >
        Operations
      </span>
    </div>

  );
}

export default ContactListHeader;
