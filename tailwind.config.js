// tailwind.config.js
import daisyui from "daisyui";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#570df8",
          "secondary": "#f000b8",
          "accent": "#37cdbe",
          "neutral": "#3d4451",
          "base-100": "#f0eff2", // 👈 set your global background color here
        },
      },
      "light",
      "dark",
    ],
  },
  plugins: [daisyui],
};
