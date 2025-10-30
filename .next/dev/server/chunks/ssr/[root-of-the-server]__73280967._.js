module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/utils/position.utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calculateLeft",
    ()=>calculateLeft,
    "calculateWidth",
    ()=>calculateWidth,
    "dateFromLeft",
    ()=>dateFromLeft,
    "msPerDay",
    ()=>msPerDay
]);
const msPerDay = 1000 * 60 * 60 * 24;
const calculateLeft = (date, start, pixelsPerDay)=>Math.round((date.getTime() - start.getTime()) / msPerDay * pixelsPerDay);
const calculateWidth = (start, end, pixelsPerDay)=>Math.max(1, Math.round((end.getTime() - start.getTime()) / msPerDay * pixelsPerDay));
const dateFromLeft = (left, start, pixelsPerDay)=>{
    const days = Math.round(left / pixelsPerDay);
    const d = new Date(start);
    d.setDate(start.getDate() + days);
    return d;
};
}),
"[project]/src/constants/timeline.constants.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BREAKPOINTS",
    ()=>BREAKPOINTS,
    "LABELS",
    ()=>LABELS,
    "PIXELS_PER_DAY",
    ()=>PIXELS_PER_DAY,
    "TIMELINE_CONSTANTS",
    ()=>TIMELINE_CONSTANTS
]);
const TIMELINE_CONSTANTS = {
    DEFAULT_VIEW_MODE: 'week',
    DEFAULT_PIXELS_PER_DAY: 40,
    DEFAULT_ROW_HEIGHT: 64,
    LEFT_PANEL_WIDTH: 220,
    VIEW_MODES: {
        DAY: 'day',
        WEEK: 'week',
        MONTH: 'month'
    },
    PIXELS_PER_UNIT: {
        day: 40,
        week: 80,
        month: 120
    },
    DATE_FORMATS: {
        day: 'EEE dd',
        week: "'Week' ww",
        month: 'MMM yyyy'
    },
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
    ANIMATION: {
        fadeIn: 200,
        slide: 300
    },
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
const PIXELS_PER_DAY = {
    day: TIMELINE_CONSTANTS.PIXELS_PER_UNIT.day,
    week: TIMELINE_CONSTANTS.PIXELS_PER_UNIT.week / 7,
    month: TIMELINE_CONSTANTS.PIXELS_PER_UNIT.month / 30
};
const LABELS = {
    TODAY: 'Today',
    NO_TASKS: 'No tasks to display',
    LOADING: 'Loading timeline...'
};
const BREAKPOINTS = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280
};
}),
"[project]/src/utils/date.utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addByView",
    ()=>addByView,
    "daysBetween",
    ()=>daysBetween,
    "generateScale",
    ()=>generateScale,
    "isToday",
    ()=>isToday
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/addDays.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addWeeks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/addWeeks.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addMonths$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/addMonths.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isSameDay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/isSameDay.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$timeline$2e$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/timeline.constants.ts [app-ssr] (ecmascript)");
;
;
const daysBetween = (a, b)=>Math.round((b.getTime() - a.getTime()) / (1000 * 60 * 60 * 24));
const addByView = (date, view)=>{
    if (view === 'day') return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addDays"])(date, 1);
    if (view === 'week') return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addWeeks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addWeeks"])(date, 1);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addMonths$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addMonths"])(date, 1);
};
const generateScale = (start, end, view)=>{
    const arr = [];
    let cur = new Date(start);
    while(cur <= end){
        arr.push({
            date: new Date(cur),
            label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(cur, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$timeline$2e$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TIMELINE_CONSTANTS"].DATE_FORMATS[view])
        });
        cur = addByView(cur, view);
    }
    return arr;
};
const isToday = (d)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isSameDay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSameDay"])(d, new Date());
}),
"[project]/src/components/Timeline/TimelineGrid.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TimelineGrid",
    ()=>TimelineGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$date$2e$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/date.utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$position$2e$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/position.utils.ts [app-ssr] (ecmascript)");
