import styles from "./CSSPosition.module.css";
import { joinClassNames } from "../../../../shared";

interface CSSPositionProps {}

const CSSPosition = ({}: CSSPositionProps) => {
  const classNames = joinClassNames([styles["css__position"]]);

  return (
    <div className={classNames}>
      <article>
        <section className={joinClassNames([styles["section"]])}>
          <header>
            <h2 className={styles["h2"]}>translate 연습</h2>
          </header>
          <main>
            <div className={styles["wrapper"]}>
              <h3 className={styles["h3"]}>translate 100%</h3>
              <div className={styles["translate"]}>
                <div
                  className={joinClassNames([styles["box"], styles["box1"]])}
                >
                  box1
                </div>
                <div
                  className={joinClassNames([styles["box"], styles["box2"]])}
                >
                  box2
                </div>
              </div>
            </div>
            <div className={styles["wrapper"]}>
              <h3 className={styles["h3"]}>translate(수평, 수직)</h3>
              <div className={styles["translate"]}>
                <div
                  className={joinClassNames([styles["box"], styles["box3"]])}
                >
                  box3
                </div>
                <div
                  className={joinClassNames([styles["box"], styles["box4"]])}
                >
                  box4
                </div>
              </div>
            </div>
          </main>
        </section>
        <section
          className={joinClassNames([styles["section"], styles["sticky"]])}
        >
          <p>이건 스티키를 위한 바</p>
        </section>
        <section className={styles["section"]}>
          <header>
            <h2 className={styles["h2"]}>CSS 결합자</h2>
          </header>
          <main>
            <section>
              <h3 className={styles["h3"]}>
                후손 결합자(Descendant Combinator)
              </h3>
              <p className={styles["expl"]}>
                바로 아래의 자식 요소뿐만 아니라 여러 단계 아래의 후손 요소까지
                선택
              </p>
              <p className={styles["code"]}>
                {`
                    article a {
                        color: red;
                        text-decoration: none;          
                    }   
                `}
              </p>
            </section>
            <section>
              <h3 className={styles["h3"]}>자식 결합자(Child Combinator)</h3>
              <p className={styles["expl"]}>직계 자식 요소만 선택</p>
              <p className={styles["code"]}>
                {`
                    article > h3 {
                        font-size: 2rem;
                        text-align: center;
                        margin: 10px;
                    }
                `}
              </p>
            </section>
            <section>
              <h3 className={styles["h3"]}>
                인접 형제 결합자(Next-sibling Combinator)
              </h3>
              <p className={styles["expl"]}>
                첫번째 선택자로 선택된 요소의 바로 뒤에 나오는 형제 요소가
                두번째 선택자에 부합한다면 선택
              </p>
              <p className={styles["code"]}>
                {`
                    h3 + p {
                       text-indent: 1em;
                    }
                `}
              </p>
            </section>
            <section>
              <h3 className={styles["h3"]}>
                일반 형제 결합자(Subsequent-sibling Combinator)
              </h3>
              <p className={styles["expl"]}>
                첫번째 선택자로 선택된 요소의 다음에 나오는 모든 형제 요소
                중에서 두번째 선택자에 부합한다면 선택
              </p>
              <p className={styles["code"]}>
                {`
                    h3 ~ p {
                     font-style: italic;
                    }
                `}
              </p>
            </section>
          </main>
        </section>
      </article>
    </div>
  );
};

export default CSSPosition;
