import React from 'react'

function TableLoader() {
	return (
		<div className="container mt-4 p-6 mx-auto">
			<div className="flex justify-between items-center p-2 bg-gray-100 animate-pulse">
				<div className="h-6 w-48 bg-gray-300 rounded"></div>
				<div className="h-10 w-3/5 bg-gray-300 rounded"></div>
			</div>
			<div className="overflow-x-auto mt-4">
				<table className="min-w-full border border-gray-200 bg-white shadow-md rounded-lg">
					<thead className="bg-slate-200 border-b">
						<tr>
							{[ 'Name', 'Telephone', 'Email', 'Address', 'Looking For', 'Message', 'Date', 'Time' ].map((heading, index) => (
								<th key={index} className="p-3 text-left">{heading}</th>
							))}
						</tr>
					</thead>
					<tbody>
						{[ ...Array(8) ].map((_, index) => (
							<tr key={index} className="border-b hover:bg-gray-50 even:bg-gray-100 animate-pulse">
								{[ ...Array(8) ].map((__, i) => (
									<td key={i} className="p-3">
										<div className="h-4 w-24 bg-gray-300 rounded"></div>
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default TableLoader