import styles from "./layout.module.scss";
import Image from "next/image";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.column}>
        <Image
          src="/logo.svg"
          alt="Maglo Finance Logo"
          width={122}
          height={30}
        />
        {children}
      </div>

      <div className={styles.column}>
        <div className={styles.imageContainer}>
          <Image
            src="/login-bg.png"
            alt="sign-in"
            fill
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

export default Layout;
