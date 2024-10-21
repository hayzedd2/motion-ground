import { useEffect, useRef, RefObject, MutableRefObject } from "react";

type UseOutsideClickRef<T> = RefObject<T> | MutableRefObject<T | null>;

function useOutsideClick<T extends HTMLElement = HTMLElement>(
  callback: () => void
): UseOutsideClickRef<T> {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent | TouchEvent) => {
      if (ref.current == null) {
        return;
      }
      if (!(event.target instanceof Node)) {
        return;
      }

      if (!ref.current.contains(event.target)) {
        callback();
      }
    };
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("touchstart", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("touchstart", handleClick);
    };
  }, [callback]);

  return ref;
}

export default useOutsideClick;
