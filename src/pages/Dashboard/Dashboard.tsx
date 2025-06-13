import styles from "./Dashboard.module.css";
import { joinClassNames } from "../../shared";

interface DashboardProps {}

const Dashboard = ({}: DashboardProps) => {
  const classNames = joinClassNames([styles["dashboard"]]);

  return <div className={classNames}>Dashboard</div>;
};

export default Dashboard;
