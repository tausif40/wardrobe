import React, { useState } from 'react'
import '../../css/Home.css';
import ClaimDesign from '../ClaimDesign/ClaimDesign';

function HeroLandingPage() {

	const [ modalOpen, setModalOpen ] = useState(false);

	return (
		<>
			<ClaimDesign isOpen={modalOpen} onClose={() => setModalOpen(false)} />
			<div className="relative h-[550px] bg-no-repeat bg-cover bg-center" style={{ backgroundImage: "url('./assets/img/homeCrouse/bed1.jpeg')" }}>
				<div className="absolute inset-0 bg-cover bg-center"

				>
					<div className="absolute inset-0"></div>
				</div>

				<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
					<div className="heroCircle relative w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-primary flex flex-col gap-6 items-center justify-center text-white outline outline-[16px] outline-white/20 p-2 sm:p-0">
						<div className='text-center'>
							<p className="text-[28px] sm:text-2xl font-light text-heading">WELCOME TO BEST</p>
							<p className="text-2xl font-light text-heading">FITTED</p>
						</div>
						{/* <button className="clamBtn p-[1px] text-xl md:text-7xl lg:text-2xl font-poppins border px-4 py-2 cursor-pointer rounded-full transition" style={{ filter: 'drop-shadow(0px 0px 2px #f7f7f7)' }} onClick={() => setModalOpen(true)}>
							<span className='btnSpan bg-[#3fa69a] hover:bg-[#487ca1] backdrop-blur-[40px]'>INTEREST	FREE CREDIT</span>
						</button> */}
						<button className="clamBtn relative flex cursor-pointer items-center justify-center overflow-hidden rounded-full p-[2px] border font-poppins" onClick={() => setModalOpen(true)}>
							<span className=" btnSpan relative z-10 w-full rounded-full text-sky-800 px-4 py-2 backdrop-blur-[40px] bg-sky-100 min-w-max text-xl md:text-1xl lg:text-2xl">
								INTEREST	FREE CREDIT
							</span>
						</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default HeroLandingPage
