import type { Preview, StoryFn } from "@storybook/react";
import * as React from "react";
import { themes } from '@storybook/theming';
import '../src/styles/globals.css';

(() => {
  if (typeof document !== "undefined" && !document.querySelector('meta[name="viewport"]')) {
    const meta = document.createElement("meta");
    meta.name = "viewport";
    meta.content = "width=device-width, initial-scale=1"; 
    document.head.appendChild(meta);
  }

  if (typeof document !== "undefined" && !document.querySelector("h1")) {
    const h1 = document.createElement("h1");
    h1.textContent = "Storybook Preview";
    h1.style.display = "none";
    document.body.prepend(h1);
  }
})();

const preview: Preview = {
  parameters: {

    layout: 'fullscreen',
    darkMode: {
       dark: { ...themes.dark, appBg: "#111827", appContentBg: "#1f2937", appBorderColor: "#374151" },
      light: { ...themes.light, appBg: "#f9fafb", appContentBg: "#ffffff", appBorderColor: "#d1d5db" },
      current: "light",
      // viewport: {
      // defaultViewport: "responsive",
    //},
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },


decorators: [
    (Story: StoryFn) =>
      React.createElement(
        "main",
        {
          role: "main",
          className:
            "p-6 min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
        },
        React.createElement(Story)
      ),
  ],
};


export default preview;
