/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily : {
        "poppins" : ['poppins'],
        "ClashDispaly" : ['ClashDisplay']
      },
      colors : {
        "ungu" : "#080C2E",
        "grey" : "#F1F4F5",
        "grau" : "#5D5D7C",
        "ungutua" : "#640EF1",
        "putih" : "#F1F4F5",
        "hitamtua" :"#080C2E"
        
      },
      padding :{
        '100': '25rem',
      },
    },
  },
  plugins: [],
}

