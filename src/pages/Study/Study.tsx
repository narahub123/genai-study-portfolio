import styles from "./Study.module.css";
import { joinClassNames } from "../../shared";
import { Outlet } from "react-router-dom";

interface StudyProps {
  className?: string;
}

const Study = ({ className }: StudyProps) => {
  const classNames = joinClassNames([styles["study"], className]);

  return (
    <div className={classNames}>
      <Outlet />
    </div>
  );
};

export default Study;
