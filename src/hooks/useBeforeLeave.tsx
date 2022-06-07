import { useEffect } from "react";

const useBeforeLeave = (onBefore: Function) => {
  const handle = (event: MouseEvent) => {
    const { clientY = 0 } = event;
    if (clientY <= 0) onBefore();
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};

export default useBeforeLeave;
