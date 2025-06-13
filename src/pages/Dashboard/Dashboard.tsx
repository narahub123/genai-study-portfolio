import styles from "./Dashboard.module.css";
import { Icon, joinClassNames } from "../../shared";
import { NavLink } from "react-router-dom";

interface DashboardProps {}

const Dashboard = ({}: DashboardProps) => {
  const classNames = joinClassNames([styles["dashboard"]]);

  const navArr = [
    {
      id: "study",
      name: "Study",
      path: "/study",
    },
    {
      id: "report",
      name: "Report",
      path: "/report",
    },
    {
      id: "toy",
      name: "Toy Project",
      path: "/toy",
    },
    {
      id: "extra",
      name: "Extra",
      path: "/extra",
    },
  ];

  return (
    <div className={classNames}>
      <nav className={styles["navigation"]}>
        {navArr.map((nav) => (
          <NavLink
            to={nav.path}
            key={nav.id}
            className={styles["dashboard__card"]}
          >
            <Icon />
            <p>{nav.name}</p>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Dashboard;
