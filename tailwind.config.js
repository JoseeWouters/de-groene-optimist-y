/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app.vue",
    "./components/**/*.{js,vue,ts}",
    "./content/*.md",
    "./content/**/*.md",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Supreme-Variable', 'Inter', 'sans-serif', 'system-ui'],
    },
    colors: {
      black: '#161515',
      white: '#fff',
      cta: '#3874ff',
    }
  },
  colors: {
  },
  plugins: [],
}
