import styles from "./StudyNavigation.module.css";
import { CardLink, joinClassNames, type ICardLink } from "../../../../shared";

interface StudyNavigationProps {
  className?: string;
}

const StudyNavigation = ({ className }: StudyNavigationProps) => {
  const classNames = joinClassNames([styles["study__navigation"], className]);

  const studyArr: ICardLink[] = [
    {
      path: "semantic-html",
      src: "",
      title: "시맨틱 HTML",
      date: "2025. 06.17.",
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
