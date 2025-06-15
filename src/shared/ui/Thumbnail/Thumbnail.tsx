import styles from "./Thumbnail.module.css";
import { joinClassNames } from "../../../shared";

interface ThumbnailProps {
  className?: string;
  src: string;
  alt: string;
  width?: string | number;
  height?: string | number;
  aspectRatio?: string | number;
}

const Thumbnail = ({
  className,
  src,
  alt,
  width = "100%",
  height,
  aspectRatio = "2/1",
}: ThumbnailProps) => {
  const classNames = joinClassNames([styles["thumbnail"], className]);

  return (
    <img
      className={classNames}
      alt={alt}
      src={src}
      style={{ width, height, aspectRatio }}
    />
  );
};

export default Thumbnail;
