import styles from "./Button.module.css";

const Button = ({
  children,
  onClick,
  className = "",
  type = "button",
  variant = "primary",
  ...props
}) => {
  return (
    <button
      type={type}
      className={`${styles.customBtn} ${styles[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
