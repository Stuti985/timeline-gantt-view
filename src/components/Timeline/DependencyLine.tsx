
import React from 'react';

export const DependencyLine: React.FC<{ x1: number; y1: number; x2: number; y2: number }> = ({ x1, y1, x2, y2 }) => {
  const cx1 = x1 + 24;
  const cx2 = x2 - 24;
  return <path d={`M ${x1} ${y1} C ${cx1} ${y1} ${cx2} ${y2} ${x2} ${y2}`} stroke="#94a3b8" strokeWidth={2} fill="none" markerEnd="url(#arrowhead)" />;
};
