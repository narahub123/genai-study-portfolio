import styles from "./Dashboard.module.css";
import { Icon, icons, joinClassNames, type ColorToken } from "../../shared";
import { NavLink } from "react-router-dom";

interface DashboardProps {}

const Dashboard = ({}: DashboardProps) => {
  const classNames = joinClassNames([styles["dashboard"]]);

  const navArr: {
    id: keyof typeof icons;
    name: string;
    path: string;
    expl: string;
    color: ColorToken;
  }[] = [
    {
      id: "study",
      path: "/study",
      name: "Study",
      expl: "공부 정리",
      color: "green",
    },
    {
      id: "report",
      path: "/report",
      name: "Report",
      expl: "과제 정리",
      color: "purple",
    },
    {
      id: "toy",
      path: "/toy",
      name: "Toy Project",
      expl: "토이 프로젝트",
      color: "purple",
    },
    {
      id: "extra",
      path: "/extra",
      name: "Extra",
      expl: "기타",
      color: "green",
    },
  ];

  return (
    <div className={classNames}>
      <nav className={styles["navigation"]}>
        {navArr.map((nav) => (
          <NavLink
            to={nav.path}
            key={nav.id}
            className={joinClassNames([
              styles["dashboard__card"],
              styles[nav.color],
            ])}
          >
            <div className={styles["dashboard__card__wrapper"]}>
              <Icon
                iconName={nav.id}
                fontSize="2xl"
                size="2xl"
                className={styles["dashboard__card__icon"]}
                color={nav.color}
              />
              <p className={styles["dashboard__card__title"]}>{nav.name}</p>
              <p className={styles["dashboard__card__expl"]}> {nav.expl}</p>
            </div>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Dashboard;
