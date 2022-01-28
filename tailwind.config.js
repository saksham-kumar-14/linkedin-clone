const plugin = require("tailwindcss/plugin")

module.exports = {
  content: [ "./pages/**/*.{js,jsx}" , "./Components/**/*.{js.jsx}" , "./Components/**/**/*.{js,jsx}" ],
  theme: {
      
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '::-webkit-scrollbar' : {
          'display': 'none'
        }
      })
    })
  ]
}
