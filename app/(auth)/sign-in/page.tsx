import FormSignIn from "@/components/auth/form-sign-in";
import styles from "./page.module.scss";

const SignInPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.greeting}>
        <h1>Sign In</h1>
        <p className="caption">Welcome Back! Please enter your details</p>
      </div>
      <div className={styles.form}>
        <FormSignIn />
      </div>
    </div>
  );
};

export default SignInPage;