;
;
;
const TimelineGrid = ({ startDate, endDate, viewMode, pixelsPerDay })=>{
    const scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$date$2e$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateScale"])(startDate, endDate, viewMode);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'relative'
        },
        children: scale.map((s)=>{
            const left = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$position$2e$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateLeft"])(s.date, startDate, pixelsPerDay);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    left,
                    top: 0,
                    width: Math.max(1, pixelsPerDay),
                    height: 48,
                    borderRight: '1px solid #eef2f7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-xs text-neutral-700",
                    children: s.label
                }, void 0, false, {
                    fileName: "[project]/src/components/Timeline/TimelineGrid.tsx",
                    lineNumber: 32,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, s.date.toISOString(), false, {
                fileName: "[project]/src/components/Timeline/TimelineGrid.tsx",
                lineNumber: 18,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0));
        })
    }, void 0, false, {
        fileName: "[project]/src/components/Timeline/TimelineGrid.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/components/Timeline/TaskBar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TaskBar",
    ()=>TaskBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const TaskBar = ({ task, left, width, top, onOpen, pixelsPerDay = 20, onCommit })=>{
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [localLeft, setLocalLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(left);
    const [localWidth, setLocalWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(width);
    const [dragging, setDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [resizing, setResizing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const pointerIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setLocalLeft(left);
        setLocalWidth(width);
    }, [
        left,
        width
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const onMove = (e)=>{
            if (!dragging && !resizing) return;
            if (dragging) setLocalLeft((l)=>Math.max(0, l + e.movementX));
            if (resizing === 'left') {
                setLocalLeft((l)=>Math.max(0, l + e.movementX));
                setLocalWidth((w)=>Math.max(10, w - e.movementX));
            }
            if (resizing === 'right') setLocalWidth((w)=>Math.max(10, w + e.movementX));
        };
        const onUp = ()=>{
            if (dragging || resizing) {
                onCommit?.(task.id, localLeft, localWidth);
            }
            setDragging(false);
            setResizing(null);
            if (pointerIdRef.current !== null) {
                try {
                    ref.current?.releasePointerCapture(pointerIdRef.current);
                } catch  {}
                pointerIdRef.current = null;
            }
        };
        window.addEventListener('pointermove', onMove);
        window.addEventListener('pointerup', onUp);
        return ()=>{
            window.removeEventListener('pointermove', onMove);
            window.removeEventListener('pointerup', onUp);
        };
    }, [
        dragging,
        resizing,
        localLeft,
        localWidth,
        onCommit,
        task.id
    ]);
    const onPointerDown = (e, handle)=>{
        e.target.setPointerCapture?.(e.pointerId);
        pointerIdRef.current = e.pointerId;
        if (handle === 'left') setResizing('left');
        else if (handle === 'right') setResizing('right');
        else setDragging(true);
    };
    const onKeyDown = (e)=>{
        if (e.key === 'Enter' || e.key === ' ') {
            onOpen(task.id);
            e.preventDefault();
        }
        if (e.key === 'ArrowLeft') setLocalLeft((l)=>Math.max(0, l - pixelsPerDay));
        if (e.key === 'ArrowRight') setLocalLeft((l)=>l + pixelsPerDay);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: ref,
        role: "button",
        tabIndex: 0,
        "aria-label": `${task.title}. From ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(task.startDate, 'MMM d, yyyy')} to ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(task.endDate, 'MMM d, yyyy')}. Progress: ${task.progress}%`,
        onKeyDown: onKeyDown,
        onDoubleClick: ()=>onOpen(task.id),
        onPointerDown: (e)=>onPointerDown(e),
        style: {
            position: 'absolute',
            left: localLeft,
            top,
            width: localWidth,
            height: task.isMilestone ? 24 : 32,
            backgroundColor: task.color || '#0ea5e9',
            borderRadius: 6,
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            padding: '0 8px',
            boxShadow: dragging ? '0 8px 20px rgba(0,0,0,0.15)' : '0 2px 6px rgba(0,0,0,0.08)',
            cursor: dragging ? 'grabbing' : 'grab',
            userSelect: 'none'
        },
        initial: {
            opacity: 0,
            y: -4
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.12
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1,
                    fontSize: 12,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                },
                children: task.title
            }, void 0, false, {
                fileName: "[project]/src/components/Timeline/TaskBar.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            !task.isMilestone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginLeft: 8,
                    fontSize: 12
                },
                children: [
                    task.progress,
                    "%"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Timeline/TaskBar.tsx",
                lineNumber: 109,
                columnNumber: 29
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-handle": "left",
                onPointerDown: (e)=>onPointerDown(e, 'left'),
                style: {
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: 8,
                    cursor: 'ew-resize'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/Timeline/TaskBar.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-handle": "right",
                onPointerDown: (e)=>onPointerDown(e, 'right'),
                style: {
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    bottom: 0,
                    width: 8,
                    cursor: 'ew-resize'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/Timeline/TaskBar.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Timeline/TaskBar.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/components/Timeline/DependencyLine.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DependencyLine",
    ()=>DependencyLine
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const DependencyLine = ({ x1, y1, x2, y2 })=>{
    const cx1 = x1 + 24;
    const cx2 = x2 - 24;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
        d: `M ${x1} ${y1} C ${cx1} ${y1} ${cx2} ${y2} ${x2} ${y2}`,
        stroke: "#94a3b8",
        strokeWidth: 2,
        fill: "none",
        markerEnd: "url(#arrowhead)"
    }, void 0, false, {
        fileName: "[project]/src/components/Timeline/DependencyLine.tsx",
        lineNumber: 7,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/primitives/Slider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Slider",
    ()=>Slider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const Slider = ({ value, onChange })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: "range",
        min: 0,
        max: 100,
        value: value,
        onChange: (e)=>onChange(Number(e.target.value)),
        className: "w-full"
    }, void 0, false, {
        fileName: "[project]/src/primitives/Slider.tsx",
        lineNumber: 5,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
}),
"[project]/src/components/Timeline/TaskDetailSidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TaskDetailSidebar",
    ()=>TaskDetailSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$primitives$2f$Slider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/primitives/Slider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
const TaskDetailSidebar = ({ task, onClose, onSave })=>{
    const [title, setTitle] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(task.title);
    const [progress, setProgress] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(task.progress);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].aside, {
        initial: {
            x: 300
        },
        animate: {
            x: 0
        },
        exit: {
            x: 300
        },
        transition: {
            type: 'spring'
        },
        className: "w-80 p-4 bg-white shadow-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold",
                        children: "Task"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Timeline/TaskDetailSidebar.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        "aria-label": "Close",
                        children: "Close"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Timeline/TaskDetailSidebar.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Timeline/TaskDetailSidebar.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block text-sm",
                children: "Title"
            }, void 0, false, {
                fileName: "[project]/src/components/Timeline/TaskDetailSidebar.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                value: title,
                onChange: (e)=>setTitle(e.target.value),
                className: "w-full border rounded px-2 py-1 mb-3"
            }, void 0, false, {
                fileName: "[project]/src/components/Timeline/TaskDetailSidebar.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm text-neutral-600 mb-2",
                children: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(task.startDate, 'MMM d, yyyy'),
                    " — ",
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(task.endDate, 'MMM d, yyyy')
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Timeline/TaskDetailSidebar.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block text-sm",
                children: [
                    "Progress: ",
                    progress,
                    "%"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Timeline/TaskDetailSidebar.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$primitives$2f$Slider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slider"], {
                value: progress,
                onChange: setProgress
            }, void 0, false, {
                fileName: "[project]/src/components/Timeline/TaskDetailSidebar.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2 mt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onSave({
                                title,
                                progress
                            }),
                        className: "px-3 py-1 bg-primary-500 text-white rounded",
                        children: "Save"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Timeline/TaskDetailSidebar.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        className: "px-3 py-1 border rounded",
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Timeline/TaskDetailSidebar.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Timeline/TaskDetailSidebar.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Timeline/TaskDetailSidebar.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/components/Timeline/TimelineView.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TimelineView",
    ()=>TimelineView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$position$2e$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/position.utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Timeline$2f$TimelineGrid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Timeline/TimelineGrid.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Timeline$2f$TaskBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Timeline/TaskBar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Timeline$2f$DependencyLine$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Timeline/DependencyLine.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Timeline$2f$TaskDetailSidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Timeline/TaskDetailSidebar.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const LEFT_PANEL_WIDTH = 220;
const ROW_HEIGHT = 64;
const TimelineView = ({ rows, tasks, startDate, endDate, viewMode, onTaskUpdate })=>{
    const pixelsPerDay = viewMode === 'day' ? 40 : viewMode === 'week' ? 20 : 10;
    const totalDays = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    const timelineWidth = Math.max(800, totalDays * pixelsPerDay + 200);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [selectedTask, setSelectedTask] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const positions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const map = new Map();
        rows.forEach((row, ri)=>{
            row.tasks.forEach((tid)=>{
                const t = tasks[tid];
                if (!t) return;
                const left = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$position$2e$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateLeft"])(t.startDate, startDate, pixelsPerDay);
                const width = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$position$2e$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateWidth"])(t.startDate, t.endDate, pixelsPerDay);
                const top = ri * ROW_HEIGHT + 12;
                map.set(tid, {
                    left,
                    width,
                    top
                });
            });
        });
        return map;
    }, [
        rows,
        tasks,
        startDate,
        pixelsPerDay
    ]);
    const depPaths = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const arr = [];
        Object.values(tasks).forEach((t)=>{
            t.dependencies?.forEach((depId)=>{
                const from = positions.get(depId);
                const to = positions.get(t.id);
                if (!from || !to) return;
                const x1 = from.left + from.width + LEFT_PANEL_WIDTH;
                const y1 = from.top + 48;
                const x2 = to.left + LEFT_PANEL_WIDTH;
                const y2 = to.top + 48;
                arr.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Timeline$2f$DependencyLine$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DependencyLine"], {
                    x1: x1,
                    y1: y1,
                    x2: x2,
                    y2: y2
                }, `${depId}-${t.id}`, false, {
                    fileName: "[project]/src/components/Timeline/TimelineView.tsx",
                    lineNumber: 46,
                    columnNumber: 18
                }, ("TURBOPACK compile-time value", void 0)));
            });
        });
        return arr;
    }, [
        tasks,
        positions
    ]);
    const commitPosition = (taskId, left, width)=>{
        const days = Math.round(left / pixelsPerDay);
        const newStart = new Date(startDate);
        newStart.setDate(newStart.getDate() + days);
        const durDays = Math.max(1, Math.round(width / pixelsPerDay));
        const newEnd = new Date(newStart);
        newEnd.setDate(newEnd.getDate() + durDays);
        onTaskUpdate(taskId, {
            startDate: newStart,
            endDate: newEnd
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative bg-white border rounded",
        style: {
            minHeight: rows.length * ROW_HEIGHT + 80
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: LEFT_PANEL_WIDTH,
                            borderRight: '1px solid #e6edf3',
                            background: '#fff',
                            position: 'sticky',
                            left: 0,
                            zIndex: 6
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    height: 48,
                                    display: 'flex',
                                    alignItems: 'center',
                                    paddingLeft: 12
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Resources"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Timeline/TimelineView.tsx",
                                    lineNumber: 66,
                                    columnNumber: 95
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Timeline/TimelineView.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            rows.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        height: ROW_HEIGHT,
                                        display: 'flex',
                                        alignItems: 'center',
                                        paddingLeft: 12,
                                        borderBottom: '1px solid #f3f4f6'
                                    },
                                    children: r.label
                                }, r.id, false, {
                                    fileName: "[project]/src/components/Timeline/TimelineView.tsx",
                                    lineNumber: 67,
                                    columnNumber: 28
                                }, ("TURBOPACK compile-time value", void 0)))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Timeline/TimelineView.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: containerRef,
                        style: {
                            overflowX: 'auto',
                            width: '100%'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: 'relative',
                                width: timelineWidth
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: 'sticky',
                                        top: 0,
                                        zIndex: 5,
                                        background: '#fff'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            height: 48,
                                            position: 'relative',
                                            marginLeft: LEFT_PANEL_WIDTH
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Timeline$2f$TimelineGrid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TimelineGrid"], {
                                                startDate: startDate,
                                                endDate: endDate,
                                                viewMode: viewMode,
                                                pixelsPerDay: pixelsPerDay
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Timeline/TimelineView.tsx",
                                                lineNumber: 74,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    position: 'absolute',
                                                    left: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$position$2e$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateLeft"])(new Date(), startDate, pixelsPerDay),
                                                    top: 0,
                                                    bottom: 0,
                                                    width: 2,
                                                    background: 'rgba(239,68,68,0.9)'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Timeline/TimelineView.tsx",
                                                lineNumber: 75,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Timeline/TimelineView.tsx",
                                        lineNumber: 73,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Timeline/TimelineView.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: 'relative'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            style: {
                                                position: 'absolute',
                                                left: LEFT_PANEL_WIDTH,
                                                top: 48,
                                                width: timelineWidth,
                                                height: rows.length * ROW_HEIGHT
                                            },
                                            "aria-hidden": true,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("marker", {
                                                        id: "arrowhead",
                                                        markerWidth: "10",
                                                        markerHeight: "10",
                                                        refX: "9",
                                                        refY: "3",
                                                        orient: "auto",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                                            points: "0 0, 10 3, 0 6",
                                                            fill: "#94a3b8"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Timeline/TimelineView.tsx",
                                                            lineNumber: 83,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Timeline/TimelineView.tsx",
                                                        lineNumber: 82,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Timeline/TimelineView.tsx",
                                                    lineNumber: 81,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                    children: depPaths
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Timeline/TimelineView.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Timeline/TimelineView.tsx",
                                            lineNumber: 80,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginLeft: LEFT_PANEL_WIDTH,
                                                paddingTop: 48
                                            },
                                            children: rows.map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        height: ROW_HEIGHT,
                                                        position: 'relative',
                                                        borderBottom: '1px solid #f3f4f6'
                                                    },
                                                    children: row.tasks.map((tid)=>{
                                                        const t = tasks[tid];
                                                        if (!t) return null;
                                                        const pos = positions.get(tid);
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Timeline$2f$TaskBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TaskBar"], {
                                                            task: t,
                                                            left: pos.left,
                                                            width: pos.width,
                                                            top: pos.top,
                                                            onOpen: (id)=>setSelectedTask(id),
                                                            onCommit: (id, l, w)=>commitPosition(id, l, w),
                                                            pixelsPerDay: pixelsPerDay
                                                        }, t.id, false, {
                                                            fileName: "[project]/src/components/Timeline/TimelineView.tsx",
                                                            lineNumber: 97,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0));
                                                    })
                                                }, row.id, false, {
                                                    fileName: "[project]/src/components/Timeline/TimelineView.tsx",
                                                    lineNumber: 91,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Timeline/TimelineView.tsx",
                                            lineNumber: 89,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Timeline/TimelineView.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Timeline/TimelineView.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Timeline/TimelineView.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Timeline/TimelineView.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            selectedTask && tasks[selectedTask] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    right: 0,
                    top: 0
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Timeline$2f$TaskDetailSidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TaskDetailSidebar"], {
                    task: tasks[selectedTask],
                    onClose: ()=>setSelectedTask(null),
                    onSave: (u)=>{
                        onTaskUpdate(selectedTask, u);
                        setSelectedTask(null);
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/Timeline/TimelineView.tsx",
                    lineNumber: 119,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Timeline/TimelineView.tsx",
                lineNumber: 118,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Timeline/TimelineView.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/data/sampleData.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sampleRows",
    ()=>sampleRows,
    "sampleTasks",
    ()=>sampleTasks
]);
const sampleRows = [
    {
        id: 'row-1',
        label: 'Frontend Team',
        avatar: '',
        tasks: [
            'task-1',
            'task-2'
        ]
    },
    {
        id: 'row-2',
        label: 'Backend Team',
        avatar: '',
        tasks: [
            'task-3'
        ]
    },
    {
        id: 'row-3',
        label: 'Design Team',
        avatar: '',
        tasks: [
            'task-4'
        ]
    }
];
const sampleTasks = {
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
        dependencies: [
            'task-1',
            'task-3'
        ],
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
}),
"[project]/src/stores/timelineStore.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTimelineStore",
    ()=>useTimelineStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$sampleData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/sampleData.ts [app-ssr] (ecmascript)");
