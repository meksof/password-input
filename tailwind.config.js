/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily: {
      'sans': ['"Roboto"', 'sans-serif']
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

