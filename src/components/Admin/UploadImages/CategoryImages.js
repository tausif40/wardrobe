import React, { useEffect, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import axios from 'axios';
import apiClient from '../../../lib/apiClient';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";
import '../../../css/gallery.css'
import { RiImageEditLine } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import Modal from '../../Modal/Modal';
import toast from 'react-hot-toast';

const CategoryImages = ({ id, name, setSelectedCategory, uploading }) => {

	const [ images, setImages ] = useState([]);
	const [ loading, setLoading ] = useState(false);
	const [ showModal, setShowModal ] = useState(false);
	const [ deleteId, setDeleteId ] = useState('');

	const fetchCategoryImages = async () => {
		apiClient.get(`image?categoryId=${id}`)
			.then(response => {
				// console.log(response?.data?.data);
				setLoading(false)
				if (response?.data?.data) {
					setImages(response?.data?.data);
					setLoading(false)
				} else {
					setImages([])
				}
			})
			.catch(error => {
				console.error('Error fetching images:', error);
				setLoading(false)
				setImages([])
			});
	}
	useEffect(() => {
		setLoading(true)
		fetchCategoryImages();
		console.log('fatching usee')
	}, [ id, uploading ]);

	const handleDelete = async () => {
		const loadingToast = toast.loading('deleting...');
		setLoading(true)
		setShowModal(false)
		try {
			await apiClient.delete(`/image/${deleteId}`).then((res) => {
				// console.log(res)
				toast.success('Category deleted successfully', { id: loadingToast })
				setDeleteId('')
				setLoading(false)
				fetchCategoryImages();
			})
			// setCategories(categories.filter((category) => category.id !== id));
		} catch (error) {
			setDeleteId('')
			setLoading(false)
			console.error("Error deleting category:", error);
			toast.error("Error deleting category", { id: loadingToast });
		}
	};

	const handleBack = () => {
		setSelectedCategory(null);
	};

	return (
		<>
			<div className='p-4'>
				<p className=" text-4xl md:text-4xl font-semibold text-center text-blue-900 uppercase">
					{name}
				</p>

				<button className='flex items-center text-mySky border border-mySky px-6 py-[6px] rounded-full hover:bg-mySky hover:text-white transition-all mb-8'
					onClick={handleBack}
				>
					<IoMdArrowRoundBack /> <span>&nbsp;&nbsp;Back</span>
				</button>

				{!loading && images.length === 0 &&
					<div className='flex items-center justify-center'>
						<img src="/assets/img/no_image_found.jpg" alt="Page not found" className='border' />
					</div>
				}

				<PhotoProvider maskOpacity={0.8}>
					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap:8 lg:gap-x-10 px-6 sm:px-10'>
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
								<div className="absolute top-4 right-4">
									<button onClick={() => { setDeleteId(image._id); setShowModal(true) }} className="text-red-500 p-1	bg-black/40 hover:bg-black/60 transition rounded">
										<MdDelete size={20} />
									</button>
								</div>
							</div>
						))}
					</div>
				</PhotoProvider >

				<button className='m-auto flex items-center text-mySky border border-mySky px-6 py-[6px] rounded-full hover:bg-mySky hover:text-white transition-all mt-8'
					onClick={handleBack}>
					<IoMdArrowRoundBack /> <span>&nbsp;&nbsp;Back</span>
				</button>
			</div>

			<Modal show={showModal} onClose={() => { setShowModal(false) }}>
				<div>
					<p className="font-poppins text-2xl mb-2 text-center text-red-500">Are you Sure?</p>
					<p className="text-sm font-poppins text-center ">You want to delete this image?</p>
				</div>
				<div className="flex justify-center gap-4 mt-10">
					<button className="text-white px-4 py-2 bg-red-500 rounded" onClick={handleDelete} disabled={loading}>
						Delete
					</button>
					<button className="text-white px-4 py-2 bg-gray-600 rounded" onClick={() => setShowModal(false)}>Cancel</button>
				</div>
			</Modal >

		</>
	);
};

export default CategoryImages