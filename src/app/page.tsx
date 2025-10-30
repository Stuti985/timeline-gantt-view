"use client";
import { TimelineView } from "../components/Timeline/TimelineView";
import { useTimelineStore } from "../stores/timelineStore";
import { useState } from "react";
import { TaskDetailSidebar } from "../components/Timeline/TaskDetailSidebar";

export default function Page() {
  const rows = useTimelineStore((s) => s.rows);
  const tasks = useTimelineStore((s) => s.tasks);
  const updateTask = useTimelineStore((s) => s.updateTask);
  const [selectedTask, setSelectedTask] = useState<string | null>(null);

  return (
    <>
      <header className="p-4 border-b bg-gray-50">
        <h1 className="text-xl font-semibold">Timeline / Gantt Demo</h1>
      </header>

      <div style={{ display: "flex" }}>
      <main className="p-4 flex-1">
        <TimelineView
          rows={rows}
          tasks={tasks}
          startDate={new Date(2024, 0, 1)}
          endDate={new Date(2024, 2, 31)}
          viewMode="week"
          onTaskUpdate={(id, u) => updateTask(id, u)}
        />
      </main>

      {selectedTask && (
        <aside
          aria-label="Task details"
          className="w-80 border-l p-4 bg-white shadow-md"
        >
          <TaskDetailSidebar
            task={tasks[selectedTask]}
            onClose={() => setSelectedTask(null)}
            onSave={(u) => {
              updateTask(selectedTask, u);
              setSelectedTask(null);
            }}
          />
        </aside>
      )}
      </div>

      <footer className="text-center text-sm text-gray-500 py-2">
      </footer>
    </>
  );
}
