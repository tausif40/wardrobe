import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const AdminLogin = () => {
	const navigate = useNavigate();
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ showPassword, setShowPassword ] = useState(false);
	const [ loading, setLoading ] = useState(false);
	const [ error, setError ] = useState('');

	const SESSION_TIMEOUT = 24 * 60 * 10000;

	const BASE_URL = process.env.REACT_APP_API_URL;
	useEffect(() => {
		const sessionStartTime = sessionStorage.getItem('sessionStartTime');
		const currentTime = Date.now();
		if (sessionStartTime && currentTime - sessionStartTime > SESSION_TIMEOUT) {

			sessionStorage.removeItem('token');
			sessionStorage.removeItem('sessionStartTime');
			navigate('/admin');
		}
	}, [ navigate ]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError('');

		const data = { email, password };
		console.log(data);

		try {
			await axios.post(`${BASE_URL}/admin/logIn`, data, {
				headers: { 'Content-Type': 'application/json' }
			}).then((response) => {
				console.log(response);
				console.log('Login successful:', response);
				sessionStorage.setItem('token', response?.data?.token);
				sessionStorage.setItem('sessionStartTime', Date.now());
				navigate('/admin/dashboard');
			}).catch((err) => {
				console.log(err);
				setError('Login failed! Please check your email & password.');
			});
		} catch (err) {
			setError('Login failed! Please check your email & password.');
			console.error('Login error:', err);
		} finally {
			setLoading(false);
		}
	};

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#e0eb7dca] via-[#4dd0e1] to-[#276eccdc]">
			<div className="bg-white p-8 rounded-xl shadow-2xl max-w-md w-full">
				<h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Welcome Back!</h2>
				<form onSubmit={handleSubmit} className="">
					<div className='mb-6'>
						<label htmlFor="email" className="text-sm font-medium text-gray-700 block mb-2">
							Email Address
						</label>
						<input
							type="email"
							id="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="w-full px-4 py-3 rounded bg-[#e8f0fe] border-transparent focus:border-purple-500 focus:ring-0 text-sm transition duration-300 ease-in-out"
							placeholder="example@gmail.com"
							required
						/>
					</div>
					<div className='mb-2'>
						<label htmlFor="password" className="text-sm font-medium text-gray-700 block mb-2">
							Password
						</label>
						<div className="relative">
							<input
								type={showPassword ? "text" : "password"}
								id="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className="w-full px-4 py-3 rounded bg-[#e8f0fe] border-transparent focus:border-purple-500 focus:ring-0 text-sm transition duration-300 ease-in-out"
								placeholder="Your secret password"
								required
							/>
							<button
								type="button"
								onClick={togglePasswordVisibility}
								className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
							>
								{showPassword ? <EyeOff className="h-5 w-5 text-gray-500" /> : <Eye className="h-5 w-5 text-gray-500" />}
							</button>
						</div>
					</div>
					<div className='h-4'>
						{error && <p className="text-red-500 text-sm mb-4">{error}</p>}
					</div>
					<div className='mt-6'>
						<button
							type="submit"
							disabled={loading}
							className="w-full flex justify-center py-3 px-4 border rounded-md shadow-sm font-medium text-[#0f2649] bg-mySky hover:bg-[#dce775] focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed transition-all"
						>
							{loading ? 'Signing In...' : 'Sign In'}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AdminLogin;
