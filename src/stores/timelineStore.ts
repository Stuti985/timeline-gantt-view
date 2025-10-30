
import {create } from 'zustand';
import { TimelineRow, TimelineTask } from '../types/timeline.types';
import { sampleRows, sampleTasks } from '../data/sampleData';

interface TimelineState {
  rows: TimelineRow[];
  tasks: Record<string, TimelineTask>;
  setRows: (rows: TimelineRow[]) => void;
  setTasks: (tasks: Record<string, TimelineTask>) => void;
  updateTask: (taskId: string, updates: Partial<TimelineTask>) => void;
}

export const useTimelineStore = create<TimelineState>((set) => ({
  rows: sampleRows,
  tasks: sampleTasks,
  setRows: (rows) => set({ rows }),
  setTasks: (tasks) => set({ tasks }),
  updateTask: (taskId, updates) => set((s) => ({ tasks: { ...s.tasks, [taskId]: { ...s.tasks[taskId], ...updates } } }))
}));
