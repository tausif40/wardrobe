import React from 'react'
import { MapPin, Phone, Mail, Check } from 'lucide-react'

function CTA() {
	return (
		<section className='mb-12'>
			<div className=" grid md:grid-cols-2">
				{/* Left Section - Contact Info */}
				<div className="bg-[#d4db4e] p-8 md:p-12 flex flex-col">
					<h1 className="text-4xl md:text-6xl font-bold text-white mb-12 leading-tight">
						Have you got any questions.
					</h1>

					<div className="space-y-8 mt-4">
						<div className="flex items-start gap-4">
							<div className="bg-white/20 p-2 rounded-full">
								<MapPin className="w-6 h-6 text-white" />
							</div>
							<div className="text-white">
								<p className="font-semibold">Company Name : Best Fitted Wardrobe</p>
								<p>Address:Unit A3 Seedbed Centre</p>
								<p>Davidsonway Romford RM7 0AZ.</p>
								<p>Mon-FRI 9:00A.M to 6:00P.M</p>
								<p>SAT:10:00A.M to 2:00P.M</p>
								<p>SUN: CLOSED</p>
							</div>
						</div>

						<div className="flex items-center gap-4">
							<div className="bg-white/20 p-2 rounded-full">
								<Phone className="w-6 h-6 text-white" />
							</div>
							<div className="text-white">
								<p>01708 7 56789</p>
								<p>07961070327</p>
							</div>
						</div>

						<div className="flex items-center gap-4">
							<div className="bg-white/20 p-2 rounded-full">
								<Mail className="w-6 h-6 text-white" />
							</div>
							<p className="text-white">info@bestfittedwardrobe.co.uk</p>
						</div>
					</div>
				</div>

				{/* Right Section - Finance Info */}
				<div
					className="bg-[#4aafbc] p-8 md:p-12 flex flex-col"
					style={{
						backgroundImage: `linear-gradient(rgba(74, 175, 188, 0.9), rgba(74, 175, 188, 0.9)), url(${process.env.NEXT_PUBLIC_IMAGE_URL})`,
						backgroundSize: 'cover',
						backgroundPosition: 'center'
					}}
				>
					<h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
						FINANCE NOW AVAILABLE
					</h2>

					<div className="space-y-4 text-white">
						<div className="flex items-center gap-2">
							<Check className="w-5 h-5 flex-shrink-0" />
							<p>Apply Online</p>
						</div>
						<div className="flex items-center gap-2">
							<Check className="w-5 h-5 flex-shrink-0" />
							<p>Only 10% Deposit</p>
						</div>
						<div className="flex items-center gap-2">
							<Check className="w-5 h-5 flex-shrink-0" />
							<p>Decisions in Seconds</p>
						</div>
						<div className="flex items-center gap-2">
							<Check className="w-5 h-5 flex-shrink-0" />
							<p>No Paperwork</p>
						</div>
						<div className="flex items-center gap-2">
							<Check className="w-5 h-5 flex-shrink-0" />
							<p>0% APR</p>
						</div>
					</div>

					<div className="mt-8 text-white text-sm">
						<p className="mb-4">
							Representative ✓ Only 10% Deposit, Decisions in Seconds , No paper work 6 months, 9months ,
							10 months , 12 months Interest free credit ✓
						</p>
					</div>
				</div>
			</div>
			<div className="mt-12 px-12 text-text font-light">
				<p>
					Best fitted Wardrobe is registered in England and Wales. Registered no 10897780 Unit A3 SeedBed Center Davidsonway Romford RM7 0AZ. Best fitted Wardrobe acts as a credit broker and offers credit products from Omni Capital Retail Finance. Your application will be subject to a credit check using a recognised credit reference agency as part of our assessment process. *Credit available subject to status, UK residents aged 18 Years and over.
				</p>
			</div>
		</section>
	)
}

export default CTA