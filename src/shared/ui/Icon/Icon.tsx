import styles from "./Icon.module.css";
import { joinClassNames } from "../../utils";
import type { ButtonHTMLAttributes, HTMLAttributes } from "react";

type BaseProps = {
  className?: string;
  disabled?: boolean;
};

type ButtonIconProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    onClick: () => void; // 명확히 button으로 처리할 조건
  };

type SpanIconProps = BaseProps &
  HTMLAttributes<HTMLSpanElement> & {
    onClick?: undefined; // span으로 처리할 조건
  };

export type IconProps = ButtonIconProps | SpanIconProps;

const Icon = ({ className, disabled = false, onClick }: IconProps) => {
  const classNames = joinClassNames([styles["icon"], className]);

  if (onClick) {
    return (
      <button className={classNames} disabled={disabled} onClick={onClick}>
        Icon
      </button>
    );
  }

  return (
    <span className={classNames} aria-hidden={true}>
      Icon
    </span>
  );
};

export default Icon;
