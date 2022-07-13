import styles from './Footer.module.css';

/**
 * The footer of the app
 */
export const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <p className="footer">
        &copy; {new Date().getFullYear()} Or Linzer and Hilal Sharkawi
      </p>
    </footer>
  );
};

export default Footer;
