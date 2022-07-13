import { MdClose } from 'react-icons/md';

import styles from './Card.module.css';

/**
 * A card that float over the main view
 */
export const Card = (props) => {
  const {
    // The content of the card
    children,
    // The function to close the card
    close,
  } = props;

  return (
    <div className={styles.Card}>
      <MdClose className={styles.CloseButton} onClick={() => close()} />
      <div className={styles.Content}>{children}</div>
    </div>
  );
};

export default Card;
