import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

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

export default function Samples() {
	const [ currentSlide, setCurrentSlide ] = useState(0)

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % kitchenSamples.length)
	}

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + kitchenSamples.length) % kitchenSamples.length)
	}

	return (
		<div className="container mx-auto px-4 py-8">
			<div className="grid lg:grid-cols-2 gap-12">
				{/* Colors & Finishes Section */}
				<section>
					<h2 className="text-2xl mb-6 text-gray-800 ">
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
					<h2 className="text-2xl mb-6 text-gray-800">
						SAMPLES OF ALL OUR FITTED KITCHEN
					</h2>
					<div className="relative">
						<div className="shadow overflow-hidden border-[6px] border-white">
							<img
								src={kitchenSamples[ currentSlide ].url}
								alt={kitchenSamples[ currentSlide ].alt}
								width={800}
								height={600}
								className="w-full object-cover"
							/>
						</div>

						{/* Navigation Buttons */}
						<button
							onClick={prevSlide}
							className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
							aria-label="Previous slide"
						>
							<ChevronLeft className="w-6 h-6 text-gray-800" />
						</button>
						<button
							onClick={nextSlide}
							className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
							aria-label="Next slide"
						>
							<ChevronRight className="w-6 h-6 text-gray-800" />
						</button>
					</div>
				</section>
			</div>
		</div>
	)
}

