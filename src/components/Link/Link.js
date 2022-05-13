import { Link as RouterLink } from "react-router-dom";

import styles from './Link.module.css';

export const Link = (props) => {

  const {href, value, children, className} = props;

  const text = value ? value : children;

  return (
    <RouterLink className={`${styles.link} ${className}`} to={href}>{text}</RouterLink>
  )
};

export default Link;
