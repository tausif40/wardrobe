import React from 'react'
import Banner from '../Template/Banner';
import CTA from './CTA';
import Samples from '../Template/Samples';
import { Helmet } from 'react-helmet-async';

function Wardrobes() {
	const data = {
		banner: "/assets/img/wardrobeBanner.jpg",
		header: "WARDROBES",
		image: {
			src: "/assets/img/wardrobe.jpg",
			alt: "Modern fitted wardrobe",
			width: 450,
			height: 320,
		},
		title: "WARDROBES",
		highlightedText: "",
		paragraphs: [
			"At Best Fitted Wardrobe we will work along with you in order to create the perfect storage solution that will not only be of a unique style and configuration, but tailor-made to the exact dimensions of your room or awkward space no matter how large or small.",
			"At Best Fitted Wardrobe we can stretch from floor to ceiling and from wall to wall, even fitting the most awkward shaped rooms. Inside all our wardrobes, storage space has been maximised to make room for an innovative range of storage solutions that are chosen with you in mind, and tailored by us to your precise needs and requirements.",
			"Then, when it comes to fitting, we will further tailor each and every wardrobe to your room or space, cutting and scribing the frame so they precisely fit neatly into every little space.",
			"The result will be a beautifully designed and crafted bedroom with more storage space than you could ever imagine. At Best Fitted Wardrobe we can give you the perfect space you never knew you had.",
		],
	};

	const sampleData = {
		heading: "Samples of all our Built in wardrobes"
	}

	return (
		<>
			<Helmet>
				<title>Fitted Wardrobes | Custom Built-In & Sliding Wardrobes in the UK</title>
				<meta name="description" content="Explore our range of fitted wardrobes, built-in wardrobes, and sliding wardrobes. Designed to maximize storage and enhance your home’s style." />
				<meta name="keywords" content="fitted wardrobes UK, custom-built wardrobes, built-in wardrobes, sliding wardrobes" />
				<meta name="robots" content="index, follow" />
				<link rel="canonical" href="https://bestfittedwardrobe.co.uk/wardrobes" />
				<script type="application/ld+json">
					{JSON.stringify({
						"@context": "https://schema.org",
						"@type": "Product",
						"name": "Fitted Wardrobes",
						"image": "https://bestfittedwardrobe.co.uk/images/fitted-wardrobes.jpg",
						"description": "Explore our range of fitted wardrobes, built-in wardrobes, and sliding wardrobes. Designed to maximize storage and enhance your home’s style.",
						"brand": {
							"@type": "Brand",
							"name": "Best Fitted Wardrobes"
						},
						"offers": {
							"@type": "Offer",
							"url": "https://bestfittedwardrobe.co.uk/wardrobes",
							"priceCurrency": "GBP",
							"availability": "https://schema.org/InStock"
						}
					})}
				</script>
			</Helmet>
			<Banner data={data} />
			<Samples data={sampleData} />
			<div className='my-20'>
				<CTA />
			</div>

		</>
	)
}

export default Wardrobes