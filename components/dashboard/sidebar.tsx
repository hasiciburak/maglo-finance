"use client";

import Image from "next/image";
import styles from "./sidebar.module.scss";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      {/* Logo Section */}
      <div className={styles.logo}>
        <Image
          src="/logo.svg"
          alt="Maglo Logo"
          width={122}
          height={30}
          priority
        />
      </div>

      {/* Main Navigation */}
      <div className={styles.navigation}>
        <div className={styles["nav-section"]}>
          {/* Dashboard - Active */}
          <div className={`${styles["nav-item"]} ${styles.active}`}>
            <Image
              src="/icons/dashboard.svg"
              alt="Dashboard"
              width={20}
              height={20}
            />
            <span className={styles["nav-text"]}>Dashboard</span>
          </div>

          {/* Transactions */}
          <div className={styles["nav-item"]}>
            <Image
              src="/icons/transactions.svg"
              alt="Transactions"
              width={20}
              height={20}
            />
            <span className={styles["nav-text"]}>Transactions</span>
          </div>

          {/* Invoices */}
          <div className={styles["nav-item"]}>
            <Image
              src="/icons/invoices.svg"
              alt="Invoices"
              width={20}
              height={20}
            />
            <span className={styles["nav-text"]}>Invoices</span>
          </div>

          {/* My Wallets */}
          <div className={styles["nav-item"]}>
            <Image
              src="/icons/wallets.svg"
              alt="Wallets"
              width={20}
              height={20}
            />
            <span className={styles["nav-text"]}>My Wallets</span>
          </div>

          {/* Settings */}
          <div className={styles["nav-item"]}>
            <Image
              src="/icons/settings.svg"
              alt="Settings"
              width={20}
              height={20}
            />
            <span className={styles["nav-text"]}>Settings</span>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className={styles["nav-section"]}>
          {/* Help */}
          <div className={styles["nav-item"]}>
            <Image src="/icons/help.svg" alt="Help" width={20} height={20} />
            <span className={styles["nav-text"]}>Help</span>
          </div>

          {/* Logout */}
          <div className={styles["nav-item"]}>
            <Image
              src="/icons/logout.svg"
              alt="Logout"
              width={20}
              height={20}
            />
            <span className={styles["nav-text"]}>Logout</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
