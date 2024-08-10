import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-fix': '#121318',
        'background-aux': '#010101',
        'background-card': '#25262d',
      },
      backgroundImage: {
        "gradient-linear": "linear-gradient(rgba(1, 1, 1, .5) 0%, rgba(1, 1, 1, .9) 80%, #010101 100%);",
      },
    },
  },
  plugins: [],
};
export default config;
