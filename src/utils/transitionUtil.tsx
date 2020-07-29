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
    // Disable warnings for missing dependencies in useEffect
    // More details: https://github.com/facebook/create-react-app/issues/6880#issuecomment-485912528
    // eslint-disable-next-line
  }, []);
  return showContent;
};
