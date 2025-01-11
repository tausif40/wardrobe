import React from 'react'
import Hero from '../Home/Hero'
import AboutUs from '../Home/AboutUs'
import Services from '../Home/Services'
import CTA from '../page/CTA'
import OurDesign from '../Home/OurDesign'

function HomePageLayout() {
	return (
		<>
			<Hero />
			<AboutUs />
			<Services />
			<OurDesign />
			<div className='container'>
				<CTA />
			</div>
		</>
	)
}

export default HomePageLayout