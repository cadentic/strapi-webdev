/*const withTM = require("next-transpile-modules")(["nextjs-components"]);
*/

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  /** images: {
    domains: ["localhost"],
  },**/
}

module.exports = {
  images: {
    domains: ["localhost"],
  },
}

/* module.exports = nextConfig */
