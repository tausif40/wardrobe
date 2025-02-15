import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminNav from '../../Header/AdminNav'
import apiClient from '../../../lib/apiClient';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";
import CategoryImages from './CategoryImages';
import Gallery from './Gallery';
import { IoIosWarning } from "react-icons/io";

const UploadImages = () => {
	const navigate = useNavigate();
	const [ categories, setCategory ] = useState();
	const [ selectedCategory, setSelectedCategory ] = useState(null);
	const [ images, setImages ] = useState([]);
	const [ uploading, setUploading ] = useState(false);
	const [ categoryName, setCategoryName ] = useState('');

	const BASE_URL = process.env.REACT_APP_API_URL;
	const token = sessionStorage.getItem('token');
	const sessionStartTime = sessionStorage.getItem('sessionStartTime');

	useEffect(() => {
		if (token == null && sessionStartTime == null) {
			navigate('/admin')
			return;
		}
	}, [])

	useEffect(() => {
		const fetchCategory = async () => {
			const response = await apiClient.get('/category')
			setCategory(response?.data?.data)
			// console.log(response?.data?.data)
		}
		fetchCategory();
	}, [])

	const handleCategoryChange = (value) => {
		// console.log(value);
		setSelectedCategory(value._id);
		setCategoryName(value.name);
	};

	const handleImageChange = (e) => {
		setImages([ ...e.target.files ]);
	};

	const handleUpload = async () => {
		if (!selectedCategory) {
			toast('Please select a category first!', { icon: <IoIosWarning color='#edbf40' /> });
			return;
		}

		if (images.length === 0) {
			toast('Please select at least one image to upload!', { icon: <IoIosWarning color='#edbf40' /> });
			return;
		}

		const formData = new FormData();
		formData.append('categoryId', selectedCategory);

		images.forEach((image, index) => {
			formData.append(`images`, image);
		});

		const loadingToast = toast.loading('Uploading.....');
		try {
			setUploading(true);
			const response = await axios.post(`${BASE_URL}/upload-image`, formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
					authorization: `Bearer ${token}`,
				},
			});
			console.log(response);
			toast.success('Upload successfully', { id: loadingToast })
			setImages([]);
		} catch (error) {
			console.error('Error uploading images:', error);
			toast.error('Upload Fail!', { id: loadingToast })
		} finally {
			setUploading(false);
		}
	};

	const handleBack = () => {
		navigate(-1);
	};

	return (
		<>
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
							onChange={(e) => {
								const selectedOption = categories.find(
									(category) => category._id === e.target.value
								);
								handleCategoryChange(selectedOption);
								// setSelectedCategory(selectedOption);
							}}
							className="w-full p-2 border border-gray-300 rounded outline-none focus:ring-blue-500 focus:border-blue-500"
						>
							<option value="" disabled selected>Choose a category</option>
							{categories?.map((category) => (
								<option key={category._id} value={category._id}>
									{category.name}
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
				<div className="mt-16 mx-auto border bg-slate-50	">
					{selectedCategory == null
						? <Gallery categoryId={setSelectedCategory} categoryName={setCategoryName} />
						: <CategoryImages id={selectedCategory} name={categoryName} setSelectedCategory={setSelectedCategory} uploading={uploading} />}
				</div>
			</div >

		</>
	);
};

export default UploadImages;
