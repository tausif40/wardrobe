import React from 'react'
import { Maximize2, Home, CookingPotIcon as Kitchen } from 'lucide-react'
import { Link } from 'react-router-dom';

const data = [
	{
		url: '/sliding-wardrobes',
		icon: '/assets/img/icon1.png',
		img: '/assets/img/bed2.jpeg',
		title: "SLIDING WARDROBES",
		description: "You are Concern about your space save option & sliding wardrobe We have a fabulous range of style to choose.",
	},
	{
		url: '/built-in-wardrobes',
		icon: '/assets/img/icon2.png',
		img: '/assets/img/bed.jpeg',
		title: "BUILT IN WARDROBE",
		description: "Inside your built in wardrobes and fitted wardrobes there is ample room to house all of your belongings.",
	},
	{
		url: '/fitted-kitchens',
		icon: '/assets/img/icon3.png',
		img: '/assets/img/kitchen.jpeg',
		title: "FITTED KITCHENS",
		description: "Kitchen is a most functional area of your home and this is where the family meets after a hectic schedule.",
	},
];

const MyComponent = () => {
	return (
		<section className="py-16">
			<div className="container mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-3 lg:gap-6  xl:gap-10 lg:px-8 xl:px-12">
					{data.map((item, index) => (
						<div key={index} className="text-center relative">
							<div className="mb-16">
								<img src={item.img} alt="" className='h-80 w-full object-cover' />
								<img src={item.icon} alt="" className='absolute left-1/2  -translate-x-1/2 -translate-y-1/2 ' />
								{/* <item.icon className="mx-auto h-12 w-12 text-[#4DD4D4]" />, */}
							</div>
							<h3 className="text-xl lg:text-2xl font-bold mb-3 text-heading">{item.title}</h3>
							<p className="text-gray-600 md:text-sm lg:text-base mb-4 px-4">{item.description}</p>
							<Link to={item?.url}>
								<button className="text-mySky border border-mySky px-6 py-2 rounded-full hover:bg-mySky hover:text-white transition-all">
									READ MORE
								</button>
							</Link>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default MyComponent;