import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { IoClose } from "react-icons/io5";

function CookiePolicy() {

	const [ isVisible, setIsVisible ] = useState(true);

	const handleAccept = () => {
		setIsVisible(false);
		Cookies.set('cookiesAccepted', true);
	};

	const handleManageCookies = () => {
		alert("Redirect to manage cookies settings");
	};

	if (!isVisible) return null;

	return (
		<>
			<div className="fixed top-0 w-full h-screen bg-black/20 z-40 px-4 md:px-2">
				<div className="relative left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-4xl px-8 py-8 bg-white shadow-md border rounded">
					{/* <div className='absolute right-3 top-2 cursor-pointer'>
						<IoClose size={20} />
					</div> */}
					<div className='flex flex-col gap-8'>
						<p className="text-gray-700 text-sm md:text-base">
							We use necessary cookies to make our site work. We also set cookies
							that help us personalise content and adverts. We share information
							about your use of our site with our social media, advertising and
							analytics partners who may combine it with other information that
							you’ve provided to them or that they’ve collected from your use of
							their services.
							{/* For more info see our{" "} */}
							{/* <Link to="/cookie-policy"
								className="text-blue-600 underline hover:text-blue-800"
							>
								Cookie Policy
							</Link> */}

						</p>
						<div className="w-full flex justify-end md:px-4">
							{/* <button
								onClick={handleManageCookies}
								className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 min-w-max"
							>
								Manage cookies
							</button> */}
							<button
								onClick={handleAccept}
								className="w-full md:w-[25%] px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700"
							>
								Accept
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default CookiePolicy