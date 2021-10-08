/** @type {import('next').NextConfig} */

const withTM = require("next-transpile-modules")(["react-dvd-screensaver"]);

module.exports = withTM({
  reactStrictMode: false,
  webpack5: false, // you want to keep using Webpack 4
});
