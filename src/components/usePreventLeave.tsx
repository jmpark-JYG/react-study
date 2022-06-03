const usePreventLeave = () => {
  const listener = (event: Event) => {
    event.preventDefault();
    event.returnValue = true;
  };
  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  const disablePrevent = () => window.removeEventListener("beforeunload", listener);

  return { enablePrevent, disablePrevent };
};

export default usePreventLeave;
