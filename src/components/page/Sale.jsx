import React from 'react'
import CTA from './CTA'

function Sale() {
	return (
		<>
			<div className='h-[350px] w-full overflow-hidden bg-gray-300'>
				<img src='/assets/img/sale-banner.jpg' alt="Banner" className='object-bottom w-full' />
			</div>
			<div className='container mx-auto mt-8 px-4 py-8'>
				<p className=" text-4xl md:text-5xl font-semibold text-center text-blue-900 mb-12 uppercase">Sale</p>
				<div className='space-y-4 text-text'>
					<h3 className='uppercase'>Special Offer</h3>
					<p>As a special offer we will fit the wardrobes in a two to three week time scale.</p>

					<p>	**subject to terms and condition</p>

					<p>**colour selection should be in selected colours only . once the job is confirmed and deposit is paid from there two to three week time starts.</p>
				</div>
			</div>
			<div className='my-20'>
				<CTA />
			</div>
		</>
	)
}

export default Sale