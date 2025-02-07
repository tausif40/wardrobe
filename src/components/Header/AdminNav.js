import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';


function AdminNav() {

	const headerData = {
		contactInfo: { phone: "01708 7 56789", email: "info@bestfittedwardrobe.co.uk" },
	}

	return (
		<header className="w-full bg-white border-b">
			{/* Top Bar */}
			<div className="container mx-auto px-4 py-3 flex flex-wrap items-center justify-between">
				{/* Logo */}
				<Link to={'/admin/dashboard'} className="flex-shrink-0">
					<div className="flex items-center">
						<img src="/assets/img/logos/logo-last.png" alt="Best Fitted Wardrobe" className="w-44 lg:w-52" />
					</div>
				</Link>

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
				{/* <div className="lg:flex gap-3 hidden lg:block">
					{headerData.socialLinks.map((social, index) => (
						<Link key={index} href={social.link} className="bg-[#78D7E9] p-2 rounded-full hover:bg-[#6BC7D9]" target='_blank'>
							{<social.platform className="h-5 w-5 text-white" />}
						</Link>
					))}
				</div> */}
			</div>

		</header>
	)
}

export default AdminNav