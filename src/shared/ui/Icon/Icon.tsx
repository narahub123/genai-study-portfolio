import styles from "./Icon.module.css";
import {
  fontSizeMap,
  icons,
  joinClassNames,
  roundedMap,
  sizeMap,
  type FontSizeToken,
  type RoundedToken,
  type SizeToken,
} from "../../../shared";
import type { ButtonHTMLAttributes, HTMLAttributes } from "react";

interface BaseProps {
  className?: string;
  iconName: keyof typeof icons;
  size?: SizeToken;
  fontSize?: FontSizeToken;
  rounded?: RoundedToken;
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
  size = "md",
  fontSize = "md",
  rounded = "full",
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
          width: sizeMap[size],
          height: sizeMap[size],
          aspectRatio: "1/1",
          borderRadius: roundedMap[rounded],
        }}
        {...buttonRest}
      >
        <Inner aria-hidden="true" style={{ fontSize: fontSizeMap[fontSize] }} />
      </button>
    );
  } else {
    const { ...spanRest } = rest as HTMLAttributes<HTMLSpanElement>;
    return (
      <span
        className={classNames}
        aria-hidden="true"
        style={{
          width: sizeMap[size],
          height: sizeMap[size],
          aspectRatio: "1/1",
          borderRadius: roundedMap[rounded],
        }}
        {...spanRest}
      >
        <Inner style={{ fontSize: fontSizeMap[fontSize] }} />
      </span>
    );
  }
};

export default Icon;
