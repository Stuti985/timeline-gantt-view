
import React from 'react';
import { generateScale } from '../../utils/date.utils';
import { calculateLeft } from '../../utils/position.utils';

export const TimelineGrid: React.FC<{ startDate: Date; endDate: Date; viewMode: 'day' | 'week' | 'month'; pixelsPerDay: number }> = ({
  startDate,
  endDate,
  viewMode,
  pixelsPerDay
}) => {
  const scale = generateScale(startDate, endDate, viewMode);
  return (
    <div style={{ position: 'relative' }}>
      {scale.map((s) => {
        const left = calculateLeft(s.date, startDate, pixelsPerDay);
        return (
          <div
            key={s.date.toISOString()}
            style={{
              position: 'absolute',
              left,
              top: 0,
              width: Math.max(1, pixelsPerDay),
              height: 48,
              borderRight: '1px solid #eef2f7',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <div className="text-xs text-neutral-700">{s.label}</div>
          </div>
        );
      })}
    </div>
  );
};
