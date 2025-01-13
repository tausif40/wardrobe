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
			<footer className="bg-[#4DD4D4] text-white">
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
					<nav className="flex justify-center space-x-6 text-sm mb-4">
						<Link href="#" className="hover:underline">HOME</Link>
						<Link href="#" className="hover:underline">ABOUT US</Link>
						<Link href="#" className="hover:underline">WARDROBES</Link>
						<Link href="#" className="hover:underline">SLIDING WARDROBES</Link>
						<Link href="#" className="hover:underline">BUILT IN WARDROBES</Link>
						<Link href="#" className="hover:underline">FITTED KITCHENS</Link>
						<Link href="#" className="hover:underline">SALE</Link>
						<Link href="#" className="hover:underline">GALLERY</Link>
						<Link href="#" className="hover:underline">CONTACT US</Link>
					</nav>
					<p className="text-center text-sm">
						© COPYRIGHT © 2023 BEST FITTED WARDROBE | ALL RIGHTS RESERVED
					</p>
				</div>
			</footer>
		</>
	)
}

export default Footer