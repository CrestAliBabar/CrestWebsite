import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        opensans: ["Open Sans", "sans-serif"],
        mono: ["Menlo"],
      },
    },
  },
  // colors: {
  //   "custom-purple": "#69488E", // Your custom color
  // },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
};
export default config;
