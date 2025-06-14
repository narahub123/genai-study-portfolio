import styles from "./Report.module.css";
import { joinClassNames } from "../../shared";
import { Outlet } from "react-router-dom";

interface ReportProps {}

const Report = ({}: ReportProps) => {
  const classNames = joinClassNames([styles["report"]]);

  return (
    <div className={classNames}>
      <Outlet />
    </div>
  );
};

export default Report;
