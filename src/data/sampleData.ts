
import { TimelineRow, TimelineTask } from '../types/timeline.types';

export const sampleRows: TimelineRow[] = [
  { id: 'row-1', label: 'Frontend Team', avatar: '', tasks: ['task-1', 'task-2'] },
  { id: 'row-2', label: 'Backend Team', avatar: '', tasks: ['task-3'] },
  { id: 'row-3', label: 'Design Team', avatar: '', tasks: ['task-4'] }
];

export const sampleTasks: Record<string, TimelineTask> = {
  'task-1': {
    id: 'task-1',
    title: 'UI Component Development',
    startDate: new Date(2024, 0, 1),
    endDate: new Date(2024, 0, 15),
    progress: 60,
    assignee: 'Alice',
    rowId: 'row-1',
    dependencies: [],
    color: '#3b82f6',
    isMilestone: false
  },
  'task-2': {
    id: 'task-2',
    title: 'Integration Testing',
    startDate: new Date(2024, 0, 16),
    endDate: new Date(2024, 0, 25),
    progress: 0,
    assignee: 'Bob',
    rowId: 'row-1',
    dependencies: ['task-1', 'task-3'],
    color: '#3b82f6',
    isMilestone: false
  },
  'task-3': {
    id: 'task-3',
    title: 'API Development',
    startDate: new Date(2024, 0, 1),
    endDate: new Date(2024, 0, 14),
    progress: 80,
    assignee: 'Charlie',
    rowId: 'row-2',
    dependencies: [],
    color: '#10b981',
    isMilestone: false
  },
  'task-4': {
    id: 'task-4',
    title: 'Design System Update',
    startDate: new Date(2024, 0, 5),
    endDate: new Date(2024, 0, 12),
    progress: 100,
    assignee: 'Dana',
    rowId: 'row-3',
    dependencies: [],
    color: '#f59e0b',
    isMilestone: false
  }
};
