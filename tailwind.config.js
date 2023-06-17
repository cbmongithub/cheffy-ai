/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        purple: '#9f8fff',
        purpleDark: '#6d61b7',
        cyan: '#61ede5',
        midnight: '#43256d',
      },
    },
  },
  plugins: [],
}
