import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, Phone, Search, Menu } from 'lucide-react';
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGoogleplus } from "react-icons/io";


const Header = () => {
	let location = useLocation();
	const menuRef = useRef(null);
	const [ isSearchOpen, setIsSearchOpen ] = useState(false);
	const [ isMenuOpen, setIsMenuOpen ] = useState(false);

	const [ menuHeight, setMenuHeight ] = useState(0);

	useEffect(() => {
		if (menuRef.current) {
			setMenuHeight(isMenuOpen ? menuRef.current.scrollHeight : 0);
		}
	}, [ isMenuOpen ]);


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
			{ platform: FaFacebookF, link: "https://www.facebook.com/BestfittedWardrobeltd" },
			{ platform: FaXTwitter, link: "https://x.com" },
			{ platform: IoLogoGoogleplus, link: "#" },
			{ platform: BsInstagram, link: "https://www.instagram.com/bestfittedwardrobe" }
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
			{ image: "/assets/img/icons/england.png", text: "Made in UK" },
			{ image: "/assets/img/icons/bage.png", text: "10 Year Product Guarantee" },
			{ image: "/assets/img/icons/asset5.png", text: "Soft Close Doors As Standard" },
			{ image: "/assets/img/icons/hanger.png", text: "We fit wardrobes in less than 2-3 weeks" }
		]
	};

	return (
		<>

			<header className="w-full  ">
				{/* Top Bar */}
				<div className='bg-[#ffffff]'>
					<div className="container mx-auto px-4 py-3 flex flex-wrap items-center justify-between">
						{/* Logo */}
						<Link to={'/'} className="flex-shrink-0">
							<div className="flex items-center">
								<img src="/assets/img/logos/logo-last.png" alt="Best Fitted Wardrobe" className="w-44 lg:w-52" />
							</div>
						</Link>

						<div className="flex items-center	gap-10">
							{/* Contact Info */}
							<div className="md:flex items-center gap-8 text-heading hidden md:block font-sans text-base">
								<div className="flex items-center gap-2">
									<p className='bg-gray-100 rounded-full p-3'>
										<Phone className="h-5 w-5 text-[#5d8dcb]" />
									</p>
									<a href={`tel:${headerData.contactInfo.phone}`} className="">{headerData.contactInfo.phone}</a>
								</div>
								<div className="flex items-center gap-2">
									<p className='bg-gray-100 rounded-full p-3'>
										<Mail className="h-5 w-5 text-[#5d8dcb] " />
									</p>
									<a href={`mailto:${headerData.contactInfo.email}`} className="hover:text-heading">{headerData.contactInfo.email}</a>
								</div>
							</div>

							{/* Social Icons */}
							<div className="lg:flex gap-3 hidden lg:block">
								{headerData.socialLinks.map((social, index) => (
									<Link key={index} to={social.link} className="bg-mySky h-8 w-8 rounded-full hover:bg-[#6BC7D9] flex items-center justify-center" target='_blank'>
										{<social.platform className="h-4 w-4 text-white" />}
									</Link>
								))}
							</div>
						</div>
					</div>
				</div>

				{/* Main Navigation */}
				{/* <nav className="m-auto bg-mySky text-white">
					<div className="container mx-auto px-4">

						<div className='flex lg:block w-full justify-between'>
							<div className='m-[6px] px-2 py-[2px] block lg:hidden border rounded' onClick={() => setIsMenuOpen((pre) => !pre)}>
								<Menu className='text-primary' />
							</div>
							<div className="bg-primary ml-2 px-3 lg:px-4 py-2 lg:py-3 cursor-pointer lg:hidden block">
								<Search className="h-5 w-5 text-white" />
							</div>
						</div>

						<ul className={`flex flex-col lg:flex-row lg:justify-between lg:items-center lg:gap-1 ${isMenuOpen && 'pt-4'}`}>
							{headerData.navigationLinks.map((navLink, index) => (
								<>
									<li key={index} className={`text-base lg:font-light lg:text-[11px] lg:text-sm xl:text-base ${isMenuOpen ? 'block' : 'hidden'} lg:block border-t lg:border-t-0 px-2 lg:px-0 hover:bg-darkSky lg:hover:bg-transparent`}
										onClick={() => setIsMenuOpen((pre) => !pre)}>
										<Link to={navLink.link} className={`block py-3 hover:text-primary transition-all ${location.pathname === navLink.link && 'text-[#ebf58c]'} font-raleway font-normal`}>{navLink.title}</Link>
									</li>
									<li className='text-[#4ec1d8] hidden lg:block '>|</li>
								</>
							))}
							<li className="bg-primary ml-2 px-3 lg:px-4 py-2 lg:py-3 cursor-pointer hidden lg:block">
								<Search className="h-5 w-5 text-white" />
							</li>
						</ul>
					</div>
				</nav> */}

				<nav className="m-auto bg-mySky text-white">
					<div className="container mx-auto px-4">
						<div className="flex w-full justify-between lg:hidden">
							{/* Menu Toggle Button */}
							<div
								className="m-[6px] px-2 py-[2px] border rounded cursor-pointer"
								onClick={() => setIsMenuOpen((prev) => !prev)}
							>
								<Menu className="text-primary" />
							</div>
							<div className="bg-primary ml-2 px-3 lg:px-4 py-2 lg:py-3 cursor-pointer">
								<Search className="h-5 w-5 text-white" />
							</div>
						</div>

						{/* Smooth Animation */}
						<div
							ref={menuRef}
							style={{
								maxHeight: `${menuHeight}px`,
								overflow: "hidden",
								transition: "max-height 0.4s ease-in-out",
							}}
							className="lg:max-h-full lg:hidden"
						>
							<ul className="flex flex-col lg:flex-row lg:justify-between lg:items-center lg:gap-1">
								{headerData.navigationLinks.map((navLink, index) => (
									<li
										key={index}
										className="text-base lg:font-light lg:text-[11px] lg:text-sm xl:text-base border-t lg:border-t-0 px-2 lg:px-0 hover:bg-darkSky lg:hover:bg-transparent"
										onClick={() => setIsMenuOpen(false)}
									>
										<Link
											to={navLink.link}
											className={`block py-3 hover:text-primary transition-all ${location.pathname === navLink.link && "text-[#ebf58c]"
												} font-raleway font-normal`}
										>
											{navLink.title}
										</Link>
									</li>
								))}
								<li className="text-[#4ec1d8] hidden lg:block">|</li>
								<li className="bg-primary ml-2 px-3 lg:px-4 py-2 lg:py-3 cursor-pointer hidden lg:block">
									<Search className="h-5 w-5 text-white" />
								</li>
							</ul>
						</div>

						<ul className={`lg:flex flex-col lg:flex-row lg:justify-between lg:items-center lg:gap-1 hidden lg:block`}>
							{headerData.navigationLinks.map((navLink, index) => (
								<>
									<li key={index} className={`text-base lg:font-light lg:text-[11px] lg:text-sm xl:text-base  border-t lg:border-t-0 px-2 lg:px-0 hover:bg-darkSky lg:hover:bg-transparent`}>
										<Link to={navLink.link} className={`block py-3 hover:text-primary transition-all ${location.pathname === navLink.link && 'text-[#ebf58c]'} font-raleway font-normal`}>{navLink.title}</Link>
									</li>
									<li className='text-[#4ec1d8] hidden lg:block '>|</li>
								</>
							))}
							<li className="bg-primary ml-2 px-3 lg:px-4 py-2 lg:py-3 cursor-pointer hidden lg:block">
								<Search className="h-5 w-5 text-white" />
							</li>
						</ul>

					</div>
				</nav>

				{/* Features Banner */}
				<div className="mx-auto md:py-2 bg-[#ffffff]">
					<div className="container md:px-2 lg:px-16 xl:px-20 md:flex items-center justify-between gap-6 text-sm text-gray-600">
						{headerData.features.map((feature, index) => (
							<div key={index} className="flex items-center gap-2 md:gap-1 xl:gap-2 border-b md:border-b-0 p-2 md:p-0">
								<img src={feature?.image} className="w-3 lg:w-3 xl:w-5" alt='' />
								<span className='text-xs lg:text-sm'>{feature.text}</span>
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