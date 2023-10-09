/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
});

const nextConfig = {
  darkMode: "class",
};

module.exports = withPWA(nextConfig);
