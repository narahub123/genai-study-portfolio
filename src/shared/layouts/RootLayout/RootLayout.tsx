import styles from "./RootLayout.module.css";
import { joinClassNames } from "../../utils/index";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { FocusTrap, Navbar, Toggle } from "../../../features";
import { headerObj, navArr } from "../../data";
import { PROJECT_NAME } from "../../constants";

interface RootLayoutProps {
  className?: string;
}

const RootLayout = ({ className }: RootLayoutProps) => {
  const classNames = joinClassNames([styles["root__layout"], className]);

  const { pathname } = useLocation();

  const [path, setPath] = useState<string>("home");

  const [firstFocusIndex, setFirstFocusIndex] = useState(1);

  useEffect(() => {
    const path = pathname.split("/")[1];

    const newPath = path ? path : "home";

    // title 태그 변경
    document.title = `${PROJECT_NAME} : ${headerObj[newPath].title}`;

    setPath((prev) => {
      if (prev !== newPath) return newPath;
      else return prev;
    });

    const firstFocusIndex = navArr.findIndex(
      (nav) => nav.path.split("/")[1] === newPath
    );

    console.log(firstFocusIndex);

    setFirstFocusIndex(firstFocusIndex === -1 ? 1 : firstFocusIndex + 1);
  }, [pathname]);

  return (
    <FocusTrap firstFocusIndex={firstFocusIndex}>
      <div className={classNames}>
        <div className={styles["bgmode__wrapper"]}>
          <Toggle />
        </div>
        <header className={styles["root__layout__header"]}>
          <div className={styles["header__container"]}>
            <div className={styles["header__wrapper"]}>
              <h3 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                {headerObj[path].header}
              </h3>
              <p style={{ fontSize: "0.9rem", color: "#555" }}>
                {headerObj[path].expl}
              </p>
            </div>
            {pathname.split("/")[1] && (
              <div className={styles["navigation__wrapper"]}>
                <Navbar />
              </div>
            )}
          </div>
        </header>
        <main className={styles["root__layout__body"]}>
          <Outlet />
        </main>
        <footer className={styles["root__layout__footer"]}>
          since 2025. 06. 09.
        </footer>
      </div>
    </FocusTrap>
  );
};

export default RootLayout;
