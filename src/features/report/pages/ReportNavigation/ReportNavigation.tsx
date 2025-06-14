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
      <Link to="semantic-tages-accessibility-dom">
        시맨틱 태그, 접근성 그리고 DOM
      </Link>
    </div>
  );
};

export default ReportNavigation;
