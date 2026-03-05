/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://virginiacourtlawyer.com', // ← Change to your real domain once live
  generateRobotsTxt: true,                    // Also generates robots.txt (good)
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/api/*', '/404'],                // Exclude API routes and error pages
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
  },
};
