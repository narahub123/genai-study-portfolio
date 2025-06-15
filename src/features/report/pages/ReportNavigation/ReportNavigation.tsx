import styles from "./ReportNavigation.module.css";
import { joinClassNames, Thumbnail } from "../../../../shared";
import { Link } from "react-router-dom";

interface ReportNavigationProps {
  className?: string;
}

const ReportNavigation = ({ className }: ReportNavigationProps) => {
  const classNames = joinClassNames([styles["report__navigation"], className]);

  const reportArr = [
    {
      path: "von-neumman-architecture",
      src: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbupjTX%2FbtrgnsgHKf9%2FAFF5V4IRsX8qE7c4Tzj7J1%2Fimg.png",
      title: "폰 노이만 구조",
      date: "2025. 06. 15.",
    },
    {
      path: "semantic-tages-accessibility-dom",
      src: "https://cheonmro.github.io/images/dom-tree.png",
      title: "시맨틱 태그, 접근성 그리고 DOM",
      date: "2025. 06. 15.",
    },
    {
      path: "practice",
      src: "",
      title: "연습",
      date: "2025. 06. 15.",
    },
  ];

  return (
    <div className={classNames}>
      {reportArr.map((report) => {
        return (
          <Link to={report.path} className={styles["card"]} key={report.path}>
            <div
              className={joinClassNames([
                styles["thumbnail__wrapper"],
                !report.src ? styles["thumbnail__wrapper--empty"] : "",
              ])}
            >
              <Thumbnail
                src={report.src}
                alt={report.title}
                className={styles["thumbnail"]}
              />
            </div>
            <div className={styles["text__wrapper"]}>
              <p>{report.title}</p>
              <p>{report.date}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ReportNavigation;
