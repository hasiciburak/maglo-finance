"use client";

import { SignInFormData, signInSchema } from "@/ui/lib/validations";
import { useLogin } from "@/ui/hooks";
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
    login(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Input
          label="Email"
          type="email"
          placeholder="johndoe@example.com"
          className={styles.email}
          {...register("email")}
        />
        {errors.email && (
          <span className={styles.error}>{errors.email.message}</span>
        )}
      </div>

      <div>
        <Input
          label="Password"
          type="password"
          placeholder="********"
          className={styles.password}
          {...register("password")}
        />
        {errors.password && (
          <span className={styles.error}>{errors.password.message}</span>
        )}
      </div>

      <Button variant="primary" type="submit" disabled={isPending}>
        {isPending ? "Signing In..." : "Sign In"}
      </Button>
      <Button variant="secondary">Sign Up With Google</Button>
      
      <small>
        Don&apos;t have an account? &nbsp;
        <Link href="/sign-up" className={styles.link}>
          Sign Up
        </Link>
      </small>
    </form>
  );
};

export default FormSignIn;
