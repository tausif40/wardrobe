import React from 'react'
import Hero from '../Home/Hero'
import AboutUs from '../Home/AboutUs'
import Services from '../Home/Services'
import CTA from '../page/CTA'
import OurDesign from '../Home/OurDesign'
import { Helmet } from 'react-helmet-async'

function HomePageLayout() {
	return (
		<>
			<Helmet>
				<title>Best Fitted Wardrobes | Custom-Made Built-In & Sliding Wardrobes</title>
				<meta name="description" content="Get high-quality fitted wardrobes, built-in wardrobes, and sliding wardrobes customized for your space. Free design consultation available." />
				<meta name="keywords" content="fitted wardrobes, built-in wardrobes, sliding wardrobes, custom wardrobes, UK wardrobes" />
				<meta name="robots" content="index, follow" />
				<link rel="canonical" href="(https://bestfittedwardrobe.co.uk" />

				<script type="application/ld+json">
					{JSON.stringify({
						"@context": "https://schema.org",
						"@type": "LocalBusiness",
						"name": "Best Fitted Wardrobes",
						"url": "https://bestfittedwardrobe.co.uk/",
						"logo": "https://bestfittedwardrobe.co.uk/logo.png",
						"description": "Get high-quality fitted wardrobes, built-in wardrobes, and sliding wardrobes customized for your space. Free design consultation available.",
						"telephone": "+44 1234 567890",
						"address": {
							"@type": "PostalAddress",
							"streetAddress": "Unit A3 Seedbed Centre Davidsonway Romford RM7 0AZ",
							"addressLocality": "London",
							"addressCountry": "UK"
						},
						"openingHours": "Mon-Sat 09:00-18:00",
						"sameAs": [
							"https://www.facebook.com/bestfittedwardrobes",
							"https://www.instagram.com/bestfittedwardrobes"
						]
					})}
				</script>
			</Helmet>

			<Hero />
			<AboutUs />
			<Services />
			<OurDesign />
			<div className='my-16'>
				<CTA />
			</div >
		</>
	)
}

export default HomePageLayout