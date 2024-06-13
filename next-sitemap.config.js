// next-sitemap.config.js

/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.vandebharatairways.com/', // Ensure this URL is correct
    generateRobotsTxt: true,
    sitemapSize: 7000, // Adjust as needed
    changefreq: 'daily',
    priority: 0.8,
    exclude: ['/private/*'], // Check for unintended exclusions
};
