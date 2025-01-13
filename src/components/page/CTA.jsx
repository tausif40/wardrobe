import React from 'react'
import { MapPin, Phone, Mail, Check } from 'lucide-react'
import { GiCheckMark } from "react-icons/gi";
import { IoIosCheckmark } from "react-icons/io";

function CTA() {
	return (
		<section className='max-w-[1232px] m-auto px-0'>
			<div className=" grid grid-cols-1 md:grid-cols-5">
				{/* Left Section - Contact Info */}
				<div className="bg-primary px-8 md:p-10 flex flex-col md:col-span-2">
					<h2 className="text-3xl md:text-5xl font-bold md:font-extrabold text-white mb-8 leading-tight tracking-tight">
						Have you got any questions.
					</h2>

					<div className="space-y-8 mt-4">
						<div className="flex items-start gap-4">
							<div className="bg-gray-500/20 p-2 rounded-full">
								<MapPin className="w-8 h-8 text-white" />
							</div>
							<div className="text-heading text-lg">
								<p className="font-semibold">Company Name : <span>Best Fitted Wardrobe</span></p>
								<p>Address:Unit A3 Seedbed Centre Davidsonway Romford RM7 0AZ.</p>
								<p>Mon-FRI 9:00A.M to 6:00P.M</p>
								<p>SAT:10:00A.M to 2:00P.M</p>
								<p>SUN: CLOSED</p>
							</div>
						</div>

						<div className="flex items-center gap-4">
							<div className="bg-gray-500/20 p-2 rounded-full">
								<Phone className="w-8 h-8 text-white" />
							</div>
							<div className="text-heading text-lg">
								<p>01708 7 56789</p>
								<p>07961070327</p>
							</div>
						</div>

						<div className="flex items-center gap-4">
							<div className="bg-gray-500/20 p-2 rounded-full">
								<Mail className="w-8 h-8 text-white" />
							</div>
							<p className="text-heading text-lg">info@bestfittedwardrobe.co.uk</p>
						</div>
					</div>
				</div>

				{/* Right Section - Finance Info */}
				<div
					className="p-8 md:p-10 flex flex-col md:col-span-3"
					style={{
						backgroundImage: `url(/assets/img/cta.jpeg)`,
						backgroundSize: 'cover',
						backgroundPosition: 'center'
					}}
				>
					<h2 className="text-3xl md:text-5xl font-bold md:font-extrabold text-white mb-8 leading-tight tracking-tight">
						FINANCE NOW AVAILABLE
					</h2>

					<div className=" flex flex-wrap justify-center font-extralight">
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
							<p>No paper work 6 months, 9 months, 10 months , 12 months Interest free credit.</p>
							<IoIosCheckmark size={40} />
						</div>
					</div>
				</div>
			</div>
			<div className="mt-12 px-8 text-text font-light">
				<p className='tracking-wide	'>
					Best fitted Wardrobe is registered in England and Wales. Registered no 10897780 Unit A3 SeedBed Center Davidsonway Romford RM7 0AZ. Best fitted Wardrobe acts as a credit broker and offers credit products from Omni Capital Retail Finance. Your application will be subject to a credit check using a recognised credit reference agency as part of our assessment process. *Credit available subject to status, UK residents aged 18 Years and over.
				</p>
			</div>
		</section>
	)
}

export default CTA