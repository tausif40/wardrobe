import React from 'react'
import Banner from '../Template/Banner';
import CTA from './CTA';
import Samples from '../Template/Samples';

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
	return (
		<>
			<Banner data={data} />
			<Samples />
			<div className='my-20'>
				<CTA />
			</div>

		</>
	)
}

