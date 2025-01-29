import React, { useState, useEffect } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import "../../css/Home.css"

function OurDesign() {
	const [ images, setImages ] = useState([]);

	useEffect(() => {
		const loadImages = async () => {
			const imageFolderPath = '/assets/img/ourDesign/img';
			const maxImages = 9;
			const tempImages = [];

			for (let i = 1; i <= maxImages; i++) {
				const imgPath = `${imageFolderPath}${i}.jpeg`;

				try {
					const response = await fetch(imgPath, { method: 'HEAD' });
					if (response.ok) {
						setImages([ ...tempImages ]);
						tempImages.push(imgPath);
					} else {
						console.warn(`Image not found or error status: ${imgPath} - Status: ${response.status}`);
					}
				} catch (error) {
					console.error(`Error fetching image ${imgPath}:`, error);
				}
			}
		};

		loadImages();
	}, []);

	return (
		<>
			<section className="2xl:container py-10 bg-gray-100 mb-10 m-auto">
				<div className="mx-auto">
					<h2 className="text-5xl text-heading font-bold text-center mb-12">Our Design</h2>

					<div className="grid grid-cols-2 md:grid-cols-4 ">
						{images.map((imgSrc, index) => (
							<img
								key={index}
								src={imgSrc}
								alt={`img ${index + 1}`}
								className='object-contain'
							/>
						))}
					</div>

					<div className="text-center mt-6">
						<Link to='/gallery'>
							<button className="text-white border bg-mySky px-6 py-2 rounded-full hover:bg-darkSky hover:text-white transition-all">
								VIEW GALLERY
							</button>
						</Link>
					</div>
				</div>
			</section>
		</>
	)
}

export default OurDesign