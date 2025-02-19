import React, { useEffect, useState } from 'react';
import { Award as Wardrobe, ChevronDown, CheckCircle2, Menu, X, Star, Clock, Shield, PenTool as Tool, Palette, Ruler, Heart, Sparkles, Gem, Settings, Users, Home, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import CTA from '../page/CTA';
import toast from 'react-hot-toast';
import axios from 'axios';

function LandingPages() {
	const [ isOpen, setIsOpen ] = useState(false);
	const [ showPopup, setShowPopup ] = useState(false);
	const [ isLoading, setIsLoading ] = useState(false)
	const [ sendMessage, setSendMessage ] = useState('Send Message')
	const [ errorMessage, setErrorMessage ] = useState(false)

	const BASE_URL = 'https://admin.bestfittedwardrobe.co.uk';
	console.log(BASE_URL);
	const [ formData, setFormData ] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	});

	const handleChange = (e) => {
		if (e.target.name === 'phone') {
			setErrorMessage(false)
		}
		setFormData({ ...formData, [ e.target.name ]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true)
		console.log('formData', formData);
		if (formData.phone.length !== 11) {
			toast.error('Phone number must be 11 digits')
			setErrorMessage(true)
			setIsLoading(false)
			return;
		}
		try {
			setSendMessage('Message sending...')
			await axios.post(`${BASE_URL}/contact-us`, formData).then((res) => {
				console.log("Success:", res.data);
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
			});
		} catch (error) {
			console.error("Error:", error);
			setSendMessage('Failed! Try again')
			setIsLoading(false)
		}
	};

	return (
		<div className="min-h-screen bg-white scroll-smooth">
			{/* Hero Section */}
			<header className="bg-gradient-to-r from-[#dce775] to-[#4dd0e1] text-gray-800 relative">
				<nav className="container mx-auto px-6 py-4 flex justify-between items-center">
					<Link to={'/'} className="flex-shrink-0">
						<div className="flex items-center">
							<img src="/assets/img/logos/logo-last.png" alt="Best Fitted Wardrobe" className="w-44 lg:w-52" />
						</div>
					</Link>
					{/* Mobile Menu Button */}
					<button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-800 focus:outline-none">
						{isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
					</button>

					<div className="hidden md:flex space-x-8">
						<a href="#features" className="hover:text-white transition">Features</a>
						<a href="#products" className="hover:text-white transition">Products</a>
						<a href="#process" className="hover:text-white transition">Our Process</a>
						<a href="#materials" className="hover:text-white transition">Materials</a>
						<a href="#testimonials" className="hover:text-white transition">Testimonials</a>
						<a href="#contact" className="hover:text-white transition">Contact</a>
					</div>
				</nav>

				{isOpen && (
					<div className="md:hidden bg-white/50  shadow-lg rounded-lg mx-4 mt-2 p-4 flex flex-col space-y-4">
						<a href="#features" className="hover:text-gray-800 transition" onClick={() => setIsOpen(false)}>Features</a>
						<a href="#products" className="hover:text-gray-800 transition" onClick={() => setIsOpen(false)}>Products</a>
						<a href="#process" className="hover:text-gray-800 transition" onClick={() => setIsOpen(false)}>Our Process</a>
						<a href="#materials" className="hover:text-gray-800 transition" onClick={() => setIsOpen(false)}>Materials</a>
						<a href="#testimonials" className="hover:text-gray-800 transition" onClick={() => setIsOpen(false)}>Testimonials</a>
						<a href="#contact" className="hover:text-gray-800 transition" onClick={() => setIsOpen(false)}>Contact</a>
					</div>
				)}

				<div className="container mx-auto px-6 py-24">
					<div className="flex flex-col md:flex-row items-center gap-8">
						<div className="md:w-1/2 mb-16 md:mb-0">
							<h1 className="text-5xl md:text-6xl font-bold mb-8">
								Transform Your Space with Custom Wardrobes
							</h1>
							<p className="text-xl mb-8">
								Discover our premium collection of bespoke wardrobes designed to bring elegance and organization to your home. With over 15 years of expertise, we create storage solutions that perfectly blend functionality with stunning aesthetics.
							</p>
							<div className="flex flex-col sm:flex-row gap-4">
								<a href="#contact" className="bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition">
									Book Consultation
								</a>
								{/* <button className="bg-white/80 backdrop-blur-sm px-8 py-3 rounded-lg hover:bg-white transition">
									View Catalog
								</button> */}
							</div>
						</div>
						<div className="md:w-1/2">
							<img
								src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80"
								alt="Modern Wardrobe"
								className="rounded-lg shadow-2xl"
							/>
						</div>
					</div>
					<div className="flex justify-center mt-12">
						<ChevronDown className="w-8 h-8 animate-bounce" />
					</div>
				</div>
			</header>

			{/* Stats Section */}
			<section className="py-16 bg-gradient-to-r from-[#dce775]/10 to-[#4dd0e1]/10">
				<div className="container mx-auto px-6">
					<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
						{stats.map((stat, index) => (
							<div key={index} className="text-center">
								<p className="text-4xl font-bold text-[#3fa69a] mb-2">{stat.value}</p>
								<p className="text-gray-600">{stat.label}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section id="features" className="py-20">
				<div className="container mx-auto px-6">
					<h2 className="text-4xl font-bold text-center mb-16 text-headingGray">Why Choose Us</h2>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
						{features.map((feature, index) => (
							<div key={index} className="text-center">
								<div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition hover:border-[#3fa69a] border-2">
									<feature.icon className="w-12 h-12 mx-auto mb-6 text-[#4dd0e1]" />
									<h3 className="text-xl font-bold mb-4 text-[#212121]">{feature.title}</h3>
									<p className="text-gray-600 h-20">{feature.description}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Process Section */}
			<section id="process" className="py-20 bg-gradient-to-r from-[#dce775]/10 to-[#4dd0e1]/10">
				<div className="container mx-auto px-6">
					<h2 className="text-4xl font-bold text-center mb-16">Our Design Process</h2>
					<div className="grid md:grid-cols-4 gap-8">
						{process.map((step, index) => (
							<div key={index} className="relative">
								<div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition h-full">
									<div className="absolute -top-4 -left-4 w-12 h-12 bg-[#3fa69a] rounded-full flex items-center justify-center text-white font-bold text-xl">
										{index + 1}
									</div>
									<step.icon className="w-12 h-12 mb-6 text-[#4dd0e1]" />
									<h3 className="text-xl font-bold mb-4">{step.title}</h3>
									<p className="text-gray-600">{step.description}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Materials Section */}
			<section id="materials" className="py-20">
				<div className="container mx-auto px-6">
					<h2 className="text-4xl font-bold text-center mb-16">Premium Materials</h2>
					<div className="grid md:grid-cols-3 gap-12">
						{materials.map((material, index) => (
							<div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
								<img
									src={`/assets/img/landing/${material.image}`}
									alt={material.title}
									className="w-full h-48 object-cover border"
								/>
								<div className="p-6">
									<h3 className="text-xl font-bold mb-4">{material.title}</h3>
									<p className="text-gray-600 mb-4">{material.description}</p>
									<ul className="space-y-2">
										{material.features.map((feature, fIndex) => (
											<li key={fIndex} className="flex items-center space-x-2">
												<CheckCircle2 className="w-5 h-5 text-[#4dd0e1]" />
												<span>{feature}</span>
											</li>
										))}
									</ul>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Products Showcase */}
			<section id="products" className="py-20 bg-gray-50">
				<div className="container mx-auto px-6">
					<h2 className="text-4xl font-bold text-center mb-16">Our Collections</h2>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{products.map((product, index) => (
							<div key={index} className="group relative overflow-hidden rounded-lg">
								<img
									src={product.image}
									alt={product.title}
									className="w-full h-[400px] object-cover transition group-hover:scale-105"
								/>
								<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
									<h3 className="text-white text-xl font-bold mb-2">{product.title}</h3>
									<p className="text-white/80 mb-4">{product.description}</p>
									<ul className="space-y-2">
										{product.features.map((feature, fIndex) => (
											<li key={fIndex} className="flex items-center space-x-2 text-white/90">
												<CheckCircle2 className="w-4 h-4" />
												<span>{feature}</span>
											</li>
										))}
									</ul>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section id="testimonials" className="py-20">
				<div className="container mx-auto py-12 px-8 rounded-md">
					<h2 className="text-4xl font-bold text-center mb-16">What Our Clients Say</h2>
					<div className="flex flex-col gap-8 my-6">
						{testimonials.map((testimonial, index) => (
							<div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition border">
								<div className='flex gap-8'>
									<div className="flex items-center">
										<img
											src={testimonial.avatar}
											alt=''
											className="w-12 h-12 rounded-full object-cover mr-4 bg-gray-200"
										/>
										<div>
											<p className="font-bold">{testimonial.name}</p>
											<p className="text-gray-600 text-sm">{testimonial.location}</p>
										</div>
									</div>
									<div className="flex items-center mb-4">
										{[ ...Array(5) ].map((_, i) => (
											<Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
										))}
									</div>
								</div>
								<p className="text-gray-600 mt-6 italic">"{testimonial.content}"</p>

							</div>
						))}
					</div>
				</div>
			</section>

			{/* Services Grid */}
			<section className="py-20 bg-gradient-to-r from-[#dce775]/10 to-[#4dd0e1]/10">
				<div className="container mx-auto px-6">
					<h2 className="text-4xl font-bold text-center mb-16">Comprehensive Services</h2>
					<div className="grid md:grid-cols-4 gap-8">
						{services.map((service, index) => (
							<div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition text-center">
								<service.icon className="w-12 h-12 mx-auto mb-4 text-[#4dd0e1]" />
								<h3 className="font-bold mb-2">{service.title}</h3>
								<p className="text-gray-600 text-sm">{service.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section id="contact" className="py-20 bg-[#3fa69a]">
				<div className="container mx-auto px-6">
					<h2 className="text-4xl font-bold text-center mb-16">Get In Touch</h2>
					<div className="grid md:grid-cols-2 gap-8 md::gap-10 lg:gap-16">
						{/* Map */}
						<div className="w-full h-[300px] md:h-auto overflow-hidden">
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
						<div className="bg-slate-200 px-8 py-8 shadow-sm">
							<form onSubmit={handleSubmit} className="mx-auto space-y-4 flex flex-col">
								<input
									type="text"
									name="name"
									placeholder="Name"
									value={formData.name}
									onChange={handleChange}
									className="bg-white px-4 py-2 focus:outline-mySky border"
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
									type="number"
									name="phone"
									placeholder="Phone"
									value={formData.phone}
									onChange={handleChange}
									className={`bg-white px-4 py-2 focus:outline-mySky ${errorMessage && 'border-2 border-red-600 text-red-500'}`}
									required
									maxLength="11"
									pattern="\d{11}"
									title="Phone number must be exactly 11 digits"
								/>
								{/* {errorMessage && <p className='text-red-700 text-sm text-start'>Phone number must be 11 digits</p>} */}
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
				</div>
			</section>
			<div className='py-12' >
				<CTA />
			</div>
			{/* Footer */}
			{/* <footer className="bg-gray-800 text-white py-12">
				<div className="container mx-auto px-6">
					<div className="grid md:grid-cols-4 gap-8">
						<div>
							<div className="flex items-center space-x-2 mb-4">
								<Wardrobe className="w-6 h-6" />
								<span className="text-xl font-bold">LuxWardrobes</span>
							</div>
							<p className="text-gray-400">
								Crafting premium storage solutions for modern homes since 1995. Our commitment to quality and innovation has made us the leading choice for custom wardrobes.
							</p>
						</div>
						<div>
							<h4 className="text-lg font-bold mb-4">Quick Links</h4>
							<ul className="space-y-2">
								<li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
								<li><a href="#" className="text-gray-400 hover:text-white">Our Process</a></li>
								<li><a href="#" className="text-gray-400 hover:text-white">Portfolio</a></li>
								<li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
								<li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
								<li><a href="#" className="text-gray-400 hover:text-white">FAQs</a></li>
							</ul>
						</div>
						<div>
							<h4 className="text-lg font-bold mb-4">Services</h4>
							<ul className="space-y-2">
								<li><a href="#" className="text-gray-400 hover:text-white">Custom Design</a></li>
								<li><a href="#" className="text-gray-400 hover:text-white">Installation</a></li>
								<li><a href="#" className="text-gray-400 hover:text-white">Maintenance</a></li>
								<li><a href="#" className="text-gray-400 hover:text-white">Consultation</a></li>
								<li><a href="#" className="text-gray-400 hover:text-white">Warranty</a></li>
								<li><a href="#" className="text-gray-400 hover:text-white">Support</a></li>
							</ul>
						</div>
						<div>
							<h4 className="text-lg font-bold mb-4">Newsletter</h4>
							<p className="text-gray-400 mb-4">Subscribe to get the latest updates and special offers.</p>
							<div className="space-y-4">
								<div className="flex">
									<input
										type="email"
										placeholder="Your email"
										className="px-4 py-2 rounded-l-lg w-full"
									/>
									<button className="bg-[#4dd0e1] px-4 rounded-r-lg hover:bg-[#dce775] transition">
										Subscribe
									</button>
								</div>
								<p className="text-sm text-gray-500">
									By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
								</p>
							</div>
						</div>
					</div>
					<div className="border-t border-gray-700 mt-12 pt-8">
						<div className="grid md:grid-cols-2 gap-4">
							<div className="text-gray-400 text-sm">
								<p>&copy; 2024 LuxWardrobes. All rights reserved.</p>
							</div>
							<div className="flex space-x-6 text-gray-400 text-sm justify-end">
								<a href="#" className="hover:text-white">Privacy Policy</a>
								<a href="#" className="hover:text-white">Terms of Service</a>
								<a href="#" className="hover:text-white">Cookie Policy</a>
							</div>
						</div>
					</div>
				</div>
			</footer> */}
			<Footer />
		</div>
	);
}

const stats = [
	{ value: "9+", label: "Years Experience" },
	{ value: "5000+", label: "Projects Completed" },
	{ value: "99%", label: "Client Satisfaction" },
	{ value: "5+", label: "Design Awards" }
];

const features = [
	{
		icon: Palette,
		title: "Custom Design",
		description: "Tailored solutions that perfectly match your space and style preferences, created by our expert designers."
	},
	{
		icon: Shield,
		title: "Premium Materials",
		description: "High-quality materials ensuring durability and lasting beauty, sourced from trusted suppliers."
	},
	{
		icon: Tool,
		title: "Expert Installation",
		description: "Professional installation by our skilled craftsmen with attention to every detail."
	},
	{
		icon: Clock,
		title: "Timely Delivery",
		description: "Efficient project management ensuring your wardrobe is delivered and installed on schedule."
	},
	{
		icon: Sparkles,
		title: "change it to 10 year warranty",
		description: "Peace of mind with our comprehensive warranty covering materials and craftsmanship."
	},
	{
		icon: Heart,
		title: "Customer Care",
		description: "Dedicated support team available to assist you throughout your journey with us."
	}
];

const process = [
	{
		icon: Users,
		title: "Consultation",
		description: "Meet with our design experts to discuss your needs, preferences, and space requirements."
	},
	{
		icon: Ruler,
		title: "Design & Planning",
		description: "Detailed measurements and custom designs created to maximize your space."
	},
	{
		icon: Gem,
		title: "Material Selection",
		description: "Choose from our premium range of materials, finishes, and accessories."
	},
	{
		icon: Settings,
		title: "Installation",
		description: "Professional installation by our experienced team with minimal disruption."
	}
];

const materials = [
	{
		title: "Premium Hardwoods",
		description: "Sustainably sourced hardwoods offering exceptional durability and beauty.",
		image: "PremiumHardwoods.jpg",
		features: [
			"Sustainable sourcing",
			"Natural grain patterns",
			"Long-lasting durability",
			"Multiple finish options"
		]
	},
	{
		title: "High-Grade MDF",
		description: "Superior quality MDF perfect for modern, sleek designs.",
		image: "High-Grade-MDF.jpg",
		features: [
			"Moisture resistant",
			"Smooth finish",
			"Excellent stability",
			"Cost-effective"
		]
	},
	{
		title: "Glass & Mirrors",
		description: "Premium glass and mirror options to enhance space and light.",
		image: "mirror-glass.jpg",
		features: [
			"Tempered safety glass",
			"Anti-scratch coating",
			"Multiple tint options",
			"Easy maintenance"
		]
	}
];

const products = [
	{
		title: "Modern Minimalist",
		description: "Clean lines and contemporary design",
		image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80",
		features: [
			"Handleless design",
			"Soft-close mechanisms",
			"LED lighting",
			"Custom compartments"
		]
	},
	{
		title: "Classic Elegance",
		description: "Timeless designs with sophisticated details",
		image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80",
		features: [
			"Ornate detailing",
			"Solid wood construction",
			"Traditional finishes",
			"Brass hardware"
		]
	},
	{
		title: "Luxury Suite",
		description: "Premium walk-in wardrobe solutions",
		image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&q=80",
		features: [
			"Island storage",
			"Seating area",
			"Jewelry safes",
			"Smart organization"
		]
	}
];

const testimonials = [
	{
		content: "I recently had few wardrobes and a bed custom-built by Best Fitted Wardrobe, and I couldn’t be happier with the entire experience and final result! Before agreeing to the work, I visited their workshop, which was impressive in size and had a huge collection of designs and colors to choose from. Siva, who guided me through the options, was incredibly patient and attentive. He spent a lot of time with me, listening carefully to my needs and preferences, and ensuring that every detail was exactly as I envisioned.",
		name: "Raj Kondapalli",
		location: "New York",
		avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
	},
	{
		content: "Amazing work done by Best Fitted Wardrobes and very reasonably priced! Thanks to Omar and his team for their professional work. Omar is very experienced, he came to measure, gave suggestions and proposed a well designed wardrobe. We had to resize our wardrobe after being fitted and thanks to Omar and team they resized perfectly, almost couldn't notice a single adjustment was made. They're flexible and will do what they can to provide best customer experience. Would highly recommend 💯.",
		name: "Evelyn S",
		location: "San Francisco",
		avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
	},
	{
		content: "TI highly recommend this company, excellent work in fitting my bedroom wardrobe and TV media wall. Designer Zaheer helped with suggestions as my bedroom had some central heating pipes getting in the way. Fitters Neeraj and Ali did high quality work to install both wardrobe and TV Media unit.",
		name: "Kaur sangha",
		location: "London",
		avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
	},
	{
		content: "Fantastic service from start to finish,  the guys fitting the wardrobes left both Bedrooms clean and tidy.We Would definitely recommend them. When extension is finished going to get a quote for them to fit the Kitchen.",
		name: "Ray Lomas",
		location: "Bristol",
		avatar: ""
	}
];

const services = [
	{
		icon: Home,
		title: "Home Consultation",
		description: "Free in-home design consultation with our experts."
	},
	{
		icon: Palette,
		title: "3D Design",
		description: "Visualize your wardrobe with our 3D rendering service."
	},
	{
		icon: Tool,
		title: "Installation",
		description: "Professional installation by certified technicians."
	},
	{
		icon: Briefcase,
		title: "Aftercare",
		description: "Comprehensive maintenance and support services."
	}
];

export default LandingPages;