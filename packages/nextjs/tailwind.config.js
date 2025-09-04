/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./utils/**/*.{js,ts,jsx,tsx}"],
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("daisyui")],
  darkTheme: "dark",
  darkMode: ["selector", "[data-theme='dark']"],
  // DaisyUI theme colors
  daisyui: {
    themes: [
      {
        light: {
          // Flow.com Primary Colors
          primary: "#00EF88", // Green Flow
          "primary-content": "#000000", // Black
          secondary: "#02D87E", // Green Flow Dark
          "secondary-content": "#FFFFFF", // White
          accent: "#3334F8", // Accent Blue Normal
          "accent-content": "#FFFFFF", // White
          neutral: "#FFFFFF", // White
          "neutral-content": "#000000", // Black
          "base-100": "#FFFFFF", // White
          "base-200": "#F9FBFF", // Light background
          "base-300": "#F5FEFA", // Light accent
          "base-content": "#000000", // Black
          info: "#37DDDF", // Accent Aqua Normal
          success: "#00EF88", // Green Flow
          warning: "#FFCF72",
          error: "#FF8863",

          "--rounded-btn": "9999rem",

          ".tooltip": {
            "--tooltip-tail": "6px",
          },
          ".link": {
            textUnderlineOffset: "2px",
          },
          ".link:hover": {
            opacity: "80%",
          },
        },
      },
      {
        dark: {
          // Flow.com Primary Colors (Dark Theme)
          primary: "#00EF88", // Green Flow
          "primary-content": "#000000", // Black
          secondary: "#02D87E", // Green Flow Dark
          "secondary-content": "#FFFFFF", // White
          accent: "#1D2374", // Accent Blue Dark
          "accent-content": "#FFFFFF", // White
          neutral: "#000000", // Black
          "neutral-content": "#FFFFFF", // White
          "base-100": "#000000", // Black
          "base-200": "#101828", // Accent Aqua Dark
          "base-300": "#1D2374", // Accent Blue Dark
          "base-content": "#FFFFFF", // White
          info: "#37DDDF", // Accent Aqua Normal
          success: "#00EF88", // Green Flow
          warning: "#FFCF72",
          error: "#FF8863",

          "--rounded-btn": "9999rem",

          ".tooltip": {
            "--tooltip-tail": "6px",
            "--tooltip-color": "oklch(var(--p))",
          },
          ".link": {
            textUnderlineOffset: "2px",
          },
          ".link:hover": {
            opacity: "80%",
          },
        },
      },
    ],
  },
  theme: {
    extend: {
      // Flow.com Design System Colors
      colors: {
        'flow': {
          'green': '#00EF88',
          'green-dark': '#02D87E',
          'black': '#000000',
          'white': '#FFFFFF',
        },
        'accent': {
          'blue': {
            'light': '#99BBFF',
            'normal': '#3334F8',
            'dark': '#1D2374',
          },
          'aqua': {
            'light': '#9DF1F2',
            'normal': '#37DDDF',
            'dark': '#101828',
          },
          'pink': {
            'light': '#F9E9FB',
            'normal': '#F4C6FA',
            'dark': '#6D3974',
          },
          'purple': {
            'light': '#E0CCFF',
            'normal': '#823EE4',
            'dark': '#50268C',
          },
        },
      },
      // Flow.com Typography
      fontFamily: {
        'epilogue': ['Epilogue', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      boxShadow: {
        center: "0 0 12px -2px rgb(0 0 0 / 0.05)",
      },
      animation: {
        "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
};
