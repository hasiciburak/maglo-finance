"use client";

import { useSignUp } from "@/ui/hooks";
import { SignUpFormData, signUpSchema } from "@/ui/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
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
      <div>
        <Input
          label="Full Name"
          type="text"
          placeholder="John Doe"
          className={styles.name}
          {...register("fullName")}
        />
        {errors.fullName && (
          <span className={styles.error}>{errors.fullName.message}</span>
        )}
      </div>
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
        {isPending ? "Signing Up..." : "Sign Up"}
      </Button>
      <Button variant="secondary">Sign Up With Google</Button>

      <small>
        Already have an account? &nbsp;
        <Link href="/sign-in" className={styles.link}>
          Sign In
        </Link>
      </small>
    </form>
  );
};

export default FormSignUp;
