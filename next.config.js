/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
});

const nextConfig = {
  darkMode: "class",
  i18n: {
    locales: ['en-US', 'sa'],
    defaultLocale: 'en-US',
  },
};

module.exports = withPWA(nextConfig);
