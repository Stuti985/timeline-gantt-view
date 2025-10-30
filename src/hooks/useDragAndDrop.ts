
import { useRef } from 'react';

export const useDragAndDrop = () => {
  const dragging = useRef(false);
  const startX = useRef(0);
  const startLeft = useRef(0);

  const begin = (clientX: number, left: number) => {
    dragging.current = true;
    startX.current = clientX;
    startLeft.current = left;
  };

  const end = () => {
    dragging.current = false;
    startX.current = 0;
    startLeft.current = 0;
  };

  return { dragging, startX, startLeft, begin, end };
};
