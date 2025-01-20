import React from 'react'
import '../../css/Home.css';

function Hero() {

	const headerData = {
		features: [
			{ image: "./assets/img/icons/england.png", text: "Made in UK" },
			{ image: "./assets/img/icons/bage.png", text: "10 Year Product Guarantee" },
			{ image: "./assets/img/icons/asset5.png", text: "Soft Close Doors As Standard" },
			{ image: "./assets/img/icons/hanger.png", text: "We fit wardrobes in less than 2-3 weeks" }
		]
	}

	return (
		<div className="relative h-[550px]" style={{ backgroundImage: "url('./assets/img/homeCrouse/bed1.jpeg')" }}>
			<div className="absolute inset-0 bg-cover bg-center"

			>
				<div className="absolute inset-0 bg-black bg-opacity-20"></div>
			</div>

			<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
				<div className="heroCircle relative w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-primary flex flex-col items-center justify-center text-white outline outline-[16px] outline-white/20 p-2 sm:p-0">
					<p className="text-[28px] sm:text-3xl font-light text-heading">WELCOME TO BEST</p>
					<p className="text-3xl font-light text-heading">FITTED</p>
					<p className="text-6xl md:text-7xl lg:text-8xl font-anton tracking-wide"
						style={{ filter: 'drop-shadow(0px 0px 3px #737373)' }}>WARDROBE</p>
				</div>
			</div>

		</div>
	)
}

export default Hero
