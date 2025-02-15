// Gallery.js
import React, { useEffect, useState } from "react";
import apiClient from "../../../lib/apiClient";
import { Link, useNavigate } from "react-router-dom";


const Gallery = ({ categoryId, categoryName }) => {
	const navigate = useNavigate()
	const [ categories, setCategory ] = useState([]);

	useEffect(() => {
		const fetchCategory = async () => {
			const response = await apiClient.get('/category')
			setCategory(response?.data?.data)
			// console.log(response?.data?.data)
		}
		fetchCategory();
	}, [])

	const handelValue = (category) => {
		categoryId(category._id)
		categoryName(category.name)
	}

	return (
		<>
			<p className="text-2xl font-bold text-gray-800 mb-4 bg-gray-300 text-center py-2">Categories</p>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
				{categories.length > 0 && categories?.map((category) => (
					<div key={category._id} className="relative bg-white shadow p-1 hover:bg-[#4dd0e1] transition-all text-gray-800 hover:text-white"
						onClick={() => handelValue(category)}>
						<img
							src={category.image == undefined ? '/assets/img/no_image_found.jpg' : `${category.image}`}
							alt={category.name}
							className={`w-full h-72 object-cover mb-4 rounded bg-gray-200 ${category.image == undefined && 'border-b '}`} />
						<h3 className="text-lg font-semibold mb-2 px-1">{category.name}</h3>
					</div>
				))}
			</div>
		</>
	);
};

export default Gallery;
