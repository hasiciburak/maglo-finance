import Image from "next/image";
import styles from "./card-stat.module.scss";

type StatCardProps = {
  variant?: "light" | "dark";
  label: string;
  value: string;
  iconSrc: string;
  iconAlt?: string;
  className?: string;
};

const StatCard = ({
  variant = "light",
  label,
  value,
  iconSrc,
  iconAlt = "",
  className,
}: StatCardProps) => {
  return (
    <div
      className={`${styles.card} ${styles[variant]} ${className || ""}`.trim()}
    >
      <div className={styles.icon}>
        <Image src={iconSrc} alt={iconAlt} width={20} height={20} />
      </div>
      <div className={styles.content}>
        <p className={styles.label}>{label}</p>
        <p className={styles.value}>{value}</p>
      </div>
    </div>
  );
};

export default StatCard;
