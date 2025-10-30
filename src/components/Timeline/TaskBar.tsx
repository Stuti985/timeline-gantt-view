"use client";

import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import { TimelineTask } from '../../types/timeline.types';
import { format } from 'date-fns';
import { motion } from 'framer-motion';

interface Props {
  task: TimelineTask;
  left: number;
  width: number;
  top: number;
  onOpen: (id: string) => void;
  pixelsPerDay?: number;
  onCommit?: (id: string, left: number, width: number) => void;
}

const getTextColor = (bgColor: string): string => {
  const c = bgColor.startsWith('#') ? bgColor.slice(1) : bgColor;
  if (c.length !== 6) return '#fff'; 
  const rgb = parseInt(c, 16);
  const r = (rgb >> 16) & 0xff;
  const g = (rgb >> 8) & 0xff;
  const b = rgb & 0xff;
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 150 ? '#000' : '#fff'; 
};

const TaskBar: React.FC<Props> = ({ task, left, width, top, onOpen, pixelsPerDay = 20, onCommit }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [localLeft, setLocalLeft] = useState(left);
  const [localWidth, setLocalWidth] = useState(width);
  const [dragging, setDragging] = useState(false);
  const [resizing, setResizing] = useState<'left' | 'right' | null>(null);
  const pointerIdRef = useRef<number | null>(null);

  useEffect(() => {
    setLocalLeft(left);
    setLocalWidth(width);
  }, [left, width]);

    const onMove = useCallback((e: PointerEvent) => {
      if (!dragging && !resizing) return;
      if (dragging) setLocalLeft((l) => Math.max(0, l + e.movementX));
      if (resizing === 'left') {
        setLocalLeft((l) => Math.max(0, l + e.movementX));
        setLocalWidth((w) => Math.max(10, w - e.movementX));
      }
      if (resizing === 'right') setLocalWidth((w) => Math.max(10, w + e.movementX));
    }, [dragging, resizing]);

    const onUp = useCallback(() => {
      if (dragging || resizing) {
        onCommit?.(task.id, localLeft, localWidth);
      }
      setDragging(false);
      setResizing(null);
      if (pointerIdRef.current !== null) {
        try {
          ref.current?.releasePointerCapture(pointerIdRef.current);
        } catch {}
        pointerIdRef.current = null;
      }
      }, [dragging, resizing, localLeft, localWidth, onCommit, task.id]);

     useEffect(() => {
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
    };
  }, [onMove, onUp]);

  const onPointerDown = useCallback((e: React.PointerEvent, handle?: 'left' | 'right') => {
    (e.target as Element).setPointerCapture?.(e.pointerId);
    pointerIdRef.current = e.pointerId;
    if (handle === 'left') setResizing('left');
    else if (handle === 'right') setResizing('right');
    else setDragging(true);
  }, []);

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      switch (e.key) {
        case "Enter":
        case " ":
          onOpen(task.id);
          e.preventDefault();
          break;
        case "ArrowLeft":
          setLocalLeft((l) => Math.max(0, l - pixelsPerDay));
          break;
        case "ArrowRight":
          setLocalLeft((l) => l + pixelsPerDay);
          break;
        case "Escape":
          setDragging(false);
          setResizing(null);
          break;
        default:
          break;
      }
    }, [onOpen, task.id, pixelsPerDay]);

  const ariaLabel = useMemo(
    () => `${task.title}. From ${format(task.startDate, 'MMM d, yyyy')} to ${format(task.endDate, 'MMM d, yyyy')}. Progress: ${task.progress}%. Press Enter to edit.`,
    [task]
  );

  const bgColor = task.color || '#0ea5e9';
  const textColor = getTextColor(bgColor);

  return (
    <motion.div
      ref={ref}
      role="button"
      tabIndex={0}
      aria-label={ariaLabel}
      aria-describedby={`task-${task.id}-details`}
      onKeyDown={onKeyDown}
      onDoubleClick={() => onOpen(task.id)}
      onPointerDown={(e) => onPointerDown(e)}
      style={{
        position: 'absolute',
        left: localLeft,
        top,
        width: localWidth,
        height: task.isMilestone ? 24 : 32,
        backgroundColor: bgColor,
        borderRadius: 6,
        color: textColor,
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        boxShadow: dragging ? '0 8px 20px rgba(0,0,0,0.15)' : '0 2px 6px rgba(0,0,0,0.08)',
        cursor: dragging ? 'grabbing' : 'grab',
        userSelect: 'none',
        fontWeight: 500,
        outline: "none"
      }}
       className="focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"

      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.12 }}
    >
      <div 
      id={`task-${task.id}-details`}
      style={{ flex: 1, fontSize: 12, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{task.title}</div>
      {!task.isMilestone && <div style={{ marginLeft: 8, fontSize: 12 }}>{task.progress}%</div>}

      <div data-handle="left" onPointerDown={(e) => onPointerDown(e, 'left')} style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 8, cursor: 'ew-resize' }} 
        aria-label="Resize start date"
        role="separator"
        />
      <div data-handle="right" onPointerDown={(e) => onPointerDown(e, 'right')} style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 8, cursor: 'ew-resize' }}
      aria-label="Resize start date"
        role="separator"
      />
    </motion.div>
  );
};

export const Taskbar = React.memo(TaskBar);
 