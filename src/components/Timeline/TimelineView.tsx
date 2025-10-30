"use client";
import React, {
  useMemo,
  useRef,
  useState,
  useEffect,
  Suspense,
  lazy,
  useCallback,
} from "react";
import { TimelineViewProps } from "../../types/timeline.types";
import { calculateLeft, calculateWidth } from "../../utils/position.utils";
import { TimelineGrid } from "../Timeline/TimelineGrid";
import { DependencyLine } from "../Timeline/DependencyLine";
import { Taskbar } from "../Timeline/TaskBar";
import throttle from "lodash.throttle";

const TaskDetailSidebar = lazy(() =>
  import("../Timeline/TaskDetailSidebar").then((m) => ({
    default: m.default,
  }))
);

const LEFT_PANEL_WIDTH = 220;
const ROW_HEIGHT = 64;

export const TimelineView = React.memo(function TimelineView({
  rows,
  tasks,
  startDate,
  endDate,
  viewMode,
  onTaskUpdate,
}: TimelineViewProps) {
  const pixelsPerDay =
    viewMode === "day" ? 40 : viewMode === "week" ? 20 : 10;

  const start = startDate instanceof Date ? startDate : new Date(startDate);
  const end = endDate instanceof Date ? endDate : new Date(endDate);
  const totalDays = (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24);
  const timelineWidth = Math.max(800, totalDays * pixelsPerDay + 200);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [selectedTask, setSelectedTask] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleWheel = throttle((e: WheelEvent) => {
      if (e.ctrlKey) {
        e.preventDefault();
        setZoom((z) => Math.min(2, Math.max(0.5, z - e.deltaY * 0.001)));
      } else {
        el.scrollBy({ left: e.deltaY, behavior: "smooth" });
      }
    }, 16); 

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, []);

  const positions = useMemo(() => {
    const map = new Map<string, { left: number; width: number; top: number }>();
    (rows || []).forEach((row, ri) => {
      (row.tasks || []).forEach((tid) => {
        const t = tasks[tid];
        if (!t) return;
        const left = calculateLeft(
          new Date(t.startDate),
          new Date(startDate),
          pixelsPerDay
        );
        const width = calculateWidth(
          new Date(t.startDate),
          new Date(t.endDate),
          pixelsPerDay
        );
        const top = ri * ROW_HEIGHT + 12;
        map.set(tid, { left, width, top });
      });
    });
    return map;
  }, [rows, tasks, startDate, pixelsPerDay]);

  const depPaths = useMemo(() => {
    const arr: JSX.Element[] = [];
    Object.values(tasks).forEach((t) => {
      t.dependencies?.forEach((depId) => {
        const from = positions.get(depId);
        const to = positions.get(t.id);
        if (!from || !to) return;
        const x1 = from.left + from.width + LEFT_PANEL_WIDTH;
        const y1 = from.top + 48;
        const x2 = to.left + LEFT_PANEL_WIDTH;
        const y2 = to.top + 48;
        arr.push(
          <DependencyLine
            key={`${depId}-${t.id}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
          />
        );
      });
    });
    return arr;
  }, [tasks, positions]);

  const commitPosition = useCallback(
    (taskId: string, left: number, width: number): void => {
      const days = Math.round(left / (pixelsPerDay * zoom));
      const newStart = new Date(startDate);
      newStart.setDate(newStart.getDate() + days);
      const durDays = Math.max(1, Math.round(width / (pixelsPerDay * zoom)));
      const newEnd = new Date(newStart);
      newEnd.setDate(newEnd.getDate() + durDays);
      onTaskUpdate(taskId, { startDate: newStart, endDate: newEnd });
    },
    [onTaskUpdate, startDate, pixelsPerDay, zoom]
  );

  return (
    <>
      <section
        className="relative border rounded bg-white"
        role="region"
        aria-label="Project Timeline section"
        style={{
          minHeight: rows.length * ROW_HEIGHT + 80,
        }}
      >
        <div style={{ display: "flex" }}>
          <nav
          aria-label="Resource list panel"
            style={{
              width: LEFT_PANEL_WIDTH,
              borderRight: "1px solid #e6edf3",
              background: "#f9fafb",
              position: "sticky",
              left: 0,
              zIndex: 6,
            }}
         >
            <header
              style={{
                height: 48,
                display: "flex",
                alignItems: "center",
                paddingLeft: 12,
              }}
            >
              <h2
                className="text-sm font-semibold"
                style={{ color: "#1e293b" }} 
              >
                Resources
              </h2>
            </header>

            <ul
              style={{ margin: 0, padding: 0, listStyle: "none" }}
              role="list"
              aria-label="Resource rows"
            >
              {rows.map((r) => (
                <li
                  key={r.id}
                  style={{
                    height: ROW_HEIGHT,
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: 12,
                    borderBottom: "1px solid #f3f4f6",
                    backgroundColor: "#ffffff",
                  }}
                >
                    <span className="text-xs font-medium"
                    style={{ color: "#0f172a" }} 
                    >
                      {r.label}
                      </span>
                </li>
              ))}
            </ul>
          </nav>

          <section
            ref={containerRef}
            role="region"
            aria-label="Scrollable project timeline area"
            tabIndex={0}
            className="bg-white"
            style={{
              overflowX: "auto",
              width: "100%",
              outline: "none",
              background: "#ffffff",
            }}
          >
            <div style={{ position: "relative", width: timelineWidth }}>
              <div
                style={{
                  position: "sticky",
                  top: 0,
                  zIndex: 5,
                  background: "#fff",
                  marginLeft: LEFT_PANEL_WIDTH,
                  height: 48,
                }}
                role="region"
                aria-label="Timeline header grid"
                >
                  <TimelineGrid
                    startDate={startDate}
                    endDate={endDate}
                    viewMode={viewMode}
                    pixelsPerDay={pixelsPerDay * zoom}
                  />
                  <div
                    style={{
                      position: "absolute",
                      left: calculateLeft(
                        new Date(),
                        startDate,
                        pixelsPerDay * zoom
                      ),
                      top: 0,
                      bottom: 0,
                      width: 2,
                    background: "#ef4444",
                    }}
                    aria-hidden="true"
                  />
                </div>

              <div style={{ position: "relative" }}>
                <svg
                  style={{
                    position: "absolute",
                    left: LEFT_PANEL_WIDTH,
                    top: 48,
                    width: timelineWidth * zoom,
                    height: rows.length * ROW_HEIGHT,
                  }}
                  aria-hidden="true"
                >
                  <defs>
                    <marker
                      id="arrowhead"
                      markerWidth="10"
                      markerHeight="10"
                      refX="9"
                      refY="3"
                      orient="auto"
                    >
                      <polygon points="0 0, 10 3, 0 6" fill="#94a3b8" />
                    </marker>
                  </defs>
                  <g>{depPaths}</g>
                </svg>

                <div
                  style={{
                    marginLeft: LEFT_PANEL_WIDTH,
                    paddingTop: 48,
                  }}
                  role="list"
                  aria-label="Timeline task rows"
                >
                  {rows.map((row) => (
                    <div
                      key={row.id}
                      style={{
                        height: ROW_HEIGHT,
                        position: "relative",
                        borderBottom: "1px solid #f3f4f6",
                        backgroundColor: "#ffffff",
                      }}
                    >
                      {row.tasks.map((tid) => {
                        const t = tasks[tid];
                        if (!t) return null;
                        const pos = positions.get(tid)!;
                        return (
                          <Taskbar
                            key={t.id}
                            task={t}
                            left={pos.left}
                            width={pos.width}
                            top={pos.top}
                            onOpen={() => setSelectedTask(t.id)}
                            onCommit={(id, l, w) =>
                              commitPosition(id, l, w)
                            }
                            pixelsPerDay={pixelsPerDay * zoom}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            </section>
          </div>
          </section>

      {selectedTask && tasks[selectedTask] && (
        <Suspense fallback={<div>Loading task details...</div>}>
          <aside
            role="complementary"
            aria-label={`Task details sidebar for ${tasks[selectedTask].title || tasks[selectedTask].id}`}
            className="fixed right-0 top-0 h-full w-[360px] bg-white shadow-lg z-10 border-l"
          >
            <TaskDetailSidebar
              task={tasks[selectedTask]}
              onClose={() => setSelectedTask(null)}
              onSave={(u) => {
                onTaskUpdate(selectedTask, u);
                setSelectedTask(null);
              }}
            />
          </aside>
        </Suspense>
      )}
    </>
  );
  });