// useAnimateOnScroll.js
import { useEffect, useRef, useState } from 'react';

const useAnimateOnScroll = (threshold = 0.1) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
          entry.target.classList.add('animate');
          setHasAnimated(true);
        }
      });
    }, { threshold });

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [hasAnimated, threshold]);

  return ref;
};

export default useAnimateOnScroll;