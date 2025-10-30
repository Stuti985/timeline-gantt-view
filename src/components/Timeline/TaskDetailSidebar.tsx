
import React from 'react';
import { TimelineTask } from '../../types/timeline.types';
import { format } from 'date-fns';
import { Slider } from '../../primitives/Slider';
import { motion } from 'framer-motion';

export const TaskDetailSidebar: React.FC<{
  task: TimelineTask;
  onClose: () => void;
  onSave: (u: Partial<TimelineTask>) => void;
}> = ({ task, onClose, onSave }) => {
  const [title, setTitle] = React.useState(task.title);
  const [progress, setProgress] = React.useState(task.progress);

  const handleSave = () => {
    onSave({ title, progress });
  };

  return (
    <motion.div
    aria-labelledby="task-details-title"
      role="dialog" 
      aria-modal="true"
      initial={{ x: 300 }}
      animate={{ x: 0 }}
      exit={{ x: 300 }}
      transition={{ type: 'spring' }}
      className="w-80 p-4 bg-white shadow-lg h-full overflow-y-auto border-l" >
        
      <header className="flex justify-between items-center mb-3">
        <h3 id="task-details-title" className="text-lg font-semibold">
          Task Details
        </h3>
        <button
          onClick={onClose}
          aria-label="Close Sidebar"
          className="text-sm text-gray-600 hover:text-black"
        >
          ✕
        </button>
      </header>

      <div>
        <label htmlFor="task-title" className="block text-sm font-medium mb-1">
          Title
        </label>
        <input
          id="task-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded px-2 py-1 mb-3"
        />

        <div className="text-sm text-neutral-600 mb-2">
          {format(task.startDate, 'MMM d, yyyy')} — {format(task.endDate, 'MMM d, yyyy')}
        </div>

        <label htmlFor="task-progress" className="block text-sm font-medium mb-1">
          Progress: {progress}%
        </label>
        <Slider value={progress} onChange={setProgress} />

        <div className="flex gap-2 mt-4">
          <button
            onClick={handleSave}
            className="px-3 py-1 bg-primary-500 text-white rounded hover:bg-primary-600"
          >
            Save
          </button>
          <button
            onClick={onClose}
            className="px-3 py-1 border rounded hover:bg-gray-100"
          >
            Cancel
          </button>
        </div>
      </div>
    </motion.div>
  );
};
export default TaskDetailSidebar;