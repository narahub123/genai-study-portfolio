import styles from "./ReportNavigation.module.css";
import { joinClassNames, Thumbnail } from "../../../../shared";
import { Link } from "react-router-dom";

interface ReportNavigationProps {
  className?: string;
}

const ReportNavigation = ({ className }: ReportNavigationProps) => {
  const classNames = joinClassNames([styles["report__navigation"], className]);

  return (
    <div className={classNames}>
      <Link to="von-neumman-architecture" className={styles["card"]}>
        <div className={styles["thumbnail__wrapper"]}>
          <Thumbnail
            src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbupjTX%2FbtrgnsgHKf9%2FAFF5V4IRsX8qE7c4Tzj7J1%2Fimg.png"
            alt="폰 노이만 구조"
            className={styles["thumbnail"]}
          />
        </div>
        <div className={styles["text__wrapper"]}>
          <p>폰 노이만 구조</p>
          <p>2025. 06. 15</p>
        </div>
      </Link>
      <Link to="semantic-tages-accessibility-dom" className={styles["card"]}>
        <div className={styles["thumbnail__wrapper"]}>
          <Thumbnail
            src="https://cheonmro.github.io/images/dom-tree.png"
            alt="시맨틱 태그, 접근성 그리고 DOM"
            className={styles["thumbnail"]}
          />
        </div>
        <div className={styles["text__wrapper"]}>
          <p>시맨틱 태그, 접근성 그리고 DOM</p>
          <p>2025. 06. 15</p>
        </div>
      </Link>
    </div>
  );
};

export default ReportNavigation;
