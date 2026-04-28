/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Isso fará com que toda classe 'font-serif' use a Cinzel
        serif: ['Cinzel', 'serif'],
      },
      colors: {
        'metal-black': '#0a0a0a',
        'metal-red': '#7f1d1d',
        'metal-gray': '#1a1a1a',
      },
    },
  },
  plugins: [],
}