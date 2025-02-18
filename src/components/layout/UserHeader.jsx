import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CookiePolicy from "../CookiePolicy/CookiePolicy";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';

const UserHeader = () => {

	const [ isVisible, setIsVisible ] = useState(false);

	useEffect(() => {
		const hasAccepted = Cookies.get("cookiesAccepted");
		if (!hasAccepted) {
			const timer = setTimeout(() => {
				setIsVisible(true);
			}, 2000);
			return () => clearTimeout(timer);
		}
	}, []);

	return (
		<>
			{isVisible && <CookiePolicy />}
			<Header />
			<Outlet />
			<Footer />
		</>
	);
};

export default UserHeader;
