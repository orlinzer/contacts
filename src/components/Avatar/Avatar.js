import styles from './Avatar.module.css';

/**
 * An Image of an user
 */
export const Avatar = (props) => {
  const {
    // The name of the user
    name,
    // The path to the user's image
    src,
    // The color of the background of the avatar if it doesn't have an image
    color,
    // The size of the avatar can be undefined for small or 'large' for large
    size,
  } = props;

  // Default title
  const title = name ?? 'Avatar';
  // Default image path
  const imagePath = src ?? '/logo.svg';
  // The initials of the user
  const initials = name
    ? name
        .split(' ')
        .map((word) => word[0])
        .join('')
        .toUpperCase()
    : undefined;

  // Return the initials if there is a name but not an image
  return !src && initials ? (
    <p
      title={title}
      className={`${styles.Avatar} ${size === 'large' && styles.Large}`}
      style={{
        backgroundColor: color,
      }}>
      {initials}
    </p>
  ) : (
    <img
      src={imagePath}
      alt={`name ${Avatar}`}
      width={40}
      title={title}
      className={`${styles.Avatar} ${size === 'large' && styles.Large}`}
    />
  );
};

export default Avatar;
