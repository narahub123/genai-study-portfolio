import styles from "./CardLink.module.css";
import { joinClassNames, Thumbnail, type ICardLink } from "../../../shared";
import { Link } from "react-router-dom";

interface CardLinkProps {
  className?: string;
  report: ICardLink;
}

const CardLink = ({ className, report }: CardLinkProps) => {
  const classNames = joinClassNames([styles["card__link"], className]);

  return (
    <Link to={report.path} className={classNames} key={report.path}>
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
};

export default CardLink;
