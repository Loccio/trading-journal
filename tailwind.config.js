module.exports = {
  mode:'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        dark: '#0e1524',
        darkish:'#162240',
        darker : '#080d1c',
        light: '#eff0e2',
        red: '#fb597f',
        green: '#26a69a',
        blue: '#3771ff',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
