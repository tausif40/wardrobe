const AboutUs = () => {
	return (
		<section className="bg-gray-50">
			<div className="container mx-auto px-4">

				<div className="w-full">
					<div className="grid grid-cols-2 text-xl">
						<div className="bg-mySky text-white p-4">
							<p>Let our Designers Create Your Perfect Fitted Wardrobes Save up to 70% Off High Street Prices</p>
						</div>
						<div className="bg-primary text-white p-4">
							<p>Finance Now Available, apply Online, Subject to status*</p>
						</div>
					</div>
				</div>

				<div class="aboutMain">
					<div class="circle left-[12%] bg-gray-300">
						<img src="/assets/img/circleLeft.jpeg" alt="" className="rounded-full" />
					</div>
					<div class="relative circle center-circle bg-white outline outline-[16px] outline-gray-100/50">
						<h2 class="title text-text">ABOUT <span className="text-heading">US</span></h2>
						<p class="content">
							Best fitted wardrobe creates and installs luxury bespoke wardrobes and kitchens, designed and crafted in London and Essex. Employing a team of dedicated designers, cabinetmakers and fitters we prioritise innovative design, quality and service. Wit
						</p>
						<button class="absolute -bottom-10 read-more bg-primary rounded-full w-20 h-20 text-heading">Read <p>More</p></button>
					</div>
					<div class="circle right-[12%] bg-gray-300">
						<img src="/assets/img/circleRight.jpeg" alt="" className="rounded-full" />
					</div>
				</div>

			</div>
		</section >
	)
}

export default AboutUs;