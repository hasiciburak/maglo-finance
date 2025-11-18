import React, {
  DetailedHTMLProps,
  ButtonHTMLAttributes,
  forwardRef,
} from "react";
import styles from "./button.module.scss";

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant?: "primary" | "secondary";
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    const buttonClass = `${styles.button} ${styles[variant]} ${
      className || ""
    }`.trim();

    return <button ref={ref} className={buttonClass} {...props} />;
  }
);

Button.displayName = "Button";

export default Button;
