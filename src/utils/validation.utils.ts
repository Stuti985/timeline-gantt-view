
import { TimelineTask } from '../types/timeline.types';

export const validateTask = (t: TimelineTask) => {
  if (!t.title) throw new Error('Task must have a title');
  if (t.endDate.getTime() < t.startDate.getTime()) throw new Error('End date cannot precede start date');
};

export const validateRange = (start: Date, end: Date) => start.getTime() <= end.getTime();
