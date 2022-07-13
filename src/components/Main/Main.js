import styles from "./Main.module.css"

export const Main = (props) => {
  const { children } = props

  return <main className={styles.main}>{children}</main>
}

export default Main
