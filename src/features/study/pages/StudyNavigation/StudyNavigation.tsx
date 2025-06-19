import styles from "./StudyNavigation.module.css";
import { CardLink, joinClassNames, type ICardLink } from "../../../../shared";

interface StudyNavigationProps {
  className?: string;
}

const StudyNavigation = ({ className }: StudyNavigationProps) => {
  const classNames = joinClassNames([styles["study__navigation"], className]);

  const studyArr: ICardLink[] = [
    {
      path: "css-basic",
      src: "",
      title: "css 기초",
      date: "2025. 06.17.",
    },
    {
      path: "css-position",
      src: "",
      title: "css position",
      date: "2025. 06.18.",
    },
    {
      path: "semantic-html",
      src: "",
      title: "시맨틱 HTML",
      date: "2025. 06.19.",
    },
    {
      path: "semantic",
      src: "",
      title: "시맨틱 HTML",
      date: "2025. 06.19.",
    },
    {
      path: "html",
      src: "",
      title: "시맨틱 HTML",
      date: "2025. 06.19.",
    },
  ];

  return (
    <div className={classNames}>
      {studyArr.map((study) => {
        return <CardLink report={study} key={study.path} />;
      })}
    </div>
  );
};

export default StudyNavigation;
