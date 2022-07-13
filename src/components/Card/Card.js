import { MdClose } from "react-icons/md"

import styles from "./Card.module.css"

export function Card(props) {
  const { children, close } = props

  return (
    <div className={styles.Card}>
      <MdClose className={styles.CloseButton} onClick={() => close()} />
      <div className={styles.Content}>{children}</div>
    </div>
  )
}

export default Card
