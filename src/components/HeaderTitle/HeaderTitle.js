import styles from "./HeaderTitle.module.css"

export const HeaderTitle = (props) => {
  const { setUserPopup, setUsersSearch, setUserSetter, setErrorMessage } = props

  return (
    <div
      className={styles.HeaderTitle}
      onClick={() => {
        setUserPopup(null);
        setUsersSearch(null);
        setUserSetter(null);
        setErrorMessage('');
      }}
      title={"Contacts"}
    >
      <img src="/logo.svg" alt="Logo" width={40} className={styles.Logo} />

      <h1 className={styles.Name}>Contacts</h1>
    </div>
  )
}

export default HeaderTitle
