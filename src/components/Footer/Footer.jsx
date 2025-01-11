import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
	return (
		<>
			<footer className="bg-[#4DD4D4] text-white">
				<div className="container mx-auto px-4 py-8">
					<div className="flex justify-center space-x-4 mb-6">
						{[ 'Facebook', 'Twitter', 'Instagram', 'LinkedIn' ].map((social) => (
							<Link
								key={social}
								href="#"
								className="w-8 h-8 rounded-full bg-white text-[#4DD4D4] flex items-center justify-center"
							>
								<span className="sr-only">{social}</span>
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