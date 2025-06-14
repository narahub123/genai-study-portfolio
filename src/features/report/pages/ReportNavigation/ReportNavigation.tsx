import styles from "./ReportNavigation.module.css";
import { joinClassNames } from "../../../../shared";
import { Link } from "react-router-dom";

interface ReportNavigationProps {
  className?: string;
}

const ReportNavigation = ({ className }: ReportNavigationProps) => {
  const classNames = joinClassNames([styles["report__navigation"], className]);

  return (
    <div className={classNames}>
      <Link to="von-neumman-architecture">폰 노이만 구조</Link>
    </div>
  );
};

export default ReportNavigation;
