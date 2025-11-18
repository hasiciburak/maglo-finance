import FormSignUp from "@/components/auth/form-sign-up";
import styles from "./page.module.scss";

const Page = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.greeting}>
          <h1>Sign Up</h1>
          <p className="caption">Welcome back! Please enter your details</p>
        </div>
        <div className={styles.form}>
          <FormSignUp />
        </div>
      </div>
    </div>
  );
};

export default Page;
