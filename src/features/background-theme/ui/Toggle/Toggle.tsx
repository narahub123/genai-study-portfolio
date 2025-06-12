import styles from "./Toggle.module.css";
import { joinClassNames } from "../../../../shared/utils";
import { useState } from "react";

import { MdLightMode, MdDarkMode } from "react-icons/md";

interface ToggleProps {
  className?: string;
  disabled?: boolean;
}

const Toggle = ({ className, disabled = false }: ToggleProps) => {
  const [isActive, setIsActive] = useState(false);
  const classNames = joinClassNames([styles["toggle"], className]);

  const handleClick = () => {
    setIsActive(!isActive);
    const body = document.querySelector("body");

    if (!body) return;

    const bgTheme = body.getAttribute("data-bgTheme");

    const newBgTheme = bgTheme === "light" ? "dark" : "light";

    body.setAttribute("data-bgTheme", newBgTheme);
  };

  return (
    <button
      className={classNames}
      onClick={disabled ? undefined : handleClick}
      aria-label={`배경 테마를 ${
        isActive ? "라이트 모드로" : "다크 모드로"
      } 전환`}
      aria-pressed={isActive}
      disabled={disabled}
    >
      <span
        role="presentation"
        aria-hidden="true"
        className={joinClassNames([
          styles["thumb"],
          isActive ? styles["thumb--active"] : styles["thumb--inactive"],
        ])}
      >
        <MdLightMode
          aria-hidden="true"
          className={joinClassNames([
            styles["icon"],
            isActive
              ? styles["icon--inactive--on"]
              : styles["icon--inactive--off"],
          ])}
        />
        <MdDarkMode
          aria-hidden="true"
          className={joinClassNames([
            styles["icon"],
            isActive ? styles["icon--active--off"] : styles["icon--active--on"],
          ])}
        />
      </span>
    </button>
  );
};

export default Toggle;
