
import React from 'react';
import { TimelineRow as RowType } from '../../types/timeline.types';

 const TimelineRow: React.FC<{ row: RowType; height: number }> = ({ row, height }) => {
  return (
    <div
      role="region"
      tabIndex={0} 
      aria-label={`${row.label} timeline. ${row.tasks.length} tasks.`}
      style={{
        height,
        display: "flex",
        alignItems: "center",
        paddingLeft: 12,
        borderBottom: "1px solid #e5e7eb", 
        backgroundColor: "#ffffff",
        color: "#111827", 
      }}
      className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
    >
      <div className="text-sm font-medium text-gray-900">{row.label}</div>
    </div>
  );
};
export const TimelineRowView = React.memo(TimelineRow);
