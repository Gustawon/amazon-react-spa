import type { ButtonHTMLAttributes } from "react";

import styles from "./Button.module.css";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  //   label: string;
}

function Button({ ...props }: IButtonProps) {
  return (
    <button className={styles.button} {...props}>
      {props.children}
    </button>
  );
}

export default Button;
