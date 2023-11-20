const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    // colors: {
    //   t_primary: '#8892b0',
    // },
    extend: {
      fontFamily: {
        pmplus: ['M PLUS Rounded 1c', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        t_secondary: '#8892b0',
        t_primary: '#ccd6f6',
        t_highlight: '#64ffda',
      },
    },
    plugins: [],
  },
}
