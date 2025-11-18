import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import styles from "./input.module.scss";

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label: string;
};

const Input = (props: InputProps) => {
  return (
    <div className={styles.input}>
      <label htmlFor={props.id} className={styles.label}>
        {props.label}
      </label>
      <input {...props} />
    </div>
  );
};

export default Input;
