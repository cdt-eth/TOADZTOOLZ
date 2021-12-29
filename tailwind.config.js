module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "toadz-dark": "#061425",
        "toadz-ideaz": "#1a1e1d",
        "toadz-green": "#657F1E",
        "toadz-gray": "#2E3635",
        "toadz-lightgray": "#f3f3f3",
        "toadz-lightgrey": "#E9ECEF",
        "nouns-warm": "#E1D8D5",
        "nouns-cool": "#D4D7E1",
        toolz: "#BFBB98",
        ideaz: "#A79FF3",
        buildz: "#E59487",
        filez: "#7D7D7D",
      },
    },
    screens: {
      xs: "200px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
