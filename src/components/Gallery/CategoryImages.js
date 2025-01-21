import React, { useEffect, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import axios from 'axios';
import apiClient from '../../lib/apiClient';
import { useNavigate, useParams } from 'react-router-dom';
import CTA from '../page/CTA';
import { IoIosArrowRoundBack } from "react-icons/io";


const CategoryImages = () => {
	const navigate = useNavigate();

	const [ images, setImages ] = useState([]);
	const [ loading, setLoading ] = useState(false);
	const params = useParams()
	// console.log(params);
	const BASE_URL = process.env.REACT_APP_API_URL;
	useEffect(() => {
		// Fetch images from API
		setLoading(true)
		apiClient.get(`image?categoryId=${params?.id}`)
			.then(response => {
				console.log(response?.data?.data);
				setLoading(false)
				if (response?.data?.data) {
					setImages(response?.data?.data);
					setLoading(false)
				}
			})
			.catch(error => {
				console.error('Error fetching images:', error);
				setLoading(false)
			});
	}, []);

	const handleBack = () => {
		navigate(-1);
	};

	return (
		<>
			<div className='min-h-[100px] max-h-[400px] w-full overflow-hidden bg-gray-300'>
				<img src='/assets/img/bed1.jpeg' alt="Banner" className='object-bottom w-full' />
			</div>

			<div className='container mx-auto  md:mt-8 px-4 py-8'>
				<p className=" text-4xl md:text-4xl font-semibold text-center text-blue-900 mb-6 md:mb-12 uppercase">
					Sliding Wardrobes -Shaker wardrobes
				</p>

				<button className='flex items-center text-mySky border border-mySky px-6 py-[6px] rounded-full hover:bg-mySky hover:text-white transition-all mb-8'
					onClick={handleBack}
				>
					<IoIosArrowRoundBack /> <span>&nbsp;&nbsp;Back</span>
				</button>

				{!loading && images.length == 0 &&
					<div className='flex items-center justify-center'>
						<img src="/assets/img/no_image_found.jpg" alt="" className='border' />
					</div>
				}

				<PhotoProvider maskOpacity={0.8}>
					<div className='grid grid-cols-3 gap-6'>
						{images?.map(image => (
							<PhotoView key={image._id} src={`${BASE_URL}/${image.path}`}>
								<img
									src={`${BASE_URL}/${image.path}`}
									alt={image.filename}
									className='bg-white shadow overflow-hidden p-1 object-cover cursor-pointer h-96 border'
								/>
							</PhotoView>
						))}
					</div>
				</PhotoProvider >
			</div>
			<div className='my-16'>
				<CTA />
			</div>
		</>
	);
};

export default CategoryImages