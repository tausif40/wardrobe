const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

// Define your website's base URL
const BASE_URL = 'https://bestfittedwardrobe.co.uk';

// Define your static routes
const pages = [
	'/',
	'/wardrobes',
	'/contact',
	'/about-us',
	'/sliding-wardrobes',
	'/built-in-wardrobes',
	'/fitted-kitchens',
	'/sale',
	'/gallery',
	'/images/:id',
	'/terms-conditions',
	'/payment-terms-and-conditions',
];

async function generateSitemap() {
	const sitemap = new SitemapStream({ hostname: BASE_URL });

	// Add each route to the sitemap
	pages.forEach((page) => {
		sitemap.write({ url: page, changefreq: 'daily', priority: 0.8 });
	});

	sitemap.end();

	// Save the sitemap to the public folder
	const sitemapXml = await streamToPromise(sitemap);
	createWriteStream('./public/sitemap.xml').write(sitemapXml);

	console.log('✅ Sitemap generated successfully!');
}

generateSitemap();
