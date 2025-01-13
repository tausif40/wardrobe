import React from 'react'
import { ChevronLeft, ChevronRight, Mail, Phone } from 'lucide-react'
import CTA from '../page/CTA'
import Banner from '../Template/Banner';

function AboutUs() {
	const data = {
		banner: "/assets/img/aboutBanner.jpg",
		header: "ABOUT US",
		image: {
			src: "/assets/img/aboutBanner.jpg",
			alt: "Modern fitted wardrobe",
			width: 450,
			height: 320,
		},
		title: "About",
		highlightedText: "Best Fitted Wardrobe",
		paragraphs: [
			"Best fitted wardrobe creates and installs luxury bespoke wardrobes and kitchens, designed and crafted in London and Essex. Employing a team of dedicated designers, cabinetmakers and fitters we prioritise innovative design, quality and service.",
			"With a collection of the very best materials from different suppliers, accessories and finishes, we can create a design especially for your requirements. Customer satisfaction is our main motive.",
			"We’re dedicated to work on a very personal level with our clients to produce something of really Fantastic look and quality.",
			"We Build the Wardrobes for your Specific needs and requirements.",
			"Best fitted wardrobe provides our clients the best quality product at an affordable price. We build a wide range of fitted furniture out of the best PVC (PET) and acrylic panels made of 18mm MDF (scratch-resistant). By sourcing only the very best quality materials and employing a team of some of the most experienced furniture makers, we can deliver the best in bespoke furniture built for your custom needs.",
			"Our processing time is quick; we aim to complete the project within two to three weeks from the date of order confirmation. We always keep our commitment to ensuring customer satisfaction.",
		],
	};
	return (
		<>
			<Banner data={data} />
			<div className='my-20'>
				<CTA />
			</div>
		</>
	)
}

export default AboutUs