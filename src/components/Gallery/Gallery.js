// Gallery.js
import React, { useEffect, useState } from "react";
import CTA from "../page/CTA";
import apiClient from "../../lib/apiClient";
import { Link } from "react-router-dom";

const galleryItems = [
	{
		title: "Sliding Wardrobes - Shaker Wardrobes",
		image: "/path-to-image-1.jpg",
	},
	{
		title: "Slottica UA Nie Tylko - 196",
		image: null, // No image found
	},
	{
		title: "TV Units and Living Room Units",
		image: "/path-to-image-2.jpg",
	},
	{
		title: "Wardrobes",
		image: "/path-to-image-3.jpg",
	},
	{
		title: "Office Furniture",
		image: "/path-to-image-4.jpg",
	},
	{
		title: "Lofts",
		image: "/path-to-image-5.jpg",
	},
	{
		title: "Bonus Bez Depozytu Slottica Zarejestruj Się - 586",
		image: null, // No image found
	},
	{
		title: "Casino",
		image: null, // No image found
	},
	{
		title: "Luxurious Wardrobes",
		image: "/path-to-image-6.jpg",
	},
	{
		title: "Fitted Kitchens",
		image: "/path-to-image-7.jpg",
	},
	{
		title: "Diagonal Wardrobes",
		image: "/path-to-image-8.jpg",
	},
	{
		title: "Beds",
		image: "/path-to-image-9.jpg",
	},
];

const Gallery = () => {
	const [ categories, setCategory ] = useState([]);

	const [ images, setImages ] = useState([]);

	const BASE_URL = process.env.REACT_APP_API_URL;
	const token = sessionStorage.getItem('token');

	useEffect(() => {
		const fetchCategory = async () => {
			const response = await apiClient.get('/category')
			setCategory(response?.data?.data)
			console.log(response?.data?.data)
		}
		fetchCategory();
	}, [])

	return (
		<>
			<div className='min-h-[100px] max-h-[400px] w-full overflow-hidden bg-gray-300'>
				<img src='/assets/img/bed1.jpeg' alt="Banner" className='object-bottom w-full' />
			</div>

			<div className="">
				<div className="container min-h-screen mx-auto mt-6 md:mt-4 px-4 pt-6 pb-12">
					<p className=" text-4xl md:text-5xl font-semibold text-center text-blue-900 mb-6 md:mb-12 uppercase">
						Gallery
					</p>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
						{categories.length > 0 && categories?.map((item, index) => (
							<Link to={`/images/${item?._id}`}>
								<div
									key={index}
									className="bg-white shadow overflow-hidden p-1"
								>
									{item.image ? (
										<img
											src={`${BASE_URL}${item.image}`}
											alt={item.name}
											className="w-full h-64 object-cover bg-gray-200"
										/>
									) : (
										<div className="w-full h-64 bg-gray-200 flex items-center justify-center">
											<p className="text-gray-500 text-xl">No Image Found</p>
										</div>
									)}
									<div className="p-4">
										<h2 className="text-lg font-semibold text-heading">
											{item.name}
										</h2>
									</div>
								</div>
							</Link>
						))}
					</div>
				</div>
			</div >
			<div className='mt-10 mb-14'>
				<CTA />
			</div>
		</>
	);
};

export default Gallery;
