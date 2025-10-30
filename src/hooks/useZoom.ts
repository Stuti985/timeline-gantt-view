
import { useCallback } from 'react';

export const useZoom = (zoomIn: () => void, zoomOut: () => void) => {
  const handler = (e: KeyboardEvent) => {
    if (e.key === '+') zoomIn();
    if (e.key === '-') zoomOut();
  };
  const start = useCallback(() => window.addEventListener('keydown', handler), [zoomIn, zoomOut]);
  const stop = useCallback(() => window.removeEventListener('keydown', handler), [zoomIn, zoomOut]);
  return { start, stop };
};
