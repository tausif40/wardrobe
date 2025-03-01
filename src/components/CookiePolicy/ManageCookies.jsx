import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { IoChevronDownOutline } from "react-icons/io5";
import { IoChevronUpOutline } from "react-icons/io5";


const cookieTypes = [
	{
		id: 'necessary',
		title: "Necessary Cookies",
		description: "These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms. You can set your browser to block or alert you about these cookies, but some parts of the site will not then work. These cookies do not store any personally identifiable information.",
		alwaysActive: true,
		cookies: [
			{
				name: "Session",
				usage: "A general purpose identifier (a string of letters and numbers) used by the web server to maintain user session variables between page loads."
			},
			{
				name: "Cookie Policy",
				usage: "This cookie records your consent to the cookie policy."
			},
			{
				name: "Exit Intent",
				usage: "Used to identify a user's exit intention."
			}
		]
	},
	{
		id: 'performance',
		title: "Performance Cookies",
		description: "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site. All information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies we will not know when you have visited our site, and will not be able to monitor its performance.",
		cookies: [
			{
				name: "Google Analytics",
				usage: "We use Google Analytics to provide data about how users interact with our websites to improve their experience. All data in Google Analytics is aggregated and anonymised. It records anonymised visitors, city locations, browser type and site journey. Read Google's Privacy & Terms."
			},
			{
				name: "YouTube",
				usage: "YouTube may set a number of cookies if you watch videos on our website. They do this to improve your experience. They can include anonymised location and demographic tracking. Read Google's Privacy & Terms."
			},
			{
				name: "Webtrends Optimize	",
				usage: "We use Webtrends Optomize on our website to help improve the website experience for our customers. It allows us to test out new features and enhancements to our website. Find out more about how Webtrends Optimize uses personal data."
			},
			{
				name: "Adalyser",
				usage: "Adalyser is an analytics platform that is used to measure response to TV advertising."
			},
		]
	},
	{
		id: 'marketing',
		title: "Marketing Cookies",
		description: "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites. They do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising.",
		cookies: [
			{
				name: "Google Ads",
				usage: "This cookie monitors the performance and conversions on Google Ads. Read Google's Privacy & Terms."
			},
			{
				name: "Google Adsense	",
				usage: "Google Adsense uses cookies to help serve the ads it displays on the websites of its partners, such as websites displaying Google ads or participating in Google certified ad networks. Read Google's Privacy & Terms."
			},
			{
				name: "Microsoft Bing",
				usage: "This cookie monitors the performance and conversions on Microsoft Bing. Read Microsoft's Privacy Policy."
			},
			{
				name: "Meta/Facebook",
				usage: "To deliver our advertising to people who have already visited our website when they are on Facebook, or a digital platform powered by Meta. Read Meta's Privacy Policy."
			},
			{
				name: "TVSquared",
				usage: "These cookies allow us to measure impressions, reach and outcomes across linear and digital TV. They collect analytical information about how visitors use the website."
			},
			{
				name: "The Trade Desk	",
				usage: "The Trade Desk's cookies are used for tracking and analytics in digital advertising. They gather data on user interactions and preferences, helping advertisers measure campaign performance, target audiences effectively and improve user engagement."
			},
			{
				name: "Pinterest",
				usage: "This cookie helps us better tailor advertising to people who have already visited our website when they are on Pinterest. Read Pinterest's Privacy Policy."
			},
		]
	}
];

export default function ManageCookies({ setIsVisible, setManageCookies }) {
	const [ expandedSections, setExpandedSections ] = useState([ 'necessary' ]);
	const [ preferences, setPreferences ] = useState({
		necessary: true,
		performance: true,
		marketing: true
	});

	const toggleSection = (sectionId) => {
		setExpandedSections((current) =>
			current.includes(sectionId)
				? current.filter((id) => id !== sectionId)
				: [ ...current, sectionId ]
		);
	};

	const handleSaveChoices = () => {
		setIsVisible(false)
		Cookies.set('cookiesAccepted', true);
		console.log('Saving preferences:', preferences);
		// Add save logic here
	};

	const togglePreference = (cookieType) => {
		if (cookieType === 'necessary') return;
		setPreferences((prev) => ({
			...prev,
			[ cookieType ]: !prev[ cookieType ]
		}));
	};

	return (
		<div className="mx-auto space-y-6">
			<div className="space-y-2">
				{cookieTypes.map((type) => (
					<div key={type.id} className="border-t mt-4">
						<button
							onClick={() => toggleSection(type.id)}
							className="w-full px-4 py-4 flex justify-between items-center text-left"
							aria-expanded={expandedSections.includes(type.id)}
						>
							<span className="mr-4 transform transition-transform duration-200">
								{expandedSections.includes(type.id) ? <IoChevronUpOutline /> : <IoChevronDownOutline />}
							</span>
							<div className="flex justify-between w-full">
								<span className="font-medium">{type.title}</span>
								{type.alwaysActive ? (
									<span className="text-sm text-teal-600">Always active</span>
								) : (
									<div
										onClick={(e) => {
											e.stopPropagation();
											togglePreference(type.id);
										}}
										className="relative inline-flex items-center cursor-pointer"
									>
										<input
											type="checkbox"
											checked={preferences[ type.id ]}
											onChange={(e) => { }}
											className="sr-only peer"
										/>
										<div className={`w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white 
                      after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600`}
										></div>
									</div>
								)}
							</div>
						</button>
						{expandedSections.includes(type.id) && (
							<div className="px-4 pb-4">
								<p className="text-gray-600 mb-4">{type.description}</p>
								{type.cookies.length > 0 && (
									<div className="overflow-x-auto">
										<table className="min-w-full divide-y divide-gray-200 border">
											<thead className='bg-gray-500 text-white'>
												<tr>
													<th className="px-4 py-2 text-left text-sm font-medium border">
														Cookies
													</th>
													<th className="px-4 py-2 text-left text-sm font-medium border">
														Usage Information
													</th>
												</tr>
											</thead>
											<tbody className="divide-y divide-gray-200 ">
												{type.cookies.map((cookie, i) => (
													<tr key={i} className=''>
														<td className="px-4 py-2 text-sm font-medium text-gray-800 border">
															<p className='min-w-max'>{cookie.name}</p>
														</td>
														<td className="px-4 py-2 text-sm text-gray-600 border">
															{cookie.usage}
														</td>
													</tr>
												))}
											</tbody>
										</table>
									</div>
								)}
							</div>
						)}
					</div>
				))}
			</div>
			<button
				onClick={handleSaveChoices}
				className="px-6 md:px-12 py-2 border border-teal-600 text-teal-600 rounded hover:bg-teal-100 transition-colors"
			>
				Save my choices
			</button>
		</div>
	);
}
