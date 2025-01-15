import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, Phone, Search, Menu } from 'lucide-react';
import { GrGooglePlus } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { PiLineVerticalLight } from "react-icons/pi";
import MobileHeader from './MobileHeader';
import DeviceChecker from '../../utils/DeviceChecker';
import { FaXTwitter } from "react-icons/fa6";


const Header = () => {
	let location = useLocation();
	const deviceType = DeviceChecker();
	const width = window.innerWidth;

	const [ isSearchOpen, setIsSearchOpen ] = useState(false);
	const [ isMenuOpen, setIsMenuOpen ] = useState(false);

	const searchRef = useRef(null);
	useEffect(() => {
		function handleClickOutside(event) {
			if (searchRef.current && !searchRef.current.contains(event.target)) {
				setIsSearchOpen(false);
			}
		}
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	const headerData = {
		contactInfo: { phone: "01708 7 56789", email: "info@bestfittedwardrobe.co.uk" },
		socialLinks: [
			{ platform: FaFacebookF, link: "https://www.facebook.com/BestFittedWardrobe" },
			{ platform: FaXTwitter, link: "#" },
			{ platform: GrGooglePlus, link: "#" },
			{ platform: BsInstagram, link: "#" }
		],
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

	return (
		<>
			{/* {deviceType === 'Mobile'
				? <MobileHeader /> : */}
			<header className="w-full bg-white">
				{/* Top Bar */}
				<div className="container mx-auto px-4 py-3 flex flex-wrap items-center justify-between">
					{/* Logo */}
					<Link to={'/'} className="flex-shrink-0">
						<div className="flex items-center">
							<img src="/assets/img/logos/logo.png" alt="Best Fitted Wardrobe" className="w-44 lg:w-52" />
						</div>
					</Link>

					{/* Contact Info */}
					<div className="md:flex items-center gap-8 text-gray-600 hidden md:block">
						<div className="flex items-center gap-2">
							<Phone className="h-5 w-5 text-[#78D7E9]" />
							<a href={`tel:${headerData.contactInfo.phone}`} className="hover:text-[#78D7E9]">{headerData.contactInfo.phone}</a>
						</div>
						<div className="flex items-center gap-2">
							<Mail className="h-5 w-5 text-[#78D7E9]" />
							<a href={`mailto:${headerData.contactInfo.email}`} className="hover:text-[#78D7E9]">{headerData.contactInfo.email}</a>
						</div>
					</div>

					{/* Social Icons */}
					<div className="lg:flex gap-3 hidden lg:block">
						{headerData.socialLinks.map((social, index) => (
							<Link key={index} href={social.link} className="bg-[#78D7E9] p-2 rounded-full hover:bg-[#6BC7D9]" target='_blank'>
								{<social.platform className="h-5 w-5 text-white" />}
							</Link>
						))}
					</div>
				</div>

				{/* Main Navigation */}
				<nav className="bg-[#78D7E9] text-white">
					<div className="container mx-auto px-4">

						<div className='flex md:block w-full justify-between'>
							<div className='m-[6px] px-2 py-[2px] block md:hidden border rounded' onClick={() => setIsMenuOpen((pre) => !pre)}>
								<Menu className='text-primary' />
							</div>
							<div className="bg-primary ml-2 px-3 lg:px-4 py-2 lg:py-3 cursor-pointer md:hidden block">
								<Search className="h-5 w-5 text-white" />
							</div>
						</div>

						<ul className={`flex flex-col md:flex-row md:justify-between md:items-center md:gap-1 ${isMenuOpen && 'pt-4'}`}>
							{headerData.navigationLinks.map((navLink, index) => (
								<>
									<li key={index} className={`text-base md:font-light md:text-[11px] lg:text-sm xl:text-base ${isMenuOpen ? 'block' : 'hidden'} md:block border-t md:border-t-0 px-2 md:px-0 hover:bg-darkSky md:hover:bg-transparent`} onClick={() => setIsMenuOpen((pre) => !pre)}>
										<Link to={navLink.link} className={`block py-3 hover:text-primary transition-all ${location.pathname == navLink.link && 'text-primary'}`}>{navLink.title}</Link>
									</li>
									<li className='text-[#4ec1d8] hidden md:block '>|</li>
								</>
							))}
							<li className="bg-primary ml-2 px-3 lg:px-4 py-2 lg:py-3 cursor-pointer hidden md:block">
								<Search className="h-5 w-5 text-white" />
							</li>
						</ul>
					</div>
				</nav>

				{/* Features Banner */}
				<div className="container mx-auto md:py-2">
					<div className="md:px-2 lg:px-16 xl:px-20 md:flex items-center justify-between gap-6 text-sm text-gray-600">
						{headerData.features.map((feature, index) => (
							<div key={index} className="flex items-center gap-2 md:gap-1 xl:gap-2 border-b md:border-b-0 p-2 md:p-0">
								<img src={feature?.image} className="w-3 lg:w-4 xl:w-6" />
								<span className='text-xs lg:text-sm xl:text-base'>{feature.text}</span>
							</div>
						))}
					</div>
				</div>
			</header>
			{/* } */}
		</>
	);
};

export default Header;