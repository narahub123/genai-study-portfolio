import styles from "./SemanticHtml.module.css";
import { joinClassNames } from "../../../../shared";

interface SemanticHtmlProps {
  className?: string;
}

const SemanticHtml = ({ className }: SemanticHtmlProps) => {
  const classNames = joinClassNames([styles["semantic__html"], className]);

  return (
    <div className={classNames}>
      <h1 className={styles["h1"]}>시맨틱 HTML</h1>
    </div>
  );
};

export default SemanticHtml;
