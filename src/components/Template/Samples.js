import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const colorSamples = [
	{ id: '312', name: 'Super Matt White', type: 'bg-white border' },
	{ id: '746', name: 'Super Matt Cream', type: 'bg-[#f5f0e3]' },
	{ id: '539', name: 'High Gloss Project White', type: 'bg-[#f9f9f9]' },
	{ id: '154', name: 'High Gloss Cream', type: 'bg-[#f7f3e3]' },
	{ id: '845', name: 'High Gloss Ivory', type: 'bg-[#fbf7e8]' },
	{ id: '680', name: 'High Gloss Fuchsia', type: 'bg-[#c41e3a]' },
	{ id: '846', name: 'High Gloss Honey Glare', type: 'bg-[#d4bc8c]' },
	{ id: '1167', name: 'High Gloss Light Grey', type: 'bg-[#d3d3d3]' },
	{ id: '138', name: 'High Gloss Anthracite', type: 'bg-[#383e42]' },
	{ id: '168', name: 'High Gloss Black', type: 'bg-black' },
	{ id: '67', name: 'Metalic Brushed Nickel', type: 'bg-[#c0c0c0]' },
	{ id: '1290', name: 'High Gloss Black Galaxy', type: 'bg-[#0a0a0a]' },
]

const kitchenSamples = [
	{
		id: 1,
		url: "/assets/img/kitchen.jpeg",
		alt: "Modern white kitchen with black countertops"
	},
	// Add more kitchen samples as needed
]

const images = [
	{
		src: "/assets/img/tempCrousel/img1.jpg",
		thumbnail: "/assets/img/tempCrousel/img1.jpg",
	},
	{
		src: "/assets/img/tempCrousel/img2.jpg",
		thumbnail: "/assets/img/tempCrousel/img2.jpg",
	},
	{
		src: "/assets/img/tempCrousel/img3.jpg",
		thumbnail: "/assets/img/tempCrousel/img3.jpg",
	},
	{
		src: "/assets/img/tempCrousel/img4.jpg",
		thumbnail: "/assets/img/tempCrousel/img4.jpg",
	},
	{
		src: "/assets/img/tempCrousel/img5.jpg",
		thumbnail: "/assets/img/tempCrousel/img5.jpg",
	},
];

export default function Samples({ data }) {

	const [ currentIndex, setCurrentIndex ] = useState(0);

	const handleNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
	};

	const handlePrevious = () => {
		setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
	};

	return (
		<div className="container mx-auto px-4 py-8">
			<div className="grid lg:grid-cols-2 gap-12">
				{/* Colors & Finishes Section */}
				<section>
					<h2 className="text-2xl mb-6 text-gray-800 font-medium">
						OUR WIDE VARIETY OF COLOURS & FINISHES...
					</h2>
					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 bg-gray-100 px-3 py-4">
						{colorSamples.map((sample) => (
							<div key={sample.id} className="flex flex-col items-center">
								<div
									className={`w-24 h-24 ${sample.type} shadow-md rounded-sm transition-transform hover:scale-105`}
								/>
								<p className="mt-2 text-sm text-center text-gray-600">
									{sample.id} {sample.name}
								</p>
							</div>
						))}
					</div>
				</section>

				{/* Kitchen Samples Section */}
				<section>
					<h2 className="text-2xl mb-6 text-gray-800 h-8 uppercase font-medium">
						{data?.heading}
					</h2>
					<div className='bg-gray-100 border-4 border-white shadow'>
						<PhotoProvider maskOpacity={0.8}>
							<div className="relative">
								{/* Main Preview Image */}
								<PhotoView src={images[ currentIndex ].src}>
									<div className='w-full h-96 bg-gray-200 overflow-hidden flex justify-center items-center'>
										<img
											src={images[ currentIndex ].thumbnail}
											alt=""
											style={{
												cursor: 'pointer',
												display: 'block',
												objectFit: 'cover',
												width: 'full',
												height: 'auto'
											}}
										/>
									</div>
								</PhotoView>

								{/* next prev button */}
								<button
									onClick={handlePrevious}
									className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
									aria-label="Previous slide"
								>
									<ChevronLeft className="w-6 h-6 text-gray-800" />
								</button>
								<button
									onClick={handleNext}
									className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
									aria-label="Next slide"
								>
									<ChevronRight className="w-6 h-6 text-gray-800" />
								</button>
							</div>

							{/* Thumbnail Images */}
							<div className="customHorizontalScroll overflow-x-auto mt-4 pb-1" style={{ display: 'flex', gap: '8px' }}>
								{images.map((image, index) => (
									<PhotoView key={index} src={image.src}>
										<img
											src={image.thumbnail}
											alt=""
											style={{
												cursor: 'pointer',
												width: '60px',
												height: '60px',
												objectFit: 'cover',
												border: currentIndex === index ? '2px solid #007BFF' : 'none',
											}}
											onClick={() => setCurrentIndex(index)}
										/>
									</PhotoView>
								))}
							</div>
						</PhotoProvider>

					</div>
				</section>
			</div>
		</div>
	)
}

