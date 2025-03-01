import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';


function AdminNav() {
	const navigate = useNavigate()
	const headerData = {
		contactInfo: { phone: "01708 7 56789", email: "info@bestfittedwardrobe.co.uk" },
	}

	const handelLogout = () => {
		sessionStorage.clear();
		navigate('/')
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
				<div className="lg:flex items-center gap-8 text-heading font-sans text-base">
					<div className='lg:flex items-center gap-8 text-heading hidden lg:block font-sans text-base'>
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
					<div className='ml-6 bg-gray-800 h-10 w-28 rounded-full text-white flex items-center justify-center cursor-pointer' onClick={handelLogout}>
						<p className=''>Logout &rarr;</p>
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