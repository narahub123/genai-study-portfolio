import { useEffect, useRef, type ReactNode } from "react";
import { focusableSelectors } from "../../data";

interface FocusTrapProps {
  children: ReactNode;
}

const FocusTrap = ({ children }: FocusTrapProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const focusableElems = container.querySelectorAll<HTMLElement>(
      focusableSelectors.join(",")
    );

    const firstElem = focusableElems[0];
    const lastElem = focusableElems[focusableElems.length - 1];

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        if (document.activeElement === firstElem) {
          e.preventDefault();
          lastElem.focus();
        }
      } else {
        if (document.activeElement === lastElem) {
          e.preventDefault();
          firstElem.focus();
        }
      }
    };

    container.addEventListener("keydown", handleKeyDown);

    return () => {
      container.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return <div ref={containerRef}>{children}</div>;
};

export default FocusTrap;
