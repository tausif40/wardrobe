import React from 'react'
import AdminNav from '../../Header/AdminNav'
import { Link } from 'react-router-dom'

function Dashboard() {
	return (
		<>
			<AdminNav />

			<div className='h-[87vh] w-full bg-no-repeat ' style={{ backgroundImage: "url('/assets/img/homeCrouse/bed1.jpeg')" }}>

				<div className='container py-4'>

					<div className=''>
						<p className='text-3xl text-heading font-semibold '>Welcome to admin Panel</p>
					</div>

					<div className='flex gap-8 mt-12 justify-end flex-col'>
						<div className='border px-4 pt-2 pb-4 rounded w-72 backdrop-blur-lg bg-primary shadow-sm'>
							<p className='text-xl font-lg font-bold text-gray-700'>Image Category</p>
							<p className='text-text mt-3 mb-4'>Create a new category for images</p>
							<Link to='/admin/add-category'>
								<button className='bg-gray-800 px-4 py-2 rounded-md text-white'>
									Add Category
								</button>
							</Link>
						</div>
						<div className='border px-4 pt-2 pb-4 rounded w-72 backdrop-blur-lg bg-primary shadow-sm'>
							<p className='text-xl font-lg font-bold text-gray-700'>Upload Images</p>
							<p className='text-text mt-3 mb-4'>Upload new images to the gallery</p>
							<Link to='/admin/upload-images'>
								<button className='bg-gray-800 px-4 py-2 rounded-md text-white'>
									Upload images
								</button>
							</Link>
						</div>
					</div >
				</div >
			</div>

		</>
	)
}

export default Dashboard