import styles from "./CssBasic.module.css";
import { joinClassNames } from "../../../../shared";

interface CssBasicProps {
  className?: string;
}

const CssBasic = ({ className }: CssBasicProps) => {
  const classNames = joinClassNames([styles["css__basic"], className]);

  return (
    <div className={classNames}>
      <h1 className={styles["h1"]}>CSS 기초 정리</h1>
      <section className={styles["section"]}>
        <header className={styles["section__header"]}>
          <h2 className={styles["h2"]}>keyframes with Transform</h2>
        </header>
        <main className={styles["section__main"]}>
          <div className={styles["wrapper"]}>
            <div className={styles["container"]}>
              <div className={styles["box__wrapper"]}>
                <div className={styles["box"]} />
              </div>
              <p>rotate</p>
            </div>
            <div className={styles["container"]}>
              <div className={styles["ball__wrapper"]}>
                <img
                  className={styles["ball"]}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Basketball.jpeg/250px-Basketball.jpeg"
                />
              </div>
              <p>translateY</p>
            </div>
            <div className={styles["container"]}>
              <div className={styles["solo_levelling__wrapper"]}>
                <img
                  className={styles["solo_levelling"]}
                  src="https://i.namu.wiki/i/2if1V2AF0FPHtDyE-jRyTyA7Em1EFcBZRVZS0hv_UydboZ2k8Yc7eL2yqkrgzM_JrlvrWg7kIUcimWkV9Tji7g.webp"
                  alt=""
                />
              </div>
              <p>scale</p>
            </div>
          </div>
        </main>
      </section>
      <section className={styles["section"]}>
        <header className={styles["section__header"]}>
          <h2 className={styles["h2"]}>gradient</h2>
        </header>
        <main className={styles["section__main"]}>
          <div className={styles["gradient__container"]}>
            <p className={styles["callout"]}>
              background: linear-gradient(방향 또는 각도, 색상1 위치1, 색상2
              위치2, ...)
            </p>
            <div className="gradient__wrapper">
              <div
                className={joinClassNames([
                  styles["gradient__box"],
                  styles["gradient__box--normal"],
                ])}
              />
              <div
                className={joinClassNames([
                  styles["gradient__box"],
                  styles["gradient__box--dynamic"],
                ])}
              ></div>
            </div>
          </div>
        </main>
      </section>
      <section className={styles["section"]}>
        <header className={styles["section__header"]}>
          <h1 className={styles["h2"]}>텍스트 스타일</h1>
        </header>
        <main className={styles["section__main"]}> </main>
      </section>
    </div>
  );
};

export default CssBasic;
