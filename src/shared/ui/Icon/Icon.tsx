import styles from "./Icon.module.css";
import { joinClassNames } from "../../../shared";
import type { ButtonHTMLAttributes, HTMLAttributes } from "react";

interface BaseProps {
  className?: string;
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
const Icon = ({ className, onClick, ...rest }: IconProps) => {
  const classNames = joinClassNames([styles["icon"], className]);

  if (typeof onClick === "function") {
    const { disabled = false, ...buttonRest } =
      rest as ButtonHTMLAttributes<HTMLButtonElement>;
    return (
      <button
        className={classNames}
        disabled={disabled}
        onClick={onClick}
        {...buttonRest}
      >
        icon
      </button>
    );
  } else {
    const { ...spanRest } = rest as HTMLAttributes<HTMLSpanElement>;
    return (
      <span className={classNames} aria-hidden={true} {...spanRest}>
        Icon
      </span>
    );
  }
};

export default Icon;
