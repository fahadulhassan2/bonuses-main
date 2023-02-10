module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        warningTxt: "#7A7AA9",
        warningBg: "#0F0F41",
        headerBg: "#202058",
        active: "#7781FF",
        mainBg: "#080828",
        clearBY: "#8A93FF",
        clearBM: "#6872EA",
        darkBorder: "#7E88F8",
        featuredBg: "#12123D",
        bonusesBg: "#17174B",
        footerY: "#212161",
        footerM: "#1B1B50",
        rewardsBg: "#2A2A68",
      },
      fontFamily: {
        specify: ["specify-personal-expanded-black"],
      },
      spacing: {
        "7px": "7px",
      },
    },
  },
  plugins: [],
};
