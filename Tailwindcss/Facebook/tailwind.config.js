/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      screens: {
        mxp: "500px",
      },
      spacing: {
        13: "3.2rem",
      },
      fontSize: {
        "10xl": ["9rem", { lineHeight: "1.2" }],
      },
      width:{
        mrwidth : "70%"
      }

    },
  },
  plugins: [],
};
