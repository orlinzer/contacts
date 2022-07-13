
import styles from './ContactListItemOption.module.css';

export const ContactListItemOption = (props) => {
  const {
    onClick,
    children,
  } = props;

  return (
    <div
      className={styles.ContactListItemOption}
      onClick={() => onClick()}
    >
      {children}
    </div>
  );
};

export default ContactListItemOption;
