/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    fontSize: {
      xxs: ['12px', '150%'],
      xs: ['14px', '150%'],
      sm: ['16px', '150%'],
      base: ['18px', '150%'],
      lg: ['23px', '110%'],
      xl: ['28px', '110%'],
      '2xl': ['35px', '110%'],
      '3xl': ['44px', '110%'],
    },    
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}
