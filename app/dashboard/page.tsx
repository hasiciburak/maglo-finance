import StatCard from "@/components/ui/card-stat";
import styles from "./page.module.scss";
import Sidebar from "@/components/dashboard/sidebar";

const DashboardPage = () => {
  return (
    <div className={styles["dashboard-layout"]}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className={styles["main-content"]}>
        {/* Stats Cards Grid */}
        <div className={styles["stats-grid"]}>
          <div>{/* Stat Card 1 */}</div>
          <div>{/* Stat Card 2 */}</div>
          <div>{/* Stat Card 3 */}</div>
        </div>

        {/* Chart and Table Section */}
        <div className={styles["content-grid"]}>
          <h1>Dashboard</h1>
          <div className={styles["stats-grid"]}>
            <StatCard
              label={"Total Balance"}
              value={"$100,000"}
              iconSrc={"/icons/wallets.svg"}
              variant="dark"
            />
            <StatCard
              label={"Total Spending"}
              value={"$100,000"}
              iconSrc={"/icons/wallets.svg"}
              variant="light"
            />
            <StatCard
              label={"Total Spending"}
              value={"$100,000"}
              iconSrc={"/icons/wallets.svg"}
              variant="light"
            />
          </div>
          <div>{/* Chart */}</div>
          <div>{/* Table */}</div>
        </div>
      </div>

      {/* Right Panel */}
      <div className={styles["right-panel"]}>
        {/* Scheduled Transfers List */}
        <div className={styles["transfers-list"]}>
          <div className={styles["transfer-item"]}>
            <div>{/* Icon */}</div>
            <div>{/* Transfer Info */}</div>
            <div>{/* Action */}</div>
          </div>
          <div className={styles["transfer-item"]}>
            <div>{/* Icon */}</div>
            <div>{/* Transfer Info */}</div>
            <div>{/* Action */}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
