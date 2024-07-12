/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      colors: {
        BgGray: "#e9e9e9",
        TextDark: "#777777",
        TextLight: "#999999",
      },
    },
    screens: {
      laptopL: { max: "1520px" },

      hidesidebar: { max: "1330px" },

      laptopM: { max: "1024px" },

      tablet: { max: "768px" },

      mobileL: { max: "425px" },

      mobileM: { max: "375px" },

      mobileS: { max: "320px" },
    },
    boxShadow: {
      cardShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
    },
  },
  plugins: [],
};
