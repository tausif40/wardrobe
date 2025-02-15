import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminNav from "../../Header/AdminNav";
import toast from 'react-hot-toast';
import { RiImageEditLine } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import Modal from "../../Modal/Modal";
import apiClient from "../../../lib/apiClient";
import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

const AddCategory = () => {
	const navigate = useNavigate();
	const [ categories, setCategories ] = useState([]);
	const [ categoryName, setCategoryName ] = useState("");
	const [ img, setImg ] = useState(null);
	const [ editCategoryId, setEditCategoryId ] = useState(null);
	const [ updateData, setUpdateData ] = useState(false);
	const [ loading, setLoading ] = useState(false);
	const [ deleteConformation, setDeleteConformation ] = useState(false);
	const [ showModal, setShowModal ] = useState(false);
	const [ showEditModal, setShowEditModal ] = useState(false);
	const [ deleteId, setDeleteId ] = useState('');

	// const [ editCategoryId, setEditCategoryId ] = useState(null);

	const BASE_URL = process.env.REACT_APP_API_URL;
	const token = sessionStorage.getItem('token');
	const sessionStartTime = sessionStorage.getItem('sessionStartTime');

	useEffect(() => {
		if (token == null && sessionStartTime == null) {
			navigate('/admin')
			return;
		}
	}, [])


	const fetchCategories = async () => {
		try {
			const response = await axios.get(`${BASE_URL}/category`, {
				headers: {
					'Content-Type': 'application/json',
					authorization: `Bearer ${token}`,
				},
			});
			setCategories(response.data?.data);
			// console.log(response.data?.data);
		} catch (error) {
			console.error("Error fetching categories:", error);
		}
	};

	useEffect(() => {
		fetchCategories();
	}, [ updateData ]);

	const validate = () => {
		if (categoryName)
			console.log();
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!validate) return;
		setLoading(true)
		setShowEditModal(false)
		const formData = new FormData();
		formData.append("image", img);
		formData.append("name", categoryName);

		const loadingToast = toast.loading('adding...');
		try {
			await axios.post(`${BASE_URL}/category`, formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
					authorization: `Bearer ${token}`,
				},
			});
			toast.success("Category added successfully", { id: loadingToast });
			resetForm();
		} catch (error) {
			setLoading(false)
			console.error("Error saving category:", error);
			toast.error("Error saving category", { id: loadingToast });
		}
	};

	const handleUpdate = async (e) => {
		e.preventDefault();
		setLoading(true)
		setShowEditModal(false)
		const loadingToast = toast.loading('Updating...');
		const formData = new FormData();
		formData.append("image", img);
		formData.append("name", categoryName);
		console.log("click");
		try {
			await axios.put(`${BASE_URL}/category/${editCategoryId}`, formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
					authorization: `Bearer ${token}`,
				},
			});
			toast.success("Updated successfully", { id: loadingToast });
			setDeleteId('')
			setLoading(false)
			fetchCategories();
			// setCategories(categories.filter((category) => category.id !== id));
		} catch (error) {
			setDeleteId('')
			setLoading(false)
			console.error("Error Updated category:", error);
			toast.error("Error Updated category", { id: loadingToast });
		}
	};

	// Handle Delete Category
	const handleDelete = async () => {
		const loadingToast = toast.loading('deleting...');
		setLoading(true)
		setShowModal(false)
		try {
			await apiClient.delete(`${BASE_URL}/category/${deleteId}`).then((res) => {
				console.log(res)
				toast.success('Category deleted successfully', { id: loadingToast })
				setDeleteId('')
				setLoading(false)
				fetchCategories();
			})
			// setCategories(categories.filter((category) => category.id !== id));
		} catch (error) {
			setDeleteId('')
			setLoading(false)
			console.error("Error deleting category:", error);
			toast.error("Error deleting category", { id: loadingToast });
		}
	};

	// Reset form
	const resetForm = () => {
		setLoading(false)
		setUpdateData((pre) => !pre)
		setCategoryName("");
		setImg(null);
		setEditCategoryId(null);
	};

	// Handle Edit
	const handleEdit = (category) => {
		setShowEditModal(true)
		setCategoryName(category.name);
		setEditCategoryId(category._id);
	};

	const handleBack = () => {
		navigate(-1);
	};

	return (
		<>
			
			<div className='container py-8'>

				<button className='flex items-center text-mySky border border-mySky px-6 py-[6px] rounded-full hover:bg-mySky hover:text-white transition-all'
					onClick={handleBack}
				>
					<IoMdArrowRoundBack /> <span>&nbsp;&nbsp;Back</span>
				</button>

				<h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
					Add Category
				</h1>

				<div className="min-h-screen p-6">
					<form className="bg-white p-6 shadow-md rounded max-w-xl mx-auto border" onSubmit={handleSubmit}>
						<div className="mb-4">
							<label htmlFor="categoryName" className="block text-gray-700 font-medium mb-2">Category Name</label>
							<input type="text" id="categoryName" className="w-full border border-gray-300 rounded p-2" required
								value={categoryName}
								onChange={(e) => setCategoryName(e.target.value)}
							/>
						</div>

						<div className="mb-4">
							<label className="block text-gray-700 font-medium mb-2"	>	Upload Image</label>
							<input type="file" accept="image/*" className="border rounded w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 mb-4"
								onChange={(e) => setImg(e.target.files[ 0 ])}
							/>
						</div>
						<div className="flex justify-center">
							<button type="submit" className="bg-darkSky text-white py-2 px-4 rounded hover:bg-blue-600" disabled={loading}>
								{"Add Category"}
							</button>
						</div>
					</form>

					<div className="mt-16 mx-auto border bg-slate-50	">
						<p className="text-2xl font-bold text-gray-800 mb-4 bg-gray-300 text-center py-2">Categories</p>
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
							{categories.length > 0 && categories?.map((category) => (
								<div key={category.id} className="relative bg-white shadow p-1 hover:bg-[#4dd0e1] transition-all text-gray-800 hover:text-white">
									<img
										src={category.image == undefined ? '/assets/img/no_image_found.jpg' : `${category.image}`}
										alt={category.name}
										className={`w-full h-72 object-cover mb-4 rounded bg-gray-200 ${category.image == undefined && 'border-b '}`} />
									<h3 className="text-lg font-semibold mb-2 px-1">{category.name}</h3>
									<div className="absolute flex justify-between gap-4 top-2 right-4">
										<button onClick={() => { setDeleteId(category._id); setShowModal(true) }} className="text-red-500 p-1	bg-black/50 rounded">
											<MdDelete size={20} />
										</button>
										<button onClick={() => handleEdit(category)} className="text-sky-400 p-1 bg-black/50 rounded"><RiImageEditLine size={20} /></button>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div >

			<Modal show={showModal} onClose={() => { setShowModal(false) }}>
				<div>
					<p className="font-poppins text-xl mb-6 text-center">Are you Sure?</p>
					<p className="text-sm font-poppins text-red-500">Note - If you delete category then category images are also deleted.</p>
				</div>
				<div className="flex justify-center gap-4 mt-10">
					<button className="text-white px-4 py-2 bg-red-500 rounded" onClick={handleDelete} disabled={loading}>
						Delete
					</button>
					<button className="text-white px-4 py-2 bg-gray-600 rounded" onClick={() => setShowModal(false)}>Cancel</button>
				</div>
			</Modal >

			<Modal show={showEditModal} onClose={() => { setShowEditModal(false) }}>
				<form className="" onSubmit={handleUpdate}>
					<div className="mb-4">
						<label htmlFor="categoryName" className="block text-gray-700 font-medium mb-2">Category Name</label>
						<input type="text" id="categoryName" className="w-full border border-gray-300 rounded p-2" required
							value={categoryName}
							onChange={(e) => setCategoryName(e.target.value)}
						/>
					</div>

					<div className="mb-4">
						<label className="block text-gray-700 font-medium mb-2"	>	Upload Image</label>
						<input type="file" accept="image/*" className="border rounded w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 mb-4"
							onChange={(e) => setImg(e.target.files[ 0 ])}
						/>
					</div>
					<div className="flex justify-center">
						<button type="submit" className="bg-darkSky text-white py-2 px-4 rounded hover:bg-blue-600" disabled={loading} >
							Update Category
						</button>
					</div>
				</form>
			</Modal >
		</>
	);
};

export default AddCategory
