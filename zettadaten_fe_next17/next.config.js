/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
 /* swcMinify: true,
  compiler: {
    styledComponents: true,
  }, */
}

module.exports = {
  images: {
    domains: ["localhost:1337"],
  },
  i18n: {
    locales: ['en-US', 'fr', 'nl-NL', 'nl-BE'],
    defaultLocale: 'en-US',

    domains: [
      {
        domain: 'localhost:4845',
        domain: 'localhost:1337',
    },
      {
        // Note: subdomains must be included in the domain value to be matched
        // e.g. www.example.com should be used if that is the expected hostname
        domain: 'localhost',
        defaultLocale: 'en-US',
      },
      {
        domain: 'example.fr',
        defaultLocale: 'fr',
      },
      {
        domain: 'example.nl',
        defaultLocale: 'nl-NL',
        // specify other locales that should be redirected
        // to this domain
        locales: ['nl-BE'],
      },
    ],
  },
}

module.exports = nextConfig
