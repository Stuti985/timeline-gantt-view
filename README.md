Task Management App (React + TypeScript)

A modern, accessible, and high-performance Task Management Web App built with React, TypeScript, TailwindCSS, and Storybook.  
It allows users to add, edit, delete, and move tasks — with full keyboard accessibility, dark mode support, and optimized performance.

---

Features
Core Functionality
- Add new tasks  
- Edit existing tasks inline  
- Delete tasks  
- Reorder (move) tasks via drag-and-drop or keyboard  
- Persistent data using `localStorage`

UI / UX
- Responsive layout for mobile, tablet, and desktop
- Smooth animations, hover & focus feedback
- Clean and consistent color scheme
- Dark mode toggle

Accessibility
- Fully keyboard navigable
- Proper ARIA roles, labels, and focus management
- Meets WCAG 2.1 AA** contrast ratio requirements

Performance
- Memoized components (`React.memo`, `useCallback`, `useMemo`)
- Lazy-loaded routes
- Optimized bundle (<200kb gzipped)
- Efficient rendering for 100+ tasks

---

Tech Stack

- Frontend = React 18 + TypeScript 
- UI Styling = TailwindCSS 
- State Management = React Context API 
- Accessibility Testing = axe DevTools + Storybook A11y Addon 
- Documentation & UI Testing = Storybook 
- Build Tool = Vite 
- Data Storage = LocalStorage (persistent state) 

---

Project Structure

Timeline Gantt View
│
├── README.md                          
├── package.json                       
├── tsconfig.json                      
├── tailwind.config.js                 
├── accessibility-test.js
├── next-env.d.ts
├── next.config.js
├── postcss.config.cjs
│
├── .storybook/                        
│   ├── main.ts                        
│   └── preview.ts                   
│
└── src/ 
    ├── app/
    │   ├── layout.tsx
    │   ├──page.tsx
    │
    ├── components/ 
    │   └── Timeline/
    │       ├── TimelineView.tsx      
    │       ├── TimelineGrid.tsx           
    │       ├── TimelineRow.tsx            
    │       ├── TaskBar.tsx                
    │       ├── DependencyLine.tsx
    │       └── TaskDetailSidebar.tsx      
    │
    ├── data/
    │   ├── sampleData.ts
    │
    ├── primitives/                        
    │   ├── Button.tsx
    │   ├── Modal.tsx
    │   └── Slider.tsx
    │
    ├── hooks/                             
    │   ├── useTimeline.ts
    │   ├── useDragAndDrop.ts
    │   ├── useZoom.ts
    │   └── useScrollSync.ts
    │
    ├── utils/                            
    │   ├── date.utils.ts
    │   ├── position.utils.ts
    │   ├── dependency.utils.ts
    │   ├── validation.utils.ts
    │   └── formatting.utils.ts
    │
    ├── types/                             
    │   └── timeline.types.ts
    │
    ├── constants/                        
    │   └── timeline.constants.ts
    │
    ├── stores/
    │   ├── timelineStore.ts
    │
    ├── stories/
    │   └── TimelineView.stories.tsx 
    │
    └── styles/                            
        ├── globals.css
        └── animations.css

--- 

Installation & Setup

Follow these steps to run the project locally:

- Clone the repository
  git clone https://github.com/Stuti985/timeline-component.git

- Navigate to the project directory
  cd timeline-component

- Install dependencies
  npm install

- Start Storybook for development
  npm run storybook

- Build the project for production
  npm run build

- timeline-gantt-view
  Interactive Timeline and Gantt View component built with React, TypeScript, Tailwind CSS, and Storybook.

