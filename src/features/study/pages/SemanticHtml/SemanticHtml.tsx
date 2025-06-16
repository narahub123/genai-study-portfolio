import styles from "./SemanticHtml.module.css";
import { joinClassNames } from "../../../../shared";

interface SemanticHtmlProps {
  className?: string;
}

const SemanticHtml = ({ className }: SemanticHtmlProps) => {
  const classNames = joinClassNames([styles["semantic__html"], className]);

  return <div className={classNames}>SemanticHtml</div>;
};

export default SemanticHtml;
