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
        inclusivity: "#FFE279",
        public: "#F370E6",
        device: "#70E3F3",
      },
    },
  },
  plugins: [],
}
