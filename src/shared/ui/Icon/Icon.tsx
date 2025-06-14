import styles from "./Icon.module.css";
import tokens from "../../styles/tokens.module.css";

import {
  fontSizeMap,
  icons,
  joinClassNames,
  roundedMap,
  sizeMap,
  type ColorToken,
  type FontSizeToken,
  type RoundedToken,
  type SizeToken,
} from "../../../shared";
import {
  forwardRef,
  type ButtonHTMLAttributes,
  type HTMLAttributes,
  type Ref,
} from "react";

interface BaseProps {
  className?: string;
  iconName: keyof typeof icons;
  size?: SizeToken;
  fontSize?: FontSizeToken;
  rounded?: RoundedToken;
  color?: ColorToken;
}

type ButtonIconProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    onClick: (...args: any[]) => any;
    disabled?: boolean;
    title: string;
    type?: "button" | "submit" | "reset";
  };

type SpanIconProps = BaseProps &
  HTMLAttributes<HTMLSpanElement> & {
    onClick?: undefined;
    title?: undefined;
  };

type IconProps = ButtonIconProps | SpanIconProps;

// 공통의 요소만 올 수 있음
const Icon = forwardRef<HTMLButtonElement | HTMLSpanElement, IconProps>(
  (
    {
      className,
      onClick,
      iconName,
      size = "md",
      fontSize = "md",
      rounded = "full",
      color = "black",
      title,
      ...rest
    },
    ref
  ) => {
    const classNames = joinClassNames([
      styles["icon"],
      tokens[color],
      className,
    ]);

    const Inner = icons[iconName];

    if (typeof onClick === "function") {
      const {
        disabled = false,
        type = "button",
        ...buttonRest
      } = rest as ButtonHTMLAttributes<HTMLButtonElement>;
      return (
        <button
          className={classNames}
          type={type}
          disabled={disabled}
          onClick={onClick}
          style={{
            width: sizeMap[size],
            height: sizeMap[size],
            aspectRatio: "1/1",
            borderRadius: roundedMap[rounded],
          }}
          data-title={title}
          aria-label={title}
          ref={ref as Ref<HTMLButtonElement>}
          {...buttonRest}
        >
          <Inner
            aria-hidden="true"
            style={{ fontSize: fontSizeMap[fontSize] }}
          />
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
          ref={ref as Ref<HTMLSpanElement>}
          {...spanRest}
        >
          <Inner style={{ fontSize: fontSizeMap[fontSize] }} />
        </span>
      );
    }
  }
);

export default Icon;
