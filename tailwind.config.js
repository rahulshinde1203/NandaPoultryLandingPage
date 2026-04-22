/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'green-primary': '#2A7A50',   // main brand green
        'green-mid':     '#3D9B68',   // secondary green
        'green-light':   '#6DC48A',   // soft accent
        'green-pale':    '#EAF7EF',   // very light section bg
        'green-ultra':   '#F6FDF8',   // barely-there green
        'gold':          '#D4AF37',
        'gold-light':    '#E8CB5A',
        'gold-dark':     '#B8960C',
        'text-dark':     '#0F3B22',   // dark heading text
        'text-mid':      '#3D6B52',   // body text
      },
      fontFamily: {
        poppins:  ['Poppins', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
}
