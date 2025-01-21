// Gallery.js
import React, { useEffect, useState } from "react";
import CTA from "../page/CTA";
import apiClient from "../../lib/apiClient";
import { Link } from "react-router-dom";


const Gallery = () => {
	const [ categories, setCategory ] = useState([]);

	const BASE_URL = process.env.REACT_APP_API_URL;

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
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap:8 lg:gap-12">
						{categories.length > 0 && categories?.map((item, index) => (
							<Link to={`/images/${item?._id}`}>
								<div
									key={index}
									className="bg-white shadow overflow-hidden p-1"
								>
									<img
										src={item.image == undefined ? '/assets/img/no_image_found.jpg' : `${BASE_URL}${item.image}`}
										alt={item.name}
										className={`w-full h-72 object-cover bg-gray-200 ${item.image == undefined && 'border-b'}`}
									/>
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
