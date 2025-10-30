
import { format } from 'date-fns';

export const formatDate = (d?: Date | null, pattern = 'dd MMM yyyy') => (d ? format(d, pattern) : '');

export const formatDuration = (start: Date, end: Date) =>
  `${Math.round((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))} days`;
