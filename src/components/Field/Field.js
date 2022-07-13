import { Fragment, useRef } from 'react';
import styles from './Field.module.css';

/**
 * A field in a form
 */
export const Field = (props) => {
  const {
    // The label of the field
    label,
    // The type of the field
    type,
    // The value of the field
    value,
    // The value setter of the field
    setValue,
    // If we want to focus on this field
    focus,
    // If this field is required
    required,
  } = props;

  // A reference of the field
  const fieldRef = useRef(null);

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
  );
};

export default Field;
