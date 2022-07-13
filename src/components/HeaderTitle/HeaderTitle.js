import styles from './HeaderTitle.module.css';

/**
 * The title in the header
 */
export const HeaderTitle = (props) => {
  const {
    // The function to set the UserPopup
    setUserPopup,
    // The function to set the name of the user we want to set
    setUsersSearch,
    // The function to set the user we want to set
    setUserSetter,
    // The function to set the error message
    setErrorMessage,
  } = props;

  return (
    <div
      className={styles.HeaderTitle}
      onClick={() => {
        setUserPopup(null);
        setUsersSearch(null);
        setUserSetter(null);
        setErrorMessage('');
      }}
      title={'Contacts'}>
      <img src="/logo.svg" alt="Logo" width={40} className={styles.Logo} />

      <h1 className={styles.Name}>Contacts</h1>
    </div>
  );
};

export default HeaderTitle;
