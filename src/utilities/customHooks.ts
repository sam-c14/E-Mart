import { useRef, useEffect } from "react";

const useOutsideClick = (callback: Function) => {
  const ref = useRef([]);

  useEffect(() => {
    const handleClick = (event: any) => {
      if (ref.current && ref.current !== event.target) {
        callback();
      }

      document.addEventListener("click", handleClick);
    };

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [ref]);

  return ref;
};

export { useOutsideClick };
