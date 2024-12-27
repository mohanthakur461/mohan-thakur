/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 55s linear infinite',
        marquee2: 'marquee2 55s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      colors :{
        "primary": {
          DEFAULT: '#395988',
          100: "#21395d",
          200: "#1a2a43",
          300: "#0a111b",
          400: "#c18638",
        },
        "second": {
          light: '#67e8f9',
          DEFAULT: '#06b6d4',
          dark: '#0e7490',
        },
        white:{
          DEFAULT:'#ffffff',
          100: "#0d0d0d",
          95: "#121212",
          90: "#161616",
          85: "#262626",
          80: "#333333",
          75: "#404040",
          70: "#4d4d4d",
          65: "#595959",
          60: "#666666",
          55: "#737373",
          50: "#808080",
          45: "#8c8c8c",
          40: "#999999",
          35: "#a6a6a6",
          30: "#b3b3b3",
          25: "#bfbfbf",
          20: "#cccccc",
          15: "#d9d9d9",
          10: "#e6e6e6",
          5: " #f2f2f2",
        }
      },
      fontFamily:{
        barlow: ['Barlow Condensed', 'serif'],
        montserrat: ["Montserrat", 'serif'],
      },
      spacing:{
        "sp-10": "10px",
        "sp-20": "20px",
        "sp-30": "30px",
        "sp-40": "40px",
        "sp-50": "50px",
        "sp-60": "60px",
        "sp-70": "70px",
        "sp-80": "80px",
        "sp-90": "90px",
        "sp-100": "100px",
        "sp-110": "110px",
        "sp-120": "120px",
        "sp-130": "130px",
        "sp-140": "140px",
        "sp-150": "150px",
        "sp-160": "160px",
        "sp-170": "170px",
        "sp-180": "180px",
        "sp-190": "190px",
        "sp-200": "200px",
      },
      fontSize: {
        "h1" :'var(--H1)',
        "h2" :'var(--H2)',
        "h3" :'var(--H3)',
        "h4" :'var(--H4)',
        "h5" :'var(--H5)',
        "h6" :'var(--H6)',
      }
    },
  },
  plugins: [],
}

