import { useState, useEffect, useRef } from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import { RxCross2 } from "react-icons/rx";

const ClaimDesign = ({ isOpen, onClose }) => {
	const modalRef = useRef(null);
	const [ captchaValue, setCaptchaValue ] = useState(null);
	const [ captchaError, setCaptchaError ] = useState(null);
	const BASE_URL = process.env.REACT_APP_API_URL;

	const RECAPTCHA_SITE_KEY = '6Lcq89oqAAAAAMCL4AozbLgvWf0bM0qj5Z4il_uA'

	const handleClickOutside = (event) => {
		if (modalRef.current && !modalRef.current.contains(event.target)) {
			onClose();
		}
	};

	useEffect(() => {
		if (isOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		} else {
			document.removeEventListener("mousedown", handleClickOutside);
		}
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, [ isOpen ]);

	const [ formData, setFormData ] = useState({
		title: "Mr.",
		firstName: "",
		lastName: "",
		telephone: "",
		email: "",
		address: "",
		lookingFor: "",
		message: "",
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [ e.target.name ]: e.target.value });
		if (captchaValue) setCaptchaError(null)
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!captchaValue) {
			setCaptchaError("Please complete the reCAPTCHA.");
			return;
		}
		try {
			console.log("formdata:", { ...formData, recaptchaToken: captchaValue });
			await axios.post(`${BASE_URL}/design-book`, { ...formData, recaptchaToken: captchaValue }).then((res) => {
				console.log("Success:", res.data);
				console.log("Form submitted successfully!");
				onClose();

			});
		} catch (err) {
			console.log("Failed to submit. Try again.");
			console.log(err);
		}
	};

	return (
		isOpen && (
			<div className="fixed px-2 inset-0 bg-black bg-opacity-50 flex justify-center items-start z-50 overflow-y-auto hideScrollBar">
				<div ref={modalRef} className="relative bg-white p-6 rounded-lg shadow-lg lg:w-[90%] max-w-2xl mt-16 mb-12">
					<h2 className="text-lg font-semibold mb-2">
						I WOULD LIKE TO BOOK A <span className="text-red-500">FREE</span> DESIGN VISIT
					</h2>
					<p className="mb-6">PLEASE CONTACT ME TO ARRANGE A TIME</p>
					<button onClick={onClose} className="absolute top-2 right-3 text-xl p-[2px] hover:bg-gray-300/50 rounded-full"> <RxCross2 size={16} /> </button>

					<form onSubmit={handleSubmit} className="space-y-4">
						<div className="flex space-x-2">
							<div className="flex-3">
								<label className="block text-sm font-semibold">Title <span className="text-red-500">*</span></label>
								<select name="title" value={formData.title} onChange={handleChange} className="border border-gray-400 p-2 w-full outline-mySky" required>
									<option>Mr.</option>
									<option>Mrs.</option>
									<option>Miss.</option>
									<option>Ms.</option>
									<option>Dr.</option>
								</select>
							</div>
							<div className="flex-1">
								<label className="block text-sm font-semibold">First Name <span className="text-red-500">*</span></label>
								<input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="border border-gray-400 p-2 w-full outline-mySky" required />
							</div>
							<div className="flex-1">
								<label className="block text-sm font-semibold">Last Name <span className="text-red-500">*</span></label>
								<input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="border border-gray-400 p-2 w-full outline-mySky" required />
							</div>
						</div>

						<div className="flex gap-4">
							<div className="flex-1">
								<label className="block text-sm font-semibold">Telephone <span className="text-red-500">*</span></label>
								<input type="tel" name="telephone" value={formData.telephone} onChange={handleChange} className="border border-gray-400 p-2 w-full outline-mySky" required />
							</div>

							<div className="flex-1">
								<label className="block text-sm font-semibold">Email <span className="text-red-500">*</span></label>
								<input type="email" name="email" value={formData.email} onChange={handleChange} className="border border-gray-400 p-2 w-full outline-mySky" required />
							</div>
						</div>

						<div>
							<label className="block text-sm font-semibold">Address <span className="text-red-500">*</span></label>
							<input type="text" name="address" value={formData.address} onChange={handleChange} className="border border-gray-400 p-2 w-full outline-mySky" required />
						</div>

						<div>
							<label className="block text-sm font-semibold">I am looking for a Spacemaker <span className="text-red-500">*</span></label>
							<select name="lookingFor" value={formData.lookingFor} onChange={handleChange} className="border border-gray-400 p-2 w-full outline-mySky" required>
								<option value='' disabled>select one option</option>
								<option value='wardrobes'>Wardrobes</option>
								<option value='kitchens'>Kitchens</option>
								<option value='lofts'>Lofts</option>
								<option value='media wall'>Media Wall</option>
							</select>
						</div>

						<div>
							<label className="block text-sm font-semibold">Message <span className="text-red-500">*</span></label>
							<textarea name="message" value={formData.message} onChange={handleChange} className="border border-gray-400 p-2 w-full outline-mySky" required></textarea>
						</div>

						<div className="flex justify-between items-center">
							<div className="w-full">
								<ReCAPTCHA sitekey={RECAPTCHA_SITE_KEY} onChange={setCaptchaValue} />
								<p className="text-xs text-red-500">{captchaError}</p>
							</div>
							<div className="">
								<button type="submit" className="bg-gray-800 text-white px-5 py-2">
									Submit
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		)
	);
};

export default ClaimDesign