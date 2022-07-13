import { Fragment, useRef } from "react"
import styles from "./Field.module.css"

export function Field(props) {
  const { label, type, value, setValue, focus, required } = props

  const fieldRef = useRef(null)

  return (
    <Fragment>
      <label htmlFor={fieldRef} className={styles.Label}>
        {label}
      </label>
      <input
        ref={fieldRef}
        type={type}
        placeholder={label}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        autoFocus={focus}
        required={required}
      />
    </Fragment>
  )
}

export default Field
