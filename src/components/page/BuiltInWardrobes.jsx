import React from 'react'
import Banner from '../Template/Banner';
import CTA from './CTA';
import Samples from '../Template/Samples';
import { Helmet } from 'react-helmet-async';

export default function BuiltInWardrobes() {
	const data = {
		banner: "/assets/img/built-wardrop-Banner.jpg",
		header: "BUILT IN WARDROBES",
		image: {
			src: "/assets/img/built-wardrop.jpg",
			width: 450,
			height: 320,
		},
		title: "Bulit In Wardrobes",
		highlightedText: "",
		paragraphs: [
			"Inside your bulit in wardrobes and fitted wardrobes there is ample room to house all of your belongings. At Best Fitted Wardrobe, we work with you, listening, advising, planning and designing, to create storage solutions that are totally personalised to your needs.",
			"We design single or double height rails for your long or short outfits, high shelves for Winter duvets, pull out or pull-down tie racks, to name just a few.",
			"We have Glamour Cabinet solutions for concealed storage of everything from make up to hair appliances, we have big range of interior and exterior lighting solutions.",
			"For kids we have special designs to keep there clothes and toys."
		],
	};

	const sampleData = {
		heading: "Samples of all our Built in wardrobes"
	}

	return (
		<>
			<Helmet>
				<title>Built-in Wardrobes | Custom-Fitted Storage for Your Home</title>
				<meta name="description" content="Maximize your space with built-in wardrobes tailored to your needs. Choose from classic, modern, and luxury designs." />
				<meta name="keywords" content="built-in wardrobes UK, custom wardrobes, fitted bedroom wardrobes, modern storage solutions" />
				<meta name="robots" content="index, follow" />
				<link rel="canonical" href="https://bestfittedwardrobe.co.uk/built-in-wardrobes" />

				<script type="application/ld+json">
					{JSON.stringify({
						"@context": "https://schema.org",
						"@type": "Product",
						"name": "Built-in Wardrobes",
						"image": "https://bestfittedwardrobe.co.uk/images/built-in-wardrobes.jpg",
						"description": "Maximize your space with built-in wardrobes tailored to your needs. Choose from classic, modern, and luxury designs.",
						"brand": {
							"@type": "Brand",
							"name": "Best Fitted Wardrobes"
						},
						"offers": {
							"@type": "Offer",
							"url": "https://bestfittedwardrobe.co.uk/built-in-wardrobes",
							"priceCurrency": "GBP",
							"availability": "https://schema.org/InStock",
							"seller": {
								"@type": "Organization",
								"name": "Best Fitted Wardrobe"
							}
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

