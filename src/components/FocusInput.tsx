import { useRef } from "react";

const FocusInput = () => {
  const inputEl = useRef<HTMLInputElement>(null);
  setTimeout(() => inputEl?.current?.focus(), 5000);

  return <input ref={inputEl} type="text" placeholder="focus" />;
};

export default FocusInput;
