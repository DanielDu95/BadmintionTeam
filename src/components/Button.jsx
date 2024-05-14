import styles from "./Button.module.css";

function Button({ children, type }) {
  if (type === "primary")
    return <button className={styles.primary}>{children}</button>;
  if (type === "secondary")
    return <button className={styles.secondary}>{children}</button>;
}

export default Button;
