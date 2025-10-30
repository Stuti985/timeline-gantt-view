
import React from 'react';

export const Slider: React.FC<{ value: number; onChange: (v: number) => void }> = ({ value, onChange }) => (
  <input type="range" min={0} max={100} value={value} onChange={(e) => onChange(Number(e.target.value))} className="w-full" />
);
