module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "toadz-dark": "#061425",
        "toadz-green": "#657F1E",
        "toadz-gray": "#2E3635",
        "toadz-lightgray": "#e0e0e0",
        "nouns-warm": "#E1D8D5",
        "nouns-cool": "#D4D7E1",
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
