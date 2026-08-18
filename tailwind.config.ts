import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "space-indigo": {
          50: "#f0f0f4", 100: "#e1e2ea", 200: "#c4c5d4",
          300: "#a6a7bf", 400: "#898aa9", 500: "#6b6d94",
          600: "#565776", 700: "#404159", 800: "#2b2c3b",
          900: "#15161e", 950: "#0f0f15",
        },
        "cotton-rose": {
          50: "#faeaec", 100: "#f5d6d9", 200: "#ebadb3",
          300: "#e1848d", 400: "#d75b67", 500: "#cd3241",
          600: "#a42834", 700: "#7b1e27", 800: "#52141a",
          900: "#290a0d", 950: "#1d0709",
        },
        "old-rose": {
          50: "#f8edef", 100: "#f0dbdf", 200: "#e1b7bf",
          300: "#d3929f", 400: "#c46e7f", 500: "#b54a5f",
          600: "#913b4c", 700: "#6d2c39", 800: "#481e26",
          900: "#240f13", 950: "#190a0d",
        },
        "lavender-blush": {
          50: "#fceae8", 100: "#fad4d1", 200: "#f4a9a4",
          300: "#ef7e76", 400: "#ea5348", 500: "#e4281b",
          600: "#b72015", 700: "#891810", 800: "#5b100b",
          900: "#2e0805", 950: "#200604",
        },
      },
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant("waguri", ".waguri &");
    }),
  ],
};

export default config;
