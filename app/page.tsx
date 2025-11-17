import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <p>Login</p>
        <Image src="/bottom-line.svg" alt="login" width={50} height={8} />
      </main>
    </div>
  );
}
