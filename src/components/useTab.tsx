import { useState } from "react";

export interface Tab<T> {
  tab: string;
  content: T;
}

const useTab = (initialIndex: number, tabs: Tab<any>[]) => {
  if (initialIndex >= tabs.length) initialIndex = 0;
  const [currentIndex, setCurrentIndex] = useState(0);
  return {
    content: tabs[currentIndex].content,
    changeIndex: setCurrentIndex,
  };
};

export default useTab;
