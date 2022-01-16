module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'purple': '#4f46e5',
      'textwhite': '#e0e7ff',
      'app': '#ffffff',
      'textblack': '#0f172a',
      'test1': '#cffafe',
      'test': '#ffffff', 
      'green': '#20b55d',
    },
    screens: {
      '2xl': {'max': '1535px'},

      'xl': {'max': '1279px'},

      'lg': {'max': '1023px'},

      'md': {'max': '767px'},

      'sm': {'max': '639px'},
    }
  },
  plugins: [],
}
