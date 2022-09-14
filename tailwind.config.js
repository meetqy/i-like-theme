/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "components/**/*.{vue,js,ts}",
    "composables/**/*.ts",
    "layouts/**/*.vue",
    "pages/**/*.vue",
    "app.{js,ts,vue}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("daisyui"),
  ],
  daisyui: {
    themes: [
      {
        polar_dark_frost: {
          primary: "#8fbcbb",
          secondary: "#88c0d0",
          accent: "#81a1c1",
          neutral: "#5e81ac",
          "base-100": "#2e3440",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
      {
        snow_night_frost: {
          primary: "#8fbcbb",
          secondary: "#88c0d0",
          accent: "#81a1c1",
          neutral: "#5e81ac",
          "base-100": "#e5e9f0",
          info: "#b48ead",
          success: "#a3be8c",
          warning: "#d08770",
          error: "#bf616a",
        },
      },
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
    ],
  },
};
