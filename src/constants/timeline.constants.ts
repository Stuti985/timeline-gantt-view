
export const TIMELINE_CONSTANTS = {
  DEFAULT_VIEW_MODE: 'week' as const,
  DEFAULT_PIXELS_PER_DAY: 40,
  DEFAULT_ROW_HEIGHT: 64,
  LEFT_PANEL_WIDTH: 220,
  VIEW_MODES: { DAY: 'day', WEEK: 'week', MONTH: 'month' },
  PIXELS_PER_UNIT: { day: 40, week: 80, month: 120 },
  DATE_FORMATS: { day: 'EEE dd', week: "'Week' ww", month: 'MMM yyyy' },
  COLORS: {
    primary: '#0ea5e9',
    primaryDark: '#0284c7',
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    neutralLight: '#f4f4f5',
    neutralDark: '#18181b',
    gridLine: '#e4e4e7',
    todayLine: '#ef4444'
  },
  ANIMATION: { fadeIn: 200, slide: 300 },
  TASK_HEIGHT: 32,
  TASK_SPACING: 16,
  MILESTONE_SIZE: 20,
  RESIZE_HANDLE_WIDTH: 4,
  SIDEBAR_WIDTH: 400,
  KEYBOARD: {
    MOVE_LEFT: 'ArrowLeft',
    MOVE_RIGHT: 'ArrowRight',
    MOVE_UP: 'ArrowUp',
    MOVE_DOWN: 'ArrowDown',
    ENTER: 'Enter',
    ESC: 'Escape'
  }
};
export const PIXELS_PER_DAY = {
  day: TIMELINE_CONSTANTS.PIXELS_PER_UNIT.day,
  week: TIMELINE_CONSTANTS.PIXELS_PER_UNIT.week / 7,
  month: TIMELINE_CONSTANTS.PIXELS_PER_UNIT.month / 30
};
export const LABELS = { TODAY: 'Today', NO_TASKS: 'No tasks to display', LOADING: 'Loading timeline...' };
export const BREAKPOINTS = { sm: 640, md: 768, lg: 1024, xl: 1280 };
