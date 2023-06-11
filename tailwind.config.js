/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{html,js,vue,ts,jsx,tsx}',
    './src/**/*.{html,js,vue,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      screens: {
        cs: '920px',
        cs2: '820px'
      },
      colors: {
        primary: '#5a0c0c',
        secondary: {
          100: '#991a1a',
          200: '#941f1f',
          300: '#782020',
          400: '#bbb',
          500: '#aaa'
        }
      }
    },
  },
  plugins: [],
}
