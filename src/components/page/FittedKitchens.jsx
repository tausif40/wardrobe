import React from 'react'
import Banner from '../Template/Banner';
import CTA from './CTA';
import Samples from '../Template/Samples';
import { Helmet } from 'react-helmet-async';

export default function FittedKitchens() {
	const data = {
		banner: "/assets/img/kitchen-banner.jpg",
		header: "FITTED KITCHENS",
		image: {
			src: "/assets/img/kitchens.jpg",
			width: 450,
			height: 320,
		},
		title: "Fitted Kitchen",
		highlightedText: "",
		paragraphs: [
			"Kitchen is a most functional area of your home and this is where the family meets after a hectic day. Your day begins at the kitchen and it ends here as well. We believe that that kitchen is the heart of your home, so our kitchen fitters offer bespoke services to create kitchens that are truly charismatic and functional",
			"Imagine a kitchen that’s as individual as you are, where everything has its place and every surface is smooth, sleek and ultra-stylish.",
			"Whether you have an idyllic country cottage style in mind, or you’re planning a cutting-edge cook’s paradise, you can trust us to bring your kitchen dream to life.",
			"We offer wide range of door selection, drawers, kitchen units in different colours",
			"No matter what the shape, style or dimension of your kitchen is our made-to-measure kitchen furniture fits exactly into the available space maximising the storage and functionality of the area. Our kitchen design services and products ensure to create unique designs for your kitchen that includes planning and installation(Dry Fitting only).",
			"Dry Fit means we don’t do electrical connections gas connections or plumbing.",
			"We manufacture the kitchens for your own specific needs and requirements.",
		],
	};

	const sampleData = {
		heading: "Samples of all our fitted kitchen"
	}
	return (
		<>
			<Helmet>
				<title>Fitted Kitchens | Custom Kitchen Designs & Installations</title>
				<meta name="description" content="Upgrade your kitchen with high-quality fitted kitchen designs. Custom cabinetry, space-saving layouts, and premium materials." />
				<meta name="keywords" content="fitted kitchens UK, modern kitchens, custom kitchen cabinets, space-saving kitchens" />
				<meta name="robots" content="index, follow" />
				<link rel="canonical" href="https://bestfittedwardrobe.co.uk/fitted-kitchens" />
				<script type="application/ld+json">
					{JSON.stringify({
						"@context": "https://schema.org",
						"@type": "Product",
						"name": "Fitted Kitchens",
						"image": "https://bestfittedwardrobe.co.uk/images/fitted-kitchens.jpg",
						"description": "Upgrade your kitchen with high-quality fitted kitchen designs. Custom cabinetry, space-saving layouts, and premium materials.",
						"brand": {
							"@type": "Brand",
							"name": "Best Fitted Wardrobes"
						},
						"offers": {
							"@type": "Offer",
							"url": "https://bestfittedwardrobe.co.uk/fitted-kitchens",
							"priceCurrency": "GBP",
							"availability": "https://schema.org/InStock"
						}

					})}
				</script >
				

			</Helmet>
			<Banner data={data} />
			<Samples data={sampleData} />
			<div className='my-20'>
				<CTA />
			</div>

		</>
	)
}

