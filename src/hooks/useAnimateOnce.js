import * as React from 'react';

export const useAnimateOnce = ({ isAnimating, setIsAnimating, timeout }) => {
  React.useEffect(() => {
    let timer;
    if (isAnimating) {
      timer = setTimeout(() => {
        setIsAnimating(false);
      }, timeout);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [isAnimating, setIsAnimating, timeout]);
};
