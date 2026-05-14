/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://lønbæks.dk',
  generateRobotsTxt: true,

  sitemapSize: 5000,

  changefreq: 'weekly',
  priority: 0.7,

  exclude: ['/admin', '/admin/*'],

  outDir: 'public',
}