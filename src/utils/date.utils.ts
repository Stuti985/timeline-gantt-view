
import { format, addDays, addWeeks, addMonths, isSameDay } from 'date-fns';
import { TIMELINE_CONSTANTS } from '../constants/timeline.constants';

// export const daysBetween = (a: Date, b: Date) =>
//   Math.round((b.getTime() - a.getTime()) / (1000 * 60 * 60 * 24));
 export const daysBetween = (a?: Date | string, b?: Date | string): number => {
  if (!a || !b) return 0;
  const start = a instanceof Date ? a : new Date(a);
  const end = b instanceof Date ? b : new Date(b);
  if (isNaN(start.getTime()) || isNaN(end.getTime())) return 0;
  return Math.round((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
};

export const addByView = (date: Date, view: 'day' | 'week' | 'month') => {
  if (view === 'day') return addDays(date, 1);
  if (view === 'week') return addWeeks(date, 1);
  return addMonths(date, 1);
};

export const generateScale = (start: Date, end: Date, view: 'day' | 'week' | 'month') => {
  const arr: { date: Date; label: string }[] = [];
  let cur = new Date(start);
  while (cur <= end) {
    arr.push({
      date: new Date(cur),
      label: format(cur, TIMELINE_CONSTANTS.DATE_FORMATS[view as keyof typeof TIMELINE_CONSTANTS.DATE_FORMATS])
    });
    cur = addByView(cur, view);
  }
  return arr;
};

export const isToday = (d: Date) => isSameDay(d, new Date());

export const calculateLeft = (
  taskStart?: Date | string,
  chartStart?: Date | string,
  pixelsPerDay = 10
): number => {
  if (!taskStart || !chartStart) return 0;

  const start = taskStart instanceof Date ? taskStart : new Date(taskStart);
  const chart = chartStart instanceof Date ? chartStart : new Date(chartStart);

  if (isNaN(start.getTime()) || isNaN(chart.getTime())) return 0;

  const diffInMs = start.getTime() - chart.getTime();
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
  return diffInDays * pixelsPerDay;
};

export const calculateWidth = (
  start?: Date | string,
  end?: Date | string,
  pixelsPerDay = 10
): number => {
  if (!start || !end) return 0;

  const s = start instanceof Date ? start : new Date(start);
  const e = end instanceof Date ? end : new Date(end);

  if (isNaN(s.getTime()) || isNaN(e.getTime())) return 0;

  const diffInMs = e.getTime() - s.getTime();
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
  return Math.max(diffInDays * pixelsPerDay, 0);
};
