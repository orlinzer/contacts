import styles from './Main.module.css';

/**
 * The main section in the app
 */
export const Main = (props) => {
  const {
    // The content of the main
    children,
  } = props;

  return <main className={styles.Main}>{children}</main>;
};

export default Main;
