import { Link, useLocation } from 'react-router-dom';
import { Mail, Phone, Search } from 'lucide-react';
import { GrGooglePlus } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";

const Header = () => {
	let location = useLocation();
	console.log(location);
	const headerData = {
		contactInfo: { phone: "01708 7 56789", email: "info@bestfittedwardrobe.co.uk" },
		socialLinks: [
			{ platform: FaFacebookF, link: "#" },
			{ platform: GrGooglePlus, link: "#" },
			{ platform: IoLogoTwitter, link: "#" },
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
		<header className="w-full bg-white">
			{/* Top Bar */}
			<div className="container mx-auto px-4 py-3 flex flex-wrap items-center justify-between">
				{/* Logo */}
				<Link to={'/'} className="flex-shrink-0">
					<div className="flex items-center">
						<img src="/assets/img/logos/logo.png" alt="Best Fitted Wardrobe" className="w-52" />
					</div>
				</Link>

				{/* Contact Info */}
				<div className="flex items-center gap-8 text-gray-600">
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
				<div className="flex gap-3">
					{headerData.socialLinks.map((social, index) => (
						<Link key={index} href={social.link} className="bg-[#78D7E9] p-2 rounded-full hover:bg-[#6BC7D9]">
							{<social.platform className="h-5 w-5 text-white" />}
						</Link>
					))}
				</div>
			</div>

			{/* Main Navigation */}
			<nav className="bg-[#78D7E9] text-white">
				<div className="container mx-auto px-4">
					<ul className="flex flex-wrap justify-between">
						{headerData.navigationLinks.map((navLink, index) => (
							<li key={index}>
								<Link to={navLink.link} className={`block px-4 py-3 hover:bg-[#6BC7D9] ${location.pathname == navLink.link && 'text-primary'}`}>{navLink.title}</Link>
							</li>
						))}
						<li className="bg-primary px-4 py-3">
							<Search className="h-5 w-5 text-gray-700" />
						</li>
					</ul>
				</div>
			</nav>

			{/* Features Banner */}
			<div className="container mx-auto  py-2">
				<div className="px-20 flex flex-wrap items-center justify-between gap-4 text-sm text-gray-600">
					{headerData.features.map((feature, index) => (
						<div key={index} className="flex items-center gap-2">
							<img src={feature?.image} className="w-6" />
							<span>{feature.text}</span>
						</div>
					))}
				</div>
			</div>
		</header>
	);
};

export default Header;