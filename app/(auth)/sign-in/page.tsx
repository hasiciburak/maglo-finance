import Image from "next/image";
import styles from "./page.module.scss";

const Page = () => {
  return (
    <div className={styles.page}>
      <div className={styles.column}>
        <p>Sign In</p>
      </div>
      <div
        className={styles.column}
        style={{ position: "relative", minHeight: "100vh" }}
      >
        <Image
          src="/login-bg.png"
          alt="login-bg"
          fill
          style={{
            objectFit: "cover",
          }}
          sizes="50vw"
        />
      </div>
    </div>
  );
};

export default Page;
