import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        'black': {
          DEFAULT: '#050505',
          100: '#010101',
          200: '#020202',
          300: '#030303',
          400: '#040404',
          500: '#050505',
          600: '#373737',
          700: '#696969',
          800: '#9b9b9b',
          900: '#cdcdcd'
        },
        'risd-blue': {
          DEFAULT: '#004fff',
          100: '#001033',
          200: '#002066',
          300: '#003099',
          400: '#0041cc',
          500: '#004fff',
          600: '#3374ff',
          700: '#6696ff',
          800: '#99b9ff',
          900: '#ccdcff'
        },
        'pacific-cyan': {
          DEFAULT: '#31afd4',
          100: '#09232b',
          200: '#124656',
          300: '#1b6981',
          400: '#248cac',
          500: '#31afd4',
          600: '#5abedc',
          700: '#83cee5',
          800: '#addeee',
          900: '#d6eff6'
        },
        'cordovan': {
          DEFAULT: '#902d41',
          100: '#1d090d',
          200: '#39121a',
          300: '#561b27',
          400: '#732434',
          500: '#902d41',
          600: '#c03d57',
          700: '#d16c81',
          800: '#e09dab',
          900: '#f0ced5'
        },
        'rose-custom': {
          DEFAULT: '#ff007f',
          100: '#33001a',
          200: '#660033',
          300: '#99004d',
          400: '#cc0066',
          500: '#ff007f',
          600: '#ff3399',
          700: '#ff66b3',
          800: '#ff99cc',
          900: '#ffcce6'
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
