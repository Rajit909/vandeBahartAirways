// next-sitemap.config.js

/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.vandebharatairways.com/', // Replace with your actual domain
    generateRobotsTxt: true, // (optional) Generate a robots.txt file
    sitemapSize: 7000, // Limit the number of URLs per sitemap file
    changefreq: 'daily', // Frequency of page updates
    priority: 0.7, // Priority of URLs
    exclude: ['/admin/*','/private/*'], // Exclude specific paths or patterns
    transform: async (config, path) => {
        // Optionally transform the URL data
        return {
            loc: path, // The URL
            lastmod: new Date().toISOString(),
            changefreq: config.changefreq,
            priority: config.priority,
        };
    },
};
