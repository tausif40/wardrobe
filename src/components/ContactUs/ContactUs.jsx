import CTA from '../page/CTA';
import { useState } from "react";
import axios from "axios";

const ContactUs = () => {

	const [ showPopup, setShowPopup ] = useState(false);
	const [ isLoading, setIsLoading ] = useState(false)
	const [ sendMessage, setSendMessage ] = useState('Send Message')
	const BASE_URL = process.env.REACT_APP_API_URL;
	const [ formData, setFormData ] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [ e.target.name ]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true)
		setSendMessage('Message sending...')
		console.log('formData', formData);
		try {
			const response = await axios.post(`${BASE_URL}/contact-us`, formData);
			console.log("Success:", response.data);
			setSendMessage('Send Successfully')
			setShowPopup(true);
			setTimeout(() => setShowPopup(false), 3000);
			setIsLoading(false)
			setFormData({
				name: "",
				email: "",
				phone: "",
				message: "",
			});
		} catch (error) {
			console.error("Error:", error);
			setSendMessage('Failed! Try again')
			setIsLoading(false)
		}
	};


	return (
		<>
			<div div className='max-h-[450px] bg-gray-200 overflow-hidden' >
				<img src="/assets/img/bed1.jpeg" alt="" className='w-full object-cover' />
			</div >

			<div className="container mx-auto px-4 py-8 mb-8 max-w-6xl">
				<div className="text-center mt-8 mb-12 text-text">
					<h1 className="text-4xl font-bold text-[#003087] mb-4">CONTACT US</h1>
					<h2 className="text-2xl mb-4">Bestfittedwardrobe</h2>
					<p className="text-gray-600 max-w-6xl mx-auto text-sm grid">
						<p>Company Name : Best Fitted Wardrobe Address:Unit A3 Seedbed Centre Davidsonway Romford RM7 0AZ.</p>
						<p>MON-FRI 9:00A.M to 6:00P.M SAT:10:00A.M to 2:00P.M SUN: CLOSED</p>
					</p>
					<div className="flex flex-col justify-center gap-2 mt-4">
						<a href="tel:01708756789" className="text-blue-600 hover:underline">01708 7 56789</a>
						<a href="tel:07961070327" className="text-blue-600 hover:underline">07961070327</a>
						<a href="mailto:info@bestfittedwardrobe.co.uk" className="text-blue-600 hover:underline">
							info@bestfittedwardrobe.co.uk
						</a>
					</div>
				</div>

				{/* Map */}
				<div className="mb-12 h-[400px] w-full overflow-hidden">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4959.776185089257!2d0.184226!3d51.570285!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a4cc4b0972e1%3A0x4a80ec7fe3d0bbde!2sSeedbed%20Centre%2C%20Davidson%20Way%2C%20Romford%20RM7%200AZ%2C%20UK!5e0!3m2!1sen!2sus!4v1736773342435!5m2!1sen!2sus"
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
					<div className="relative z-10 px-4 py-12 text-center text-gray-700">
						<h2 className="text-4xl font-bold mb-8">Get in touch</h2>
						<form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 flex flex-col">
							<input
								type="text"
								name="name"
								placeholder="Name"
								value={formData.name}
								onChange={handleChange}
								className="bg-white px-4 py-2 focus:outline-mySky"
								required
							/>
							<input
								type="email"
								name="email"
								placeholder="Email"
								value={formData.email}
								onChange={handleChange}
								className="bg-white px-4 py-2 focus:outline-mySky"
								required
							/>
							<input
								type="tel"
								name="phone"
								placeholder="Phone"
								value={formData.phone}
								onChange={handleChange}
								className="bg-white px-4 py-2 focus:outline-mySky"
								maxLength={11}
								pattern="\d{11}"
								title="Phone number must be exactly 11 digits"
								required
							/>
							<textarea
								name="message"
								placeholder="Message"
								value={formData.message}
								onChange={handleChange}
								className="bg-white px-4 py-2 focus:outline-mySky"
								rows={4}
								required
							/>
							<button
								type="submit"
								className="w-full bg-primary text-[#2A9D8F] hover:bg-primaryDark px-4 py-2 transition-all font-semibold"
								disabled={isLoading}
							>
								{sendMessage}
							</button>
						</form>
					</div>
				</div>
				<CTA />
			</div >
			{showPopup && (
				<div className="z-50 fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#f5fcd6] text-black px-6 py-3 rounded-md shadow-lg transition-opacity duration-500 ease-in-out animate-fadeInOut border-2 border-[#4be6bd]">
					<div className='text-md md:text-xl p-3 text-center'>
						Thank you for contacting us.<br />We will get back to you shortly.
					</div>
				</div>
			)
			}
		</>
	)
}

export default ContactUs;