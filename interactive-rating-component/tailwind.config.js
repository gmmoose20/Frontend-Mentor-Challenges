/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontSize: {
      sm: "14px",
      base: "15px",
      lg: "24px",
      xl: "28px",
    },
    fontFamily: {
      overpass: ["Overpass", "sans-serif"],
    },
    backgroundImage: {
      "gradient-radial":
        "radial-gradient( 98.96% 98.96% at 50% 0%, #232a34 0%, #181e27 100% )",
    },
    extend: {
      colors: {
        primary: "hsl(25, 97%, 53%)",
        nLightGrey: "hsl(217,12%,63%)",
        nMediumGrey: "hsl(216, 12%, 54%)",
        nDarkBlue: "hsl(213, 19%, 18%)",
        nVeryDarkBlue: "hsl(216,12%,8%)",
      },
      width: {
        articleW: "clamp(256px, 87.2vw, 412px)",
        clampIconW: "",
      },
      height: {
        articleH: "clamp(360px, 96vw, 416px)",
        clampIconH: "",
      },
    },
  },
  plugins: [],
};
