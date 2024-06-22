module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".scrollbar-thin": {
          scrollbarWidth: "thin",
          scrollbarColor: "white",
        },
        "scrollbar-webkit": {
          "&::-webkit-scrollbar": {
            width: "5px",
          },
          "&::-webkit-scrollbar-track": {
            background: "white",
          },
          // "&::-webkit-scrollbar-thumb": {
          //   backgroundColor: "white",
          //   borderRadius: "20px",
          // },
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
