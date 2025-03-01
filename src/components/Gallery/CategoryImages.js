import React, { useEffect, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import axios from 'axios';
import apiClient from '../../lib/apiClient';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import CTA from '../page/CTA';
import { IoMdArrowRoundBack } from "react-icons/io";
import '../../css/gallery.css'

const CategoryImages = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const name = location.state?.name;

	const [ images, setImages ] = useState([]);
	const [ loading, setLoading ] = useState(false);
	const params = useParams()
	// console.log(params);
	const BASE_URL = process.env.REACT_APP_API_URL;
	useEffect(() => {
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
					{name}
				</p>

				<button className='flex items-center text-mySky border border-mySky px-6 py-[6px] rounded-full hover:bg-mySky hover:text-white transition-all mb-8'
					onClick={handleBack}
				>
					<IoMdArrowRoundBack /> <span>&nbsp;&nbsp;Back</span>
				</button>

				{!loading && images.length === 0 &&
					<div className='flex items-center justify-center'>
						<img src="/assets/img/no_image_found.jpg" alt="no_image_found" className='border' />
					</div>
				}

				<PhotoProvider maskOpacity={0.8}>
					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap:8 lg:gap-x-10 px-6 sm:px-10 lg:px-20'>
						{images?.map(image => (
							<div className='relative'>
								<PhotoView key={image._id} src={image.image}>
									<img
										src={image.image}
										alt={image.filename}
										className='bg-white shadow overflow-hidden p-1 object-cover cursor-pointer h-80 w-full border'
									/>

								</PhotoView>
								<img
									src='/assets/img/logos/logo.png'
									className="absolute right-4 bottom-5 w-24 object-cover z-50"
									alt='logo'
								/>
							</div>
						))}
					</div>
				</PhotoProvider >

				<button className='m-auto flex items-center text-mySky border border-mySky px-6 py-[6px] rounded-full hover:bg-mySky hover:text-white transition-all mt-8'
					onClick={handleBack}
				>
					<IoMdArrowRoundBack /> <span>&nbsp;&nbsp;Back</span>
				</button>
			</div>
			<div className='mb-16 mt-10'>
				<CTA />
			</div>
		</>
	);
};

export default CategoryImages