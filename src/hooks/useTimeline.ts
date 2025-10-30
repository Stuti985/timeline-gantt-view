
import { useCallback, useState } from 'react';
import { ViewMode } from '../types/timeline.types';

export const useTimeline = (initialDate = new Date()) => {
  const [viewMode, setViewMode] = useState<ViewMode>('week');
  const [startDate, setStartDate] = useState<Date>(new Date(initialDate.getFullYear(), initialDate.getMonth() - 1, 1));
  const [endDate, setEndDate] = useState<Date>(new Date(initialDate.getFullYear(), initialDate.getMonth() + 2, 0));
  const pixelsPerDay = viewMode === 'day' ? 40 : viewMode === 'week' ? 20 : 10;

  const zoomIn = useCallback(() => setViewMode((v) => (v === 'month' ? 'week' : v === 'week' ? 'day' : v)), []);
  const zoomOut = useCallback(() => setViewMode((v) => (v === 'day' ? 'week' : v === 'week' ? 'month' : v)), []);
  const setRange = useCallback((s: Date, e: Date) => {
    setStartDate(s);
    setEndDate(e);
  }, []);

  return { viewMode, startDate, endDate, pixelsPerDay, zoomIn, zoomOut, setRange, setViewMode };
};
