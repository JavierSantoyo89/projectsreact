import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      prefix: "nextui", // prefix for themes variables
      addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: "light", // default theme from the themes object
      defaultExtendTheme: "light", // default theme to extend on custom themes
      layout: {}, // common layout tokens (applied to all themes)
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: {}, // light theme colors
        },
        dark: {
          layout: {
            disabledOpacity: "0.3",
            radius:{
              small: "1px",
              medium: "2px",
              large: "4px"
            },
            borderWidth:{
              small: "1px",
              medium: "2px",
              large: "3px"
            }
          }, // dark theme layout tokens
          colors: {
            background: "#0D001A",
            foreground: "#ffffff",
            primary: {
              50: "#3b096c",
              100: "#520f83",
              200: "#7318a2",
              300: "#9823c2",
              400: "#C031E2",
              500: "#DD62ED",
              600: "#F182F6",
              700: "#FCADF9",
              800: "#FDD5F9",
              900: "#FEECFE",
              DEFAULT: "#DD62ED",
              foreground: "#ffffff",
            },
            focus: "#F182f6",
          }, // dark theme colors
        },
        // ... custom themes
      },
    }),
  ],
};
