
import { useRef } from 'react';

export const useScrollSync = () => {
  const leftRef = useRef<HTMLElement | null>(null);
  const rightRef = useRef<HTMLElement | null>(null);

  const sync = () => {
    if (leftRef.current && rightRef.current) {
      rightRef.current.scrollLeft = leftRef.current.scrollLeft;
    }
  };

  return { leftRef, rightRef, sync };
};
