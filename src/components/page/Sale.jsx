import React from 'react'
import CTA from './CTA'
import { Helmet } from 'react-helmet-async'

function Sale() {
	return (
		<>
			<Helmet>
				<title>Fitted Wardrobes Sale | Discounted Custom Wardrobes & Kitchens</title>
				<meta name="description" content="Get exclusive discounts on fitted wardrobes, built-in storage, and fitted kitchens. Limited-time offers – order now!" />
				<meta name="keywords" content="fitted wardrobes sale, wardrobe discounts UK, built-in wardrobes sale, kitchen sale UK" />
				<meta name="robots" content="index, follow" />
				<link rel="canonical" href="https://bestfittedwardrobe.co.uk/sale" />

				<script type="application/ld+json">
					{JSON.stringify({
						"@context": "https://schema.org",
						"@type": "Offer",
						"name": "Fitted Wardrobes Sale",
						"description": "Get exclusive discounts on fitted wardrobes, built-in storage, and fitted kitchens. Limited-time offers – order now!",
						"url": "https://bestfittedwardrobe.co.uk/sale",
						"priceCurrency": "GBP",
						"availability": "https://schema.org/InStock",
						"validFrom": "2025-03-01"
					})}
				</script >
			</Helmet>

			<div className='max-h-[400px] w-full overflow-hidden bg-gray-300'>
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