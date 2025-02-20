import React from 'react'
import AboutUs from '../Home/AboutUs'
import Services from '../Home/Services'
import CTA from '../page/CTA'
import OurDesign from '../Home/OurDesign'
import HeroLandingPage from '../Home/HeroLandingPage'

function HomePage() {
	return (
		<>
			<HeroLandingPage />
			<AboutUs />
			<Services />
			<OurDesign />
			<div className='my-16'>
				<CTA />
			</div >
		</>
	)
}

export default HomePage