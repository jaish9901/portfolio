/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'profileImg': "url('./images/myPic.jpg')",
        'landingPageBg': "url('./images/bgPicture.jpg')"
      },
      backgroundSize:{
        '100':"100%"
      },
      fontSize: {
        'opacityHeading': '14rem'
      },
      colors: {
        'themeColor': '#9c27b0',
        'gradientColor': 'rgba(74, 47, 189, 0.5)',
        'darkBg': '#000000',
      },
      fontFamily: {
        // 'poppins': ['Poppins', 'sans-serif'] ,
        'Sacramento': ['Sacramento', 'cursive'],

      },
    },
  },
  plugins: [],
}
