import React from 'react'

function Banner({ data }) {
	return (
		<>
			<div className='min-h-[100px] max-h-[400px] w-full overflow-hidden bg-gray-300'>
				<img src={data.banner} alt="Banner" className='object-bottom w-full' />
			</div>

			{/* Header */}
			<div className="container mx-auto mt-6 md:mt-8 px-4 py-8">
				<p className=" text-4xl md:text-5xl font-semibold text-center text-blue-900 mb-6 md:mb-12 uppercase">
					{data.header}
				</p>
				{/* Hero Section */}
				<div className="flex flex-col gap-20">
					<div>
						{/* Image Section */}
						<div className="w-full md:w-auto md:float-left md:pr-5 lg:pr-10 mb-8 md:pb-3 lg:pb-5">
							<img src={data.image.src} width={data.image.width} height={data.image.height} alt='img'
								className="w-full h-auto md:w-[400px] lg:w-[450px] lg:h-80 object-cover"
							/>
						</div>

						{/* <h2 className="text-2xl font-normal text-text uppercase">About <span className='text-mySky'>Best Fitted Wardrobe</span></h2> */}

						{/* Text Section */}
						<div className="space-y-6">
							<h2 className="text-2xl font-normal text-text uppercase">
								{/* {data?.title?.split(" ").map((word, index) =>
									word === data?.highlightedText ? (<span key={index} className="text-mySky">{word}</span>
									) : (<React.Fragment key={index}> {word} </React.Fragment>)
								)} */}
								{data?.title} <span className='text-mySky'>{data?.highlightedText}</span>
							</h2>
							<div className="text-text line leading-7 space-y-5">
								{data.paragraphs.map((paragraph, index) => (
									<p key={index}>{paragraph}</p>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Banner