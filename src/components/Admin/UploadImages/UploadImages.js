import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminNav from '../../Header/AdminNav'
import apiClient from '../../../lib/apiClient';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";

const UploadImages = () => {
	const navigate = useNavigate();
	const [ categories, setCategory ] = useState();
	const [ selectedCategory, setSelectedCategory ] = useState(null);
	const [ images, setImages ] = useState([]);
	const [ uploading, setUploading ] = useState(false);

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

	const handleCategoryChange = (e) => {
		console.log('id - ', e.target.value);
		setSelectedCategory(e.target.value);
	};

	const handleImageChange = (e) => {
		setImages([ ...e.target.files ]);
	};

	const handleUpload = async () => {
		if (!selectedCategory) {
			alert('Please select a category first.');
			return;
		}

		if (images.length === 0) {
			alert('Please select at least one image to upload.');
			return;
		}

		const formData = new FormData();
		formData.append('categoryId', selectedCategory);

		images.forEach((image, index) => {
			formData.append(`images`, image);
		});

		try {

			for (let [ key, value ] of formData.entries()) {
				console.log(`${key}:`, value);
			}

			setUploading(true);
			const response = await axios.post(`${BASE_URL}/upload-image`, formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
					authorization: `Bearer ${token}`,
				},
			});
			console.log(response);
			// alert('Images uploaded successfully!');
		} catch (error) {
			console.error('Error uploading images:', error);
			// alert('Failed to upload images.');
		} finally {
			setUploading(false);
		}
	};

	const handleBack = () => {
		navigate(-1);
	};

	return (
		<>
			<AdminNav />

			<div className='container py-6'>

				<button className='flex items-center text-mySky border border-mySky px-6 py-[6px] rounded-full hover:bg-mySky hover:text-white transition-all'
					onClick={handleBack}
				>
					<IoMdArrowRoundBack /> <span>&nbsp;&nbsp;Back</span>
				</button>

				<h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
					Upload Images
				</h1>

				<div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md space-y-4 border">
					{/* Dropdown for category selection */}
					<div>
						<label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
							Select Category
						</label>
						<select
							id="category"
							value={selectedCategory}
							onChange={handleCategoryChange}
							className="w-full p-2 border border-gray-300 rounded outline-none focus:ring-blue-500 focus:border-blue-500"
						>
							<option value="" disabled selected>
								Choose a category
							</option>
							{categories?.map((category) => (
								<option key={category.id} value={category?._id}>
									{category?.name}
								</option>
							))}
						</select>
					</div>

					{/* File input for image selection */}
					<div>
						<label htmlFor="images" className="block text-sm font-medium text-gray-700 mb-2">
							Select Images
						</label>
						<input
							type="file"
							id="images"
							multiple
							onChange={handleImageChange}
							className="border rounded w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100  mb-4"
						/>
					</div>

					{/* Upload button */}
					<button
						onClick={handleUpload}
						disabled={uploading}
						className={`w-full py-2 px-4 bg-darkSky text-white font-semibold rounded shadow hover:bg-blue-700 outline-none transition-all ${uploading ? 'opacity-50 cursor-not-allowed' : ''
							}`}
					>
						{uploading ? 'Uploading...' : 'Upload Images'}
					</button>
				</div>
			</div>
		</>
	);
};

export default UploadImages;
