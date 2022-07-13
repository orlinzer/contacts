import styles from "./Footer.module.css"

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p className="footer">
        &copy; {new Date().getFullYear()} Or Linzer and Hilal Sharkawi
      </p>
    </footer>
  )
}

export default Footer
