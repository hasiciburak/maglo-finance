"use client";

import { useSignUp } from "@/ui/hooks";
import { SignUpFormData, signUpSchema } from "@/ui/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import Button from "../ui/button";
import Input from "../ui/input";
import styles from "./form-sign-up.module.scss";

const FormSignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  const { mutate: signUp, isPending } = useSignUp();

  const onSubmit = (data: SignUpFormData) => {
    signUp(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.formGroup}>
        <Input
          label="Full Name"
          type="text"
          placeholder="John Doe"
          className={styles.formInput}
          labelClassName={styles.label}
          {...register("fullName")}
        />
        {errors.fullName && (
          <span className={styles.error}>{errors.fullName.message}</span>
        )}
      </div>
      <div className={styles.formGroup}>
        <Input
          label="Email"
          type="email"
          placeholder="johndoe@example.com"
          className={styles.formInput}
          labelClassName={styles.label}
          {...register("email")}
        />
        {errors.email && (
          <span className={styles.error}>{errors.email.message}</span>
        )}
      </div>

      <div className={styles.formGroup}>
        <Input
          label="Password"
          type="password"
          placeholder="********"
          className={styles.formInput}
          labelClassName={styles.label}
          {...register("password")}
        />
        {errors.password && (
          <span className={styles.error}>{errors.password.message}</span>
        )}
      </div>

      <Button
        variant="primary"
        type="submit"
        disabled={isPending}
        className={styles.button}
      >
        {isPending ? "Creating Account..." : "Create Account"}
      </Button>

      <Button
        variant="secondary"
        className={`${styles.button} ${styles.googleButton}`}
      >
        <Image
          src="/google-logo.svg"
          alt="Google Logo"
          width={24}
          height={24}
          className={styles.googleLogo}
        />
        Sign Up With Google
      </Button>

      <small className={styles.haveAccountText}>
        Already have an account? &nbsp;
        <Link href="/sign-in" className={styles.link}>
          Sign In
        </Link>
      </small>
    </form>
  );
};

export default FormSignUp;
