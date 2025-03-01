// Gallery.js
import React, { useEffect, useState } from "react";
import CTA from "../page/CTA";
import apiClient from "../../lib/apiClient";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const Gallery = () => {
	const navigate = useNavigate()
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

	const handelNavigate = (id, name) => {
		navigate(`/images/${id}`, { state: { name: name } })
	}

	return (
		<>
			<Helmet>
				<title>Fitted Wardrobes & Kitchens Gallery | Design Inspiration</title>
				<meta name="description" content="Browse our gallery of fitted wardrobes, built-in storage, and fitted kitchens. Get inspired and book a free consultation today!" />
				<meta name="keywords" content="fitted wardrobes gallery, custom wardrobe designs, fitted kitchens gallery, interior design ideas" />
				<meta name="robots" content="index, follow" />
				<link rel="canonical" href="https://bestfittedwardrobe.co.uk/gallery" />

				<script type="application/ld+json">
					{JSON.stringify({
						"@context": "https://schema.org",
						"@type": "ImageGallery",
						"name": "Best Fitted Wardrobes Gallery",
						"description": "Browse our gallery of fitted wardrobes, built-in storage, and fitted kitchens. Get inspired and book a free consultation today!",
						"url": "https://bestfittedwardrobe.co.uk/gallery",
						"image": [
							"https://bestfittedwardrobe.co.uk/images/gallery1.jpg",
							"https://bestfittedwardrobe.co.uk/images/gallery2.jpg"
						]
					})}
				</script >

			</Helmet>

			<div className='min-h-[400px] max-h-[400px] bg-no-repeat bg-bottom w-full overflow-hidden bg-gray-300' style={{ backgroundImage: "url('/assets/img/bed1.jpeg')" }}>
				{/* <img src='/assets/img/bed1.jpeg' alt="Banner" className='object-bottom w-full' /> */}
			</div>

			<div className="">
				<div className="container min-h-screen mx-auto mt-6 md:mt-4 px-4 pt-6 pb-12">
					<p className=" text-4xl md:text-5xl font-semibold text-center text-blue-900 mb-6 md:mb-12 uppercase">
						Gallery
					</p>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap:8 lg:gap-12 px-6 sm:px-10 lg:px-20">
						{categories.length > 0 && categories?.map((item, index) => (
							// <Link to={`/images/${item?._id}`}>
							<div
								key={index}
								onClick={() => handelNavigate(item?._id, item.name)}
								className="bg-white shadow overflow-hidden p-1 text-heading hover:bg-mySky hover:text-white transition-all"
							>
								<img
									src={item.image == undefined ? '/assets/img/no_image_found.jpg' : `${item.image}`}
									alt={item.name}
									className={`w-full h-72 object-cover bg-gray-200 ${item.image == undefined && 'border-b'}`}
								/>

								<div className="p-4">
									<h2 className="text-lg font-semibold">
										{item.name}
									</h2>
								</div>
							</div>
							// {/* </Link> */ }
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
