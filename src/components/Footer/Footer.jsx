import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {

	const socialLink = [
		{ name: 'facebook', icon: '/assets/img/icons/facebook.png', link: 'https://www.facebook.com/BestfittedWardrobeltd' },
		{ name: 'twitter', icon: '/assets/img/icons/twitter.png', link: 'https://x.com/' },
		{ name: 'google', icon: '/assets/img/icons/google.png', link: '' },
		{ name: 'instagram', icon: '/assets/img/icons/linkedin.png', link: 'https://www.instagram.com/bestfittedwardrobe/' },
	]


	return (
		<>
			<footer className="bg-mySky text-white">
				<div className="container mx-auto px-4 py-8">
					<div className="flex justify-center space-x-6 mb-6">
						{socialLink?.map((social, index) => (
							<Link
								key={index}
								to={`${social?.link}`}
								className="w-12 h-12 p-3 rounded-full bg-white text-[#4DD4D4] flex items-center justify-center"
								target='_blank'
							>
								<img src={social?.icon} alt="" />
								<span className="sr-only">{social?.name}</span>
							</Link>
						))}
					</div>
					<nav className="flex justify-center flex-wrap gap-y-3 text-sm mb-4 lg:px-20">
						<Link to="/" className="px-4 border-r hover:text-pretty">HOME</Link>
						<Link to="/about-us" className="px-4 border-r">ABOUT US</Link>
						<Link to="/Wardrobes" className="px-4 border-r">WARDROBES</Link>
						<Link to="/sliding-wardrobes" className="px-4 border-r">SLIDING WARDROBES</Link>
						<Link to="/built-in-wardrobes" className="px-4 border-r">BUILT IN WARDROBES</Link>
						<Link to="/built-in-wardrobes" className="px-4 border-r">FITTED KITCHENS</Link>
						<Link to="/sale" className="px-4 border-r">SALE</Link>
						<Link to="/gallery" className="px-4 border-r">GALLERY</Link>
						<Link to="/contact" className="px-4 border-r">CONTACT US</Link>
						<Link to="/terms-conditions" className="px-4 border-r">Terms & Conditions</Link>
						<Link to="payment-terms-and-conditions" className="px-4">Payment and Cancellation Terms</Link>
					</nav>

					<p className="text-center text-sm mt-8 text-heading">
						© COPYRIGHT © 2025 BEST FITTED WARDROBE <br />
						ALL RIGHTS RESERVED
					</p>
				</div>
			</footer >
		</>
	)
}

export default Footer
