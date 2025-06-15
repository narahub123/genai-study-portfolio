import styles from "./ReportNavigation.module.css";
import { CardLink, joinClassNames, type ICardLink } from "../../../../shared";

interface ReportNavigationProps {
  className?: string;
}

const ReportNavigation = ({ className }: ReportNavigationProps) => {
  const classNames = joinClassNames([styles["report__navigation"], className]);

  const reportArr: ICardLink[] = [
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
        return <CardLink report={report} key={report.path} />;
      })}
    </div>
  );
};

export default ReportNavigation;
