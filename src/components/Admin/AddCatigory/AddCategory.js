import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminNav from "../../Header/AdminNav";
import toast from 'react-hot-toast';

const AddCategory = () => {
	const [ categories, setCategories ] = useState([]);
	const [ categoryName, setCategoryName ] = useState("");
	const [ img, setImg ] = useState(null);
	const [ editCategoryId, setEditCategoryId ] = useState(null);
	const [ updateData, setUpdateData ] = useState(false);

	// const [ editCategoryId, setEditCategoryId ] = useState(null);

	const BASE_URL = process.env.REACT_APP_API_URL;
	const token = sessionStorage.getItem('token');

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const response = await axios.get(`${BASE_URL}/category`, {
					headers: {
						'Content-Type': 'application/json',
						authorization: `Bearer ${token}`,
					},
				});
				setCategories(response.data?.data);
				console.log(response.data?.data);
			} catch (error) {
				console.error("Error fetching categories:", error);
			}
		};
		fetchCategories();
	}, [ updateData ]);

	// Handle Add or Update Category
	const handleSubmit = async (e) => {
		e.preventDefault();

		const formData = new FormData();
		formData.append("image", img);
		formData.append("name", categoryName);

		try {
			for (let [ key, value ] of formData.entries()) {
				console.log(`${key}:`, value);
			}
			if (editCategoryId) {
				// Update category
				await axios.put(`${BASE_URL}/category/${editCategoryId}`, formData);
				alert("Category updated successfully!");
			} else {
				// Add new category
				await axios.post(`${BASE_URL}/category`, formData, {
					headers: {
						'Content-Type': 'multipart/form-data',
						authorization: `Bearer ${token}`,
					},
				});
				console.log("Category added successfully!");
				toast.success("Category added successfully");
			}
			setUpdateData((pre) => !pre)
			// Refresh categories
			// fetchCategories();
			resetForm();
		} catch (error) {
			console.error("Error saving category:", error);
			toast.error("Error saving category");
		}
	};

	// Handle Delete Category
	const handleDelete = async (id) => {
		try {
			await axios.delete(`${BASE_URL}/${id}`);
			alert("Category deleted successfully!");

			// Refresh categories
			setCategories(categories.filter((category) => category.id !== id));
		} catch (error) {
			console.error("Error deleting category:", error);
		}
	};

	// Reset form
	const resetForm = () => {
		setCategoryName("");
		setImg(null);
		setEditCategoryId(null);
	};

	// Handle Edit
	const handleEdit = (category) => {
		setCategoryName(category.name);
		setEditCategoryId(category.id);
	};

	console.log('categories-', categories?.length)

	return (
		<>
			<AdminNav />
			<div className='container py-8'>
				<h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
					Add Category
				</h1>

				<div className="min-h-screen p-6">
					<form
						className="bg-white p-6 shadow-md rounded max-w-lg mx-auto border"
						onSubmit={handleSubmit}
					>
						<div className="mb-4">
							<label
								htmlFor="categoryName"
								className="block text-gray-700 font-medium mb-2"
							>
								Category Name
							</label>
							<input
								type="text"
								id="categoryName"
								value={categoryName}
								onChange={(e) => setCategoryName(e.target.value)}
								className="w-full border border-gray-300 rounded p-2"
								required
							/>
						</div>

						<div className="mb-4">
							<label
								htmlFor="img"
								className="block text-gray-700 font-medium mb-2"
							>
								Upload Image
							</label>
							<input
								type="file"
								id="img"
								accept="image/*"
								onChange={(e) => setImg(e.target.files[ 0 ])}
								required={!editCategoryId}
								className="border rounded w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 mb-4"
							/>
						</div>

						<button
							type="submit"
							className="bg-darkSky text-white py-2 px-4 rounded hover:bg-blue-600"
						>
							{editCategoryId ? "Update Category" : "Add Category"}
						</button>
						{editCategoryId && (
							<button
								type="button"
								onClick={resetForm}
								className="ml-4 text-gray-600 underline"
							>
								Cancel
							</button>
						)}
					</form>

					<div className="mt-10 max-w-4xl mx-auto">
						<h2 className="text-2xl font-bold text-gray-800 mb-4">Categories</h2>
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
							{categories.length > 0 && categories?.map((category) => (
								<div
									key={category.id}
									className="bg-white shadow-md rounded p-4"
								>
									<img
										src={`${BASE_URL}${category.image}`}
										alt={category.name}
										className="w-full h-32 object-cover mb-4 rounded"
									/>
									<h3 className="text-lg font-semibold text-gray-800 mb-2">
										{category.name}
									</h3>
									{/* <div className="flex justify-between">
									<button
										onClick={() => handleEdit(category)}
										className="text-blue-500 underline"
									>
										Edit
									</button>
									<button
										onClick={() => handleDelete(category.id)}
										className="text-red-500 underline"
									>
										Delete
									</button>
								</div> */}
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AddCategory
