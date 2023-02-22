/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontSize: {
        title: "3.125rem",
      },
      colors: {
        accessibility: "#FC8833",
      },
    },
  },
  plugins: [],
}
