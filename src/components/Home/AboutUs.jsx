import { Link } from "react-router-dom";

const AboutUs = () => {
	return (
		<section className=" m-auto bg-gray-50">
			<div className="2xl:container mx-auto px-4">

				<div className="w-full">
					<div className="grid grid-1 md:grid-cols-2 md:text-lg ld:text-xl">
						<div className="bg-mySky text-white p-4">
							<p>Let our Designers Create Your Perfect Fitted Wardrobes Save up to 70% Off High Street Prices</p>
						</div>
						<div className="bg-primary text-white p-4">
							<p>Finance Now Available, apply Online, Subject to status*</p>
						</div>
					</div>
				</div>

				<div class="aboutMain">
					<div class="circle hidden sm:block sm:left-[3%] md:left-[6%] lg:left-[10%] xl:left-[12%] bg-gray-300">
						<img src="/assets/img/circleLeft.jpeg" alt="" className="rounded-full" />
					</div>
					<div class="relative circle center-circle bg-white outline outline-[16px] outline-gray-100/50">
						<h2 class="title text-text">ABOUT <span className="text-heading">US</span></h2>
						<p class="content">
							Best fitted wardrobe creates and installs luxury bespoke wardrobes and kitchens, designed and crafted in London and Essex. Employing a team of dedicated designers, cabinetmakers and fitters we prioritise innovative design, quality and service. Wit
						</p>
						<Link to='/about-us' className="absolute -bottom-10">
							<button class="bg-primary rounded-full w-20 h-20 text-heading">Read <p>More</p></button>
						</Link>
					</div>
					<div class="circle hidden sm:block sm:right-[3%] md:right-[6%] lg:right-[10%] xl:right-[12%] bg-gray-300">
						<img src="/assets/img/circleRight.jpeg" alt="" className="rounded-full" />
					</div>
				</div>

			</div>
		</section >
	)
}

export default AboutUs;