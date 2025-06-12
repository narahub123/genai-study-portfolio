import styles from "./RootLayout.module.css";
import { joinClassNames } from "../../utils/index";
import type { IHeader } from "../../types";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { navArr } from "../../data";
import { Toggle } from "../../../features";

interface RootLayoutProps {
  className?: string;
}

const initialHeader: IHeader = {
  title: "Home",
  header: "GenAI 웹 서비스 개발 과정",
  expl: "헤더 설명 연습 문장",
};

const RootLayout = ({ className }: RootLayoutProps) => {
  const classNames = joinClassNames([styles["root__layout"], className]);

  const { pathname } = useLocation();

  const [header, setHeader] = useState<IHeader>(initialHeader);

  useEffect(() => {
    const path = pathname.split("/")[1];

    if (!path) {
      setHeader(initialHeader);
    } else {
    }
  }, [pathname]);

  return (
    <div className={classNames}>
      <div className={styles["bgmode__wrapper"]}>
        <Toggle />
      </div>
      <header className={styles["root__layout__header"]}>
        <div className={styles["header__container"]}>
          <div className={styles["header__wrapper"]}>
            <h3 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
              {header.header}
            </h3>
            <p style={{ fontSize: "0.9rem", color: "#555" }}>{header.expl}</p>
          </div>
          {
            <div className={styles["navigation__wrapper"]}>
              <nav className={styles["navigation"]} role="tablist">
                {navArr.map((nav) => (
                  <NavLink
                    to={nav.path}
                    className={({ isActive }) =>
                      joinClassNames([
                        styles["nav__link"],
                        isActive
                          ? styles["nav__link--active"]
                          : styles["nav__link--inactive"],
                      ])
                    }
                    key={nav.path}
                    role="tab"
                  >
                    {nav.name}
                  </NavLink>
                ))}
              </nav>
            </div>
          }
        </div>
      </header>
      <main className={styles["root__layout__body"]}>
        <div className={styles["outlet__wrapper"]}>
          <Outlet />
        </div>
      </main>
      <footer className={styles["root__layout__footer"]}>
        since 2025. 06. 09.
      </footer>
    </div>
  );
};

export default RootLayout;
