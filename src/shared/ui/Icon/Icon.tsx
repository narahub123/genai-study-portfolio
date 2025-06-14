import styles from "./Icon.module.css";
import { icons, joinClassNames } from "../../../shared";
import type { ButtonHTMLAttributes, HTMLAttributes } from "react";

interface BaseProps {
  className?: string;
  iconName: keyof typeof icons;
  size?: number | string;
  rounded?: "50%";
  fontSize?: number | string;
}

type ButtonIconProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    onClick: (...args: any[]) => any;
    disabled?: boolean;
  };

type SpanIconProps = BaseProps &
  HTMLAttributes<HTMLSpanElement> & {
    onClick?: undefined;
  };

type IconProps = ButtonIconProps | SpanIconProps;

// 공통의 요소만 올 수 있음
const Icon = ({
  className,
  onClick,
  iconName,
  size = "2rem",
  fontSize = "1rem",
  rounded = "50%",
  ...rest
}: IconProps) => {
  const classNames = joinClassNames([styles["icon"], className]);

  const Inner = icons[iconName];

  if (typeof onClick === "function") {
    const { disabled = false, ...buttonRest } =
      rest as ButtonHTMLAttributes<HTMLButtonElement>;
    return (
      <button
        className={classNames}
        disabled={disabled}
        onClick={onClick}
        style={{
          width: size,
          height: size,
          aspectRatio: "1/1",
          borderRadius: rounded,
        }}
        {...buttonRest}
      >
        <Inner aria-hidden="true" style={{ fontSize: fontSize }} />
      </button>
    );
  } else {
    const { ...spanRest } = rest as HTMLAttributes<HTMLSpanElement>;
    return (
      <span
        className={classNames}
        aria-hidden="true"
        style={{
          width: size,
          height: size,
          aspectRatio: "1/1",
          borderRadius: rounded,
        }}
        {...spanRest}
      >
        <Inner style={{ fontSize: fontSize }} />
      </span>
    );
  }
};

export default Icon;
