
export const msPerDay = 1000 * 60 * 60 * 24;

export const calculateLeft = (date: Date, start: Date, pixelsPerDay: number) =>
  Math.round(((date.getTime() - start.getTime()) / msPerDay) * pixelsPerDay);

export const calculateWidth = (start: Date, end: Date, pixelsPerDay: number) =>
  Math.max(1, Math.round(((end.getTime() - start.getTime()) / msPerDay) * pixelsPerDay));

export const dateFromLeft = (left: number, start: Date, pixelsPerDay: number) => {
  const days = Math.round(left / pixelsPerDay);
  const d = new Date(start);
  d.setDate(start.getDate() + days);
  return d;
};
