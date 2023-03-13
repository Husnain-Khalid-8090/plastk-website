import * as React from 'react';

export const useIsInViewport = (ref, threshold = 0) => {
  const [isIntersecting, setIsIntersecting] = React.useState(false);

  let observer = null;

  React.useEffect(() => {
    observer = new IntersectionObserver(([entry]) => setIsIntersecting(entry.isIntersecting), { threshold });
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
};
