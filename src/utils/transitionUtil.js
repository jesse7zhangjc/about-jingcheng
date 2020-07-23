import { useEffect, useState } from "react";

/** Each animation should take 500ms */
export const animationDuration = 500;

/** For multiple steps of animation, set each interval to 500ms */
export const animationTimeOutInterval = 500;

/** Show sidebar menu items after push animation is completed */
export const sidebarShowContentTimeout = animationTimeOutInterval;

/** Hook for  */
export const useTransitionEffect = () => {
  const [showContent, setShowContent] = useState(false);
  useEffect(
    () => {
      !showContent && setTimeout(() => {
        setShowContent(true)
      }, animationDuration);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );
  return showContent;
};