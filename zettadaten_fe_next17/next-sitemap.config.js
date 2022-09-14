/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'http://localhost:4845',
    generateRobotsTxt: true, // (optional)
    // ...other options
}