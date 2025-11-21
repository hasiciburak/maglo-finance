import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import styles from "./input.module.scss";

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label?: string;
  labelClassName?: string | undefined;
};

const Input = ({ label, labelClassName, ...props }: InputProps) => {
  return (
    <div className={styles.input}>
      <label htmlFor={props.id} className={labelClassName}>
        {label}
      </label>
      <input {...props} />
    </div>
  );
};

export default Input;
