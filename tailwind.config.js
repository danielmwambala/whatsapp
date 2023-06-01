/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "primary-light": "#f55246",
      primary: "#ef403d", // Base color
      "primary-dark": "#f33426",

      //Teal
      "secondary-light": "#17ccdd",
      secondary: "#15bece", // Base color
      "secondary-dark": "#13b0bf",

      //light-green
      "tertiary-light": "#acd146",
      tertiary: "#a6ce38", // Base color,
      "tertiary-dark": "#9dc530",

      // Background colors
      "gray-light": "#fbfdff",
      teal: "#15bece",
      black: "#000000",
      white: "#FFFFFF",

      // Text colors
      dark: "#333",
      green: "#a6ce38",

      //buttons - bg color
      "btn-success": "#a6ce38",
      "btn-red": "#ef403d",
      "btn-teal": "#15bece",

      //dark
      dark: "#000",
      "dark-100": "#111",
      "dark-200": "#222",
      "dark-300": "#333",
      "dark-400": "#444",
      "dark-500": "#555",

      //red
      red: "#ef403d",
      "red-50": "#FFE2E2",
      "red-100": "#ffcdd2",
      "red-200": "#ef9a9a",
      "red-300": "#e57373",
      "red-400": "#ef5350",

      //Grey
      gray: "#9e9e9e",
      "gray-20": "#f9f9f9",
      "gray-50": "#f7f7f7",
      "gray-100": "#f5f5f5",
      "gray-150": "#e3e3e3",
      "gray-200": "#eeeeee",
      "gray-250": "#cfcfcf",
      "gray-300": "#e0e0e0",
      "gray-350": "#c2c2c2",
      "gray-400": "#bdbdbd",
      "gray-500": "#9e9e9e",
      "gray-600": "#757575",
      "gray-700": "#616161",
      "gray-800": "#424242",
      "gray-900": "#212121",
    },
    screens: {
      sm: { min: "20px", max: "680px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: "681px", max: "968px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: "969px", max: "1279px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: "1280px", max: "1535px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      "2xl": { min: "1536px" },
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
