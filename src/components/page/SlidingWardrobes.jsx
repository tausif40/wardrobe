import React from 'react'
import Banner from '../Template/Banner';
import CTA from './CTA';
import Samples from '../Template/Samples';

export default function SlidingWardrobes() {
	const data = {
		banner: "/assets/img/SlidingWardrobesBanner.jpg",
		header: "SLIDING WARDROBES",
		image: {
			src: "/assets/img/SlidingWardrobes.jpg",
			alt: "Modern fitted wardrobe",
			width: 450,
			height: 320,
		},
		title: "Sliding Wardrobes",
		highlightedText: "",
		paragraphs: [
			"You are Concern About the space best option is sliding wardrobes",
			"We have a fabulous range of styles to choose from. Over many years our Designers have created a collection of door styles and colours which when combined with our intelligent interiors will help us create your perfect fitted Wardrobe.",
			"Stunning sliding wardrobes and beautifully co-ordinated cabinetry will help create a peaceful haven for you to relax in or maybe you are looking for the practicality of the perfect storage solution, whatever you are looking to achieve – our designers will help you. They will show you exactly how your new fitted Wardrobe will look.",
		],
	};

	const sampleData = {
		heading: "Samples of all our sliding wardrobes"
	}

	return (
		<>
			<Banner data={data} />
			<Samples data={sampleData} />
			<div className='my-20'>
				<CTA />
			</div>

		</>
	)
}

