import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {

	const socialLink = [
		{ name: 'facebook', icon: '/assets/img/icons/facebook.png', link: '' },
		{ name: 'twitter', icon: '/assets/img/icons/twitter.png', link: '' },
		{ name: 'google', icon: '/assets/img/icons/google.png', link: '' },
		{ name: 'linkedIn', icon: '/assets/img/icons/linkedin.png', link: '' },
	]

	return (
		<>
			<footer className="bg-mySky text-white">
				<div className="container mx-auto px-4 py-8">
					<div className="flex justify-center space-x-6 mb-6">
						{socialLink?.map((social) => (
							<Link
								key={`/${social?.link}`}
								href="#"
								className="w-12 h-12 p-3 rounded-full bg-white text-[#4DD4D4] flex items-center justify-center"
							>
								<img src={social?.icon} alt="" />
								<span className="sr-only">{social?.name}</span>
							</Link>
						))}
					</div>
					<nav className="flex justify-center flex-wrap gap-y-3 text-sm mb-4">
						<Link href="#" className="px-4 border-r">HOME</Link>
						<Link href="#" className="px-4 border-r">ABOUT US</Link>
						<Link href="#" className="px-4 border-r">WARDROBES</Link>
						<Link href="#" className="px-4 border-r">SLIDING WARDROBES</Link>
						<Link href="#" className="px-4 border-r">BUILT IN WARDROBES</Link>
						<Link href="#" className="px-4 border-r">FITTED KITCHENS</Link>
						<Link href="#" className="px-4 border-r">SALE</Link>
						<Link href="#" className="px-4 border-r">GALLERY</Link>
						<Link href="#" className="px-4">CONTACT US</Link>
					</nav>
					<p className="text-center text-sm mt-8">
						© COPYRIGHT © 2023 BEST FITTED WARDROBE <br />
						ALL RIGHTS RESERVED
					</p>
				</div>
			</footer >
		</>
	)
}

export default Footer