;
;
const useTimelineStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set)=>({
        rows: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$sampleData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sampleRows"],
        tasks: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$sampleData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sampleTasks"],
        setRows: (rows)=>set({
                rows
            }),
        setTasks: (tasks)=>set({
                tasks
            }),
        updateTask: (taskId, updates)=>set((s)=>({
                    tasks: {
                        ...s.tasks,
                        [taskId]: {
                            ...s.tasks[taskId],
                            ...updates
                        }
                    }
                }))
    }));
}),
"[project]/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Timeline$2f$TimelineView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Timeline/TimelineView.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$timelineStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/timelineStore.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function Page() {
    const rows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$timelineStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTimelineStore"])((s)=>s.rows);
    const tasks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$timelineStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTimelineStore"])((s)=>s.tasks);
    const updateTask = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$timelineStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTimelineStore"])((s)=>s.updateTask);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-semibold mb-4",
                children: "Timeline / Gantt Demo"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white p-4 rounded shadow",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Timeline$2f$TimelineView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TimelineView"], {
                    rows: rows,
                    tasks: tasks,
                    startDate: new Date(2024, 0, 1),
                    endDate: new Date(2024, 2, 31),
                    viewMode: "week",
                    onTaskUpdate: (id, u)=>updateTask(id, u)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__73280967._.js.map