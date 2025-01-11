import React, { useState, useEffect } from 'react';

function OurDesign() {
	const [ images, setImages ] = useState([]);

	useEffect(() => {
		// Dynamically generate image paths
		const imageFolderPath = '/assets/img/';
		const maxImages = 10; // Define the maximum number of expected images

		const tempImages = [];
		for (let i = 1; i <= maxImages; i++) {
			const imgPath = `${imageFolderPath}${i}.jpg`;

			// Check if the image exists (using fetch)
			fetch(imgPath, { method: 'HEAD' })
				.then((response) => {
					if (response.ok) {
						tempImages.push(imgPath);
						setImages([ ...tempImages ]); // Update state with the valid images
					}
				})
				.catch((err) => console.error('Image not found:', imgPath));
		}
	}, []);

	return (
		<>
			<section className="py-16">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl font-bold text-center mb-12">Our Design</h2>
					<div className="grid grid-cols-4 gap-4">
						{images.map((imgSrc, index) => (
							<img
								key={index}
								src={imgSrc}
								alt={`Design ${index + 1}`}
								style={{ width: '150px', height: 'auto' }}
							/>
						))}
					</div>
					<div className="text-center mt-8">
						<button className="bg-[#4DD4D4] text-white px-8 py-2 rounded hover:bg-[#3AA0A0]">
							VIEW GALLERY
						</button>
					</div>
				</div>
			</section>
		</>
	)
}

export default OurDesign