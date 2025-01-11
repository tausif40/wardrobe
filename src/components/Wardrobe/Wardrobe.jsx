import React from 'react'
import { ChevronLeft, ChevronRight, Mail, Phone } from 'lucide-react'

function Wardrobe() {
	return (
		<div className="max-w-7xl mx-auto px-4 py-8">
			{/* Header */}
			<h1 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-12">
				WARDROBES
			</h1>

			{/* Hero Section */}
			<div className="grid md:grid-cols-2 gap-8 mb-12">
				<div className="relative h-[300px] md:h-[400px]">
					<img
						src="/placeholder.svg?height=400&width=600"
						alt="Modern fitted wardrobe"
						fill
						className="object-cover rounded-lg"
					/>
				</div>
				<div className="space-y-6">
					<h2 className="text-2xl font-semibold text-blue-900">WARDROBES</h2>
					<p className="text-gray-600">
						At Best Fitted Wardrobe we will work along with you in order to create the perfect storage
						solution that will not only be of a unique style and configuration, but tailor-made to the exact
						dimensions of your room or awkward space no matter how large or small.
					</p>
					<p className="text-gray-600">
						At Best Fitted Wardrobe we can stretch from floor to ceiling and from wall to wall, even fitting the
						most awkward shaped rooms. Inside all our wardrobes, storage space has been maximised to
						make room for an innovative range of storage solutions that are chosen with you in mind, and
						tailored by us to your precise needs and requirements.
					</p>
				</div>
			</div>

			{/* Color Samples Section */}
			<div className="mb-12">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div>
						<h3 className="text-xl font-semibold mb-6">OUR WIDE VARIETY OF COLOURS & FINISHES...</h3>
						<div className="grid grid-cols-4 gap-4">
							{Array.from({ length: 16 }).map((_, i) => (
								<div key={i} className="aspect-square bg-gray-100 rounded-md p-2">
									<div className="w-full h-full bg-gray-200 rounded"></div>
									<p className="text-xs text-center mt-2">Sample {i + 1}</p>
								</div>
							))}
						</div>
					</div>
					<div>
						<h3 className="text-xl font-semibold mb-6">SAMPLES OF ALL OUR WARDROBES</h3>
						<div className="relative h-[400px] group">
							<img
								src="/placeholder.svg?height=400&width=600"
								alt="Wardrobe sample"
								fill
								className="object-cover rounded-lg"
							/>
							<button className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
								<ChevronLeft className="h-6 w-6" />
							</button>
							<button className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
								<ChevronRight className="h-6 w-6" />
							</button>
						</div>
					</div>
				</div>
			</div>

		</div>
	)
}

export default Wardrobe