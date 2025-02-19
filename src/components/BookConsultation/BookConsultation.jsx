import { useState, useEffect } from "react";
import axios from "axios";
import { Tooltip } from 'antd';
import TableLoader from "../Loader/TableLoader";

const BookConsultation = () => {
	const [ data, setData ] = useState([]);
	const [ loading, setLoading ] = useState(true);
	const [ error, setError ] = useState(null);
	const [ searchQuery, setSearchQuery ] = useState("");

	const BASE_URL = process.env.REACT_APP_API_URL;

	useEffect(() => {
		document.documentElement.scrollTop = document.documentElement.clientHeight;
		document.documentElement.scrollLeft = document.documentElement.clientWidth;
	}, []);

	useEffect(() => {
		axios.get(`${BASE_URL}/design-bookings`)
			.then((response) => {
				setData(response?.data?.bookings);
				setLoading(false);
			})
			.catch((error) => {
				setError(error.message);
				setLoading(false);
			});
	}, []);

	const handleSearch = (event) => {
		setSearchQuery(event.target.value.toLowerCase());
	};

	const filteredData = data.filter((item) => {
		return (
			(`${item.title} ${item.firstName} ${item.lastName}`.toLowerCase().includes(searchQuery)) ||
			(item.telephone?.toLowerCase().includes(searchQuery)) ||
			(item.email?.toLowerCase().includes(searchQuery)) ||
			(item.address?.toLowerCase().includes(searchQuery)) ||
			(item.lookingFor?.toLowerCase().includes(searchQuery)) ||
			(new Date(item.createdAt).toLocaleDateString().includes(searchQuery))
		);
	});

	if (loading) return <TableLoader />;
	if (error) return <p className="text-center text-red-500 p-4">Error: {error}</p>;

	return (
		<div className="container mt-4 p-6 mx-auto">
			<div className="flex justify-between items-center p-2 bg-gray-100">
				<h2 className="text-2xl font-bold">Customer Inquiries</h2>
				<input
					type="text"
					placeholder="Search..."
					value={searchQuery}
					onChange={handleSearch}
					className="w-3/5 p-2 border border-gray-600 focus:outline-mySky"
				/>
			</div>
			<div className="overflow-x-auto mt-4">
				<table className="min-w-full border border-gray-200 bg-white shadow-md rounded-lg">
					<thead className="bg-slate-200 border-b">
						<tr>
							<th className="p-3 text-left">Name</th>
							<th className="p-3 text-left">Telephone</th>
							<th className="p-3 text-left">Email</th>
							<th className="p-3 text-left">Address</th>
							<th className="p-3 text-left">Looking For</th>
							<th className="p-3 text-left w-48">Message</th>
							<th className="p-3 text-left">Date</th>
							<th className="p-3 text-left">Time</th>
						</tr>
					</thead>
					<tbody>
						{filteredData.map((item) => (
							<tr key={item._id} className="border-b hover:bg-gray-50 even:bg-gray-100">
								<td className="p-3"><p className="min-w-max">{item.title} {item.firstName} {item.lastName}</p></td>
								<td className="p-3"><p className="min-w-max">{item.telephone}</p></td>
								<td className="p-3"><p className="min-w-max">{item.email}</p></td>
								<td className="p-3"><p className="min-w-max">{item.address}</p></td>
								<td className="p-3">{item.lookingFor}</td>
								<Tooltip title={item.message}>
									<td className="p-3 min-w-48" type="primary">
										{item.message.length > 40 ? item.message.substring(0, 40) + '.....' : item.message}
									</td>
								</Tooltip>
								<td className="p-3">{new Date(item.createdAt).toLocaleDateString()}</td>
								<td className="p-3">{new Date(item.createdAt).toLocaleTimeString()}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default BookConsultation;
