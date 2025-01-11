import { Mail, MapPin, Phone } from 'lucide-react'
import CTA from '../page/CTA';

const ContactUs = () => {
	return (
		<>
			<div div className='h-[450px] bg-gray-200 overflow-hidden' >
				<img src="/assets/img/bed1.jpeg" alt="" className='w-full object-cover' />
			</div >

			<div className="container mx-auto px-4 py-8 max-w-6xl">
				<div className="text-center my-8">
					<h1 className="text-4xl font-bold text-[#003087] mb-4">CONTACT US</h1>
					<h2 className="text-2xl mb-4">Bestfittedwardrobe</h2>
					<p className="text-gray-600 max-w-3xl mx-auto text-sm">
						Company Name : Best Fitted Wardrobe Address:Unit A3 Seedbed Centre Davidsonway Romford RM7 0AZ. MON-FRI 9:00A.M to 6:00P.M SAT:10:00A.M to 2:00P.M SUN: CLOSED
					</p>
					<div className="flex justify-center gap-4 mt-4">
						<a href="tel:01708756789" className="text-blue-600 hover:underline">01708 7 56789</a>
						<a href="tel:07961070327" className="text-blue-600 hover:underline">07961070327</a>
					</div>
					<a href="mailto:info@bestfittedwardrobe.co.uk" className="text-blue-600 hover:underline">
						info@bestfittedwardrobe.co.uk
					</a>
				</div>

				{/* Map */}
				<div className="mb-12 h-[400px] w-full rounded-lg overflow-hidden">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2480.1234567890123!2d0.1234567890123!3d51.1234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDA3JzM0LjQiTiAwwrAwNyc0My4yIkU!5e0!3m2!1sen!2suk!4v1234567890123!5m2!1sen!2suk"
						width="100%"
						height="100%"
						style={{ border: 0 }}
						allowFullScreen
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
				</div>

				{/* Get in Touch Section */}
				<div className="relative mb-12">
					<div className="absolute inset-0 bg-[#2A9D8F] opacity-90"></div>
					<div className="relative z-10 py-12 text-center text-white">
						<h2 className="text-4xl font-bold mb-8">Get in touch</h2>
						<form className="max-w-md mx-auto space-y-4 flex flex-col">
							<input type="text" placeholder="Name" className="bg-white px-4 py-2" />
							<input type="email" placeholder="Email" className="bg-white px-4 py-2" />
							<input type="tel" placeholder="Phone" className="bg-white px-4 py-2" />
							<textarea placeholder="Message" className="bg-white px-4 py-2" rows={4} />
							<button type="submit" className="w-full bg-white text-[#2A9D8F] hover:bg-gray-100 px-4 py-2">
								Send Message
							</button>
						</form>
					</div>
				</div>
				<CTA />
			</div>
		</>
	)
}

export default ContactUs;