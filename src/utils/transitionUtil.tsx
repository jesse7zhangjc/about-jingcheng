import { useEffect, useState } from 'react';

/** Each animation should take 500ms */
export const animationDuration = 500;

/** Hook for animation */
export const useTransitionEffect = (timeout?: number) => {
  const [showContent, setShowContent] = useState(false);
  useEffect(() => {
    !showContent &&
      setTimeout(() => {
        setShowContent(true);
      }, timeout || 0);
  }, []);
  return showContent;
};
