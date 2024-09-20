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
        background: "var(--background)",
        foreground: "var(--foreground)",
        'nba-navy': {
          50: '#E6E8ED',
          100: '#BFC5D4',
          200: '#97A1BA',
          300: '#6F7DA0',
          400: '#4F608B',
          500: '#2F4377',
          600: '#26366B',
          700: '#1C295C',
          800: '#131D4E',
          900: '#0A1240',
        },
        'nba-orange': {
          50: '#FFF2E5',
          100: '#FFDEBE',
          200: '#FFC996',
          300: '#FFB46E',
          400: '#FFA051',
          500: '#FF8B33',
          600: '#FF762E',
          700: '#FF5C27',
          800: '#FF4220',
          900: '#FF1614',
        },
      },
    },
  },
  plugins: [],
};
export default config;
