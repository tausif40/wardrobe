const SitemapPlugin = require('sitemap-webpack-plugin').default;
const paths = [
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

module.exports = {
	// Other webpack configurations
	plugins: [
		new SitemapPlugin({ base: 'https://bestfittedwardrobe.co.uk', paths })
	]
};
