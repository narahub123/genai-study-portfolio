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
      <div>
        <ul>
          <li>중요 시맨틱 태그 정리</li>
          <li>source 태그 사용법 정리 및 어떻게 사용 가능할지 정리할 것</li>
          <li>그리드 시스템 반영하기 - navigation page</li>
          <li>반응형 디자인 적용하기</li>
          <li>flexbox align-content 확인 해 볼 것</li>
        </ul>
      </div>
    </div>
  );
};

export default SemanticHtml;
