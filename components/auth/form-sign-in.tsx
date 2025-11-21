"use client";

import { SignInFormData, signInSchema } from "@/ui/lib/validations";
import { useLogin } from "@/ui/hooks";
import Image from "next/image";
import Button from "../ui/button";
import Input from "../ui/input";
import styles from "./form-sign-in.module.scss";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";

const FormSignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  });

  const { mutate: login, isPending } = useLogin();

  const onSubmit = (data: SignInFormData) => {
    login({ email: data.email, password: data.password });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.formGroup}>
        <Input
          label="Email"
          type="email"
          placeholder="johndoe@example.com"
          className={styles.email}
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
          className={styles.password}
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
        {isPending ? "Signing In..." : "Sign In"}
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
        Sign In With Google
      </Button>

      <small className={styles.dontHaveAccountText}>
        Don&apos;t have an account? &nbsp;
        <Link href="/sign-up" className={styles.link}>
          Sign Up
        </Link>
      </small>
    </form>
  );
};

export default FormSignIn;
