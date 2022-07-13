import styles from "./Avatar.module.css"

export const Avatar = (props) => {
  const { name, src, color, size } = props

  const title = name ?? "Avatar"
  const imagePath = src ?? "/logo.svg"
  const initials = name
    ? name
        .split(" ")
        .map((word) => word[0])
        .join("")
        .toUpperCase()
    : undefined

  return !src && initials ? (
    <p
      title={title}
      className={`${styles.Avatar} ${size === "large" && styles.Large}`}
      style={{
        backgroundColor: color,
      }}
    >
      {initials}
    </p>
  ) : (
    <img
      src={imagePath}
      alt={`name ${Avatar}`}
      width={40}
      title={title}
      className={`${styles.Avatar} ${size === "large" && styles.Large}`}
    />
  )
}

export default Avatar
