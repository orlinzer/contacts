import styles from './ContactListItemOption.module.css';

/**
 * An option in ContactListItemOptions
 */
export const ContactListItemOption = (props) => {
  const {
    // OnClick handler
    onClick,
    // The content of the option
    children,
  } = props;

  return (
    <div className={styles.ContactListItemOption} onClick={() => onClick()}>
      {children}
    </div>
  );
};

export default ContactListItemOption;
