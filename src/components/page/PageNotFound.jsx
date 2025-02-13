import React from 'react'
import { useLocation } from 'react-router-dom';

function PageNotFound() {
	const location = useLocation();
	const isAdminPath = location.pathname.startsWith('/admin');

	return (
		<>
			<div className={`w-full ${isAdminPath ? 'h-screen' : 'h-[80vh]'} flex justify-center items-center bg-slate-100`}>
				<img src="/assets/img/pageNotFound.png" alt="" className='w-1/3' />
			</div>
		</>
	)
}

export default PageNotFound