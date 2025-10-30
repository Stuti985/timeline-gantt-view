
import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TimelineView } from '../components/Timeline/TimelineView';
import type { TimelineViewProps } from '../types/timeline.types';
import { TimelineTask } from '../types/timeline.types';
import { sampleRows, sampleTasks } from '../data/sampleData';


const meta: Meta<typeof TimelineView> = { 
  title: 'Components/Timeline/TimelineView', 
  component: TimelineView,
     parameters: {
    layout: "fullscreen",
     },
  argTypes: {
    viewMode: {
      control: { type: 'radio' },
      options: ['day', 'week', 'month'],
    },
    startDate: { control: 'date' },
    endDate: { control: 'date' },
    rows: { control: 'object' },
    tasks: { control: 'object' },
  },
};
export default meta;
type Story = StoryObj<typeof TimelineView>;

export const Default: Story = {
  args: {
    rows: sampleRows,
    tasks: sampleTasks,
    startDate: new Date('2025-01-01'),
    endDate: new Date('2025-01-31'),
    viewMode: 'week',
    onTaskUpdate: () => {}
  }
};

export const Empty: Story = {
  args: {
    rows: [],
    tasks: {},
    startDate: new Date('2025-01-01'),
    endDate: new Date('2025-01-31'),
    viewMode: 'week',
    onTaskUpdate: () => {}
  }
};

// export const WithDependencies: Story = {
//   args: Default.args
// };

export const WithDependencies: Story = {
  args: {
    ...Default.args,
    tasks: {
      t1: { id: 't1', rowId: 'r1', title: 'Task A', startDate: new Date('2025-01-02'), endDate: new Date('2025-01-06'), progress: 40 },
      t2: { id: 't2', rowId: 'r2', title: 'Task B', startDate: new Date('2025-01-07'), endDate: new Date('2025-01-10'), progress: 20, dependencies: ['t1'] },
    },
    rows: [
      { id: 'r1', label: 'Development', tasks: ['t1'] },
      { id: 'r2', label: 'Testing', tasks: ['t2'] },
    ],
  },
};

export const ViewModes: Story = {
  render: () => {
    const [mode, setMode] = useState<'day' | 'week' | 'month'>('week');
    return (
        <div className="p-4">
           <nav aria-label="View mode selector" className="mb-2 flex gap-2">

          <button onClick={() => setMode('day')} className="bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100">Day</button>
          <button onClick={() => setMode('week')} className="bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100">Week</button>
          <button onClick={() => setMode('month')} className="bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100">Month</button>
          </nav>

        <main>
        <TimelineView
         viewMode={mode}
         rows={sampleRows}
         tasks={sampleTasks}
         startDate={new Date('2025-01-01')}
         endDate={new Date('2025-01-31')}
         onTaskUpdate={() => {}}
          />
          </main>
      </div>
    );
  },
  args: {
    rows: sampleRows,
    tasks: sampleTasks,
    startDate: new Date('2025-01-01'),
    endDate: new Date('2025-01-31'),
    onTaskUpdate: () => {},
  }
};

export const Interactive: Story = {
  render: (args: TimelineViewProps) => {

    const [tasks, setTasks] = useState<Record<string, TimelineTask>>(sampleTasks);
    const handleUpdate = (taskId: string, updates: Partial<TimelineTask>) => {
      setTasks(prev =>
        ({...prev, 
         [taskId]: { ...prev[taskId], ...updates }
    }));
    };

    return <TimelineView {...args} tasks={tasks} onTaskUpdate={handleUpdate} />;
  },
  args: Default.args
};

export const MobileView: Story = {
  render: (args: TimelineViewProps) => <div style={{ width: 390 }}><TimelineView {...args} /></div>,
  args: Default.args
};

export const Accessibility: Story = {
  render: (args: TimelineViewProps) => <TimelineView {...args} />,
  args: Default.args,
  parameters: {
    a11y: {
      config: {
        rules: [{ id: 'color-contrast', enabled: true }],
      },
    },
  },
};

export const AccessibilityKeyboardDemo: Story = {
  render: (args: TimelineViewProps) => {
    return (
      <div>
        <p className="bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100">
          Use <kbd>Tab</kbd> to move between tasks and <kbd>Enter</kbd> to open task details.
        </p>
        <TimelineView {...args} />
      </div>
    );
  },
  args: Default.args,
};

export const PerformanceTest: Story = {
  args: {
    ...Default.args,
    tasks: Object.fromEntries(
      Array.from({ length: 150 }).map((_, i) => [
        `task-${i}`,
        {
          id: `task-${i}`,
          rowId: `r${(i % 10) + 1}`,
          title: `Task ${i}`,
          startDate: new Date(2025, 0, (i % 25) + 1),
          endDate: new Date(2025, 0, (i % 25) + 4),
          progress: Math.floor(Math.random() * 100),
        },
      ])
    ),
  },
};

export const OverlappingTasks: Story = {
  args: {
    rows: [
      { id: 'r1', label: 'Development', tasks: ['t1', 't2'] },
      { id: 'r2', label: 'Testing', tasks: ['t3'] },
    ],
    tasks: {
      t1: {
        id: 't1',
        rowId: 'r1',
        title: 'Backend API',
        startDate: new Date('2025-10-01'),
        endDate: new Date('2025-10-07'),
        progress: 70,
      },
      t2: {
        id: 't2',
        rowId: 'r1',
        title: 'Frontend UI',
        startDate: new Date('2025-10-05'),
        endDate: new Date('2025-10-10'),
        progress: 50,
      },
      t3: {
        id: 't3',
        rowId: 'r2',
        title: 'Integration Test',
        startDate: new Date('2025-10-08'),
        endDate: new Date('2025-10-15'),
        progress: 20,
      },
    },
    startDate: new Date('2025-10-01'),
    endDate: new Date('2025-10-20'),
    viewMode: 'day',
    onTaskUpdate: () => {},
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates overlapping tasks on the same timeline row to show resource conflicts or concurrent work.',
      },
    },
  },
};

export const CustomColorTasks: Story = {
  args: {
    rows: [{ id: 'r1', label: 'Design Team', tasks: ['t1', 't2'] }],
    tasks: {
      t1: {
        id: 't1',
        rowId: 'r1',
        title: 'UI Design',
        startDate: new Date('2025-10-02'),
        endDate: new Date('2025-10-05'),
        progress: 90,
        color: '#e63946',
      },
      t2: {
        id: 't2',
        rowId: 'r1',
        title: 'UX Review',
        startDate: new Date('2025-10-06'),
        endDate: new Date('2025-10-09'),
        progress: 60,
        color: '#2a9d8f',
      },
    },
    startDate: new Date('2025-10-01'),
    endDate: new Date('2025-10-15'),
    viewMode: 'day',
    onTaskUpdate: () => {},
  },
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates custom task colors based on priority, type, or progress. Useful for visual differentiation.',
      },
    },
  },
};

export const DarkMode: Story = {
  args: Default.args,
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        story: "Shows the timeline in dark mode for accessibility and theming consistency."
      }
    }
  }
};

export const HighContrastExample: Story = {
  render: () => (
    <section className="bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100" aria-label="High Contrast Example Section">
    {/* <div className="bg-white p-4"> */}
      <p className="bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100">High Contrast Text Example</p>
    </section>
  ),
  // parameters: {
  //   a11y: {
  //     config: {
  //       rules: [{ id: 'color-contrast', enabled: true }],
  //     },
  //   },
};
