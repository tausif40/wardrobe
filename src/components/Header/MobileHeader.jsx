import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search, X } from 'lucide-react';

const headerData = {
	navigationLinks: [
		{ title: "HOME", link: "/" },
		{ title: "ABOUT US", link: "/about-us" },
		{ title: "WARDROBES", link: "/Wardrobes" },
		{ title: "SLIDING WARDROBES", link: "/sliding-wardrobes" },
		{ title: "BUILT IN WARDROBES", link: "/built-in-wardrobes" },
		{ title: "FITTED KITCHENS", link: "/fitted-kitchens" },
		{ title: "SALE", link: "/sale" },
		{ title: "GALLERY", link: "/gallery" },
		{ title: "CONTACT US", link: "/contact" }
	],
	features: [
		{ image: "./assets/img/icons/england.png", text: "Made in UK" },
		{ image: "./assets/img/icons/bage.png", text: "10 Year Product Guarantee" },
		{ image: "./assets/img/icons/asset5.png", text: "Soft Close Doors As Standard" },
		{ image: "./assets/img/icons/hanger.png", text: "We fit wardrobes in less than 2-3 weeks" }
	]
};

const MobileHeader = () => {
	const [ isMenuOpen, setIsMenuOpen ] = useState(false);
	const [ isSearchOpen, setIsSearchOpen ] = useState(false);
	const menuRef = useRef(null);
	const searchRef = useRef(null);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (menuRef.current && !menuRef.current.contains(event.target)) {
				setIsMenuOpen(false);
			}
			if (searchRef.current && !searchRef.current.contains(event.target)) {
				setIsSearchOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<header className="bg-white top-0 left-0 right-0 z-50">
			<div className="container mx-auto px-4 py-3 flex flex-wrap items-center justify-between">
				{/* Logo */}
				<Link to={'/'} className="flex-shrink-0">
					<div className="flex items-center">
						<img src="/assets/img/logos/logo_bright.png" alt="Best Fitted Wardrobe" className="w-44 lg:w-52" />
					</div>
				</Link>
			</div>

			<nav className="container mx-auto px-6 bg-mySky">
				<div className="flex justify-between">
					<div className="flex items-center">
						<div ref={searchRef} className="relative">
							<button
								onClick={() => setIsSearchOpen(!isSearchOpen)}
								className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
							>
								<span className="sr-only">Open search</span>
								<Search className="h-6 w-6" />
							</button>
							<div
								className={`absolute left-0 mt-2 w-60 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 transition-all duration-300 ease-in-out ${isSearchOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
									}`}
							>
								<input
									type="text"
									placeholder="Search..."
									className="block w-full px-4 py-2 text-sm text-gray-700 focus:outline-none"
								/>
							</div>
						</div>
					</div>
					<div className="flex items-center">
						<div ref={menuRef} className="relative">
							<button
								onClick={() => setIsMenuOpen(!isMenuOpen)}
								className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
							>
								<span className="sr-only">Open main menu</span>
								{isMenuOpen ? (
									<X className="block h-6 w-6" aria-hidden="true" />
								) : (
									<Menu className="block h-6 w-6" aria-hidden="true" />
								)}
							</button>
							<div
								className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
									}`}
							>
								{headerData?.navigationLinks.map((item) => (
									<Link
										key={item.title}
										to={item.link}
										className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
										onClick={() => setIsMenuOpen(false)}
									>
										{item.title}
									</Link>
								))}
							</div>
						</div>
					</div>
				</div>
			</nav>
			{/* Features Banner */}
			<div className="container mx-auto  py-2">
				<div className="px-2 lg:px-16 xl:px-20 flex flex-wrap items-center justify-between gap-6 text-sm text-gray-600">
					{headerData.features.map((feature, index) => (
						<div key={index} className="flex items-center gap-1 xl:gap-2">
							<img src={feature?.image} className="w-3 lg:w-4 xl:w-6" />
							<span className='text-xs lg:text-sm xl:text-base'>{feature.text}</span>
						</div>
					))}
				</div>
			</div>
		</header>
	);
};

export default MobileHeader;

