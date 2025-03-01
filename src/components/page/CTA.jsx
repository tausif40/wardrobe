import React from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'
import { IoIosCheckmark } from "react-icons/io";

function CTA() {
	return (
		<section className='max-w-[1280px] m-auto px-0'>
			<div className=" grid grid-cols-1 lg:grid-cols-5">
				{/* Left Section - Contact Info */}
				<div className="bg-primary px-4 md:px-8 py-6 sm:py-8 md:p-10 flex flex-col md:col-span-2">
					<h2 className="text-3xl sm:text-4xl md:text-5xl text-white mb-8 font-anton">
						Have you got any questions.
					</h2>

					<div className="space-y-8 mt-4 text-sm sm:text-base md:text-lg">
						<div className="flex items-start gap-4">
							<div className="bg-gray-500/20 p-2 rounded-full">
								<MapPin className="h-4 w-4 md:w-8 md:h-8 text-white" />
							</div>
							<div className="text-heading ">
								<p className="font-semibold">Company Name : <span>Best Fitted Wardrobe</span></p>
								<p>Address:Unit A3 Seedbed Centre Davidsonway Romford RM7 0AZ.</p>
								<p>Mon-FRI 9:00A.M to 6:00P.M</p>
								<p>SAT:10:00A.M to 2:00P.M</p>
								<p>SUN: CLOSED</p>
							</div>
						</div>

						<div className="flex items-center gap-4">
							<div className="bg-gray-500/20 p-2 rounded-full">
								<Phone className="h-4 w-4 md:w-8 md:h-8 text-white" />
							</div>
							<div className="text-heading">
								<p>01708 7 56789</p>
								<p>07961070327</p>
							</div>
						</div>

						<div className="flex items-center gap-4">
							<div className="bg-gray-500/20 p-2 rounded-full">
								<Mail className="h-4 w-4 md:w-8 md:h-8 text-white" />
							</div>
							<p className="text-heading">info@bestfittedwardrobe.co.uk</p>
						</div>
					</div>
				</div>

				{/* Right Section - Finance Info */}
				<div
					className="p-8 md:p-10 flex flex-col md:col-span-3 min-h-[450px] md:h-[500px] lg:h-auto"
					style={{
						backgroundImage: `url(/assets/img/cta.jpeg)`,
						backgroundSize: 'cover',
						backgroundPosition: 'center'
					}}
				>
					<h2 className="text-3xl sm:text-4xl md:text-5xl text-center text-white mb-8 font-anton">
						FINANCE NOW AVAILABLE
					</h2>

					<div className="text-sm sm:text-base flex flex-wrap justify-center font-extralight">
						<div className="flex items-center">
							<p>Apply Online</p>
							<IoIosCheckmark size={40} />
						</div>
						<div className="flex items-center">
							<p>Only 10% Deposit</p>
							<IoIosCheckmark size={40} />
						</div>
						<div className="flex items-center">
							<p>Decisions in Seconds</p>
							<IoIosCheckmark size={40} />
						</div>
						<div className="flex items-center">
							<p>No Paperwork</p>
							<IoIosCheckmark size={40} />
						</div>
						<div className="flex items-center">
							<p>0% APR Representative</p>
							<IoIosCheckmark size={40} />
						</div>
						<div className="flex items-center">
							<p>Only 10% Deposit</p>
							<IoIosCheckmark size={40} />
						</div>
						<div className="flex items-center">
							<p>Decisions in Seconds</p>
							<IoIosCheckmark size={40} />
						</div>
						<div className="flex items-center">
							No paper work 6 months, 9 months, 10 months , 12 months Interest free credit.
							<IoIosCheckmark size={40} />
						</div>
					</div>
				</div>
			</div>
			<div className="mt-12 px-4 sm:px-8 text-[#3f3e3e] font-normal">
				<p className='tracking-wide'>
					Best fitted Wardrobe is registered in England and Wales. Registered no 10897780 Unit A3 SeedBed Center Davidsonway Romford RM7 0AZ. Best fitted Wardrobe acts as a credit broker and offers credit products from Omni Capital Retail Finance. Your application will be subject to a credit check using a recognised credit reference agency as part of our assessment process. *Credit available subject to status, UK residents aged 18 Years and over.
				</p>
			</div>
		</section>
	)
}

export default CTA