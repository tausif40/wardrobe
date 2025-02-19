import React, { useState, useEffect } from "react";
import { MdOutlineArrowUpward } from "react-icons/md";

const BackToTop = () => {
	const [ isVisible, setIsVisible ] = useState(false);

	// Toggle visibility of the back-to-top button based on scroll position
	const toggleVisibility = () => {
		if (window.scrollY > 300) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	// Scroll smoothly to the top of the page
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	// Add event listener on scroll
	useEffect(() => {
		window.addEventListener("scroll", toggleVisibility);
		return () => {
			window.removeEventListener("scroll", toggleVisibility);
		};
	}, []);

	return (
		<>
			<div className="flex flex-col gap-3 fixed bottom-4 right-3 md:right-4 lg:right-6">
				{isVisible && (
					<button
						onClick={scrollToTop}
						className="bg-mySky text-white p-3 rounded-full shadow-lg transition duration-300 z-50"
						aria-label="Back to Top"
					>
						<MdOutlineArrowUpward />
					</button>
				)}
			</div>

			<div className="md:hidden fixed bottom-0 z-50 bg-[#3fa69a] h-14 w-full flex items-center text-white justify-center text-3xl font-bold ">
				<p>CALL : &nbsp;</p><a href="tel:01708756789" className=" hover:underline tracking-wide" >01708756789</a>
			</div>
		</> 
	);
};

export default BackToTop;
