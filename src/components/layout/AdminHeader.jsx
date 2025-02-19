import { Outlet, useLocation } from "react-router-dom";
import AdminNav from "../Header/AdminNav";

const AdminHeader = () => {
	const location = useLocation();
	const isAdminLogin = location.pathname === '/admin';
	return (
		<>
			{!isAdminLogin && <AdminNav />}
			<Outlet />
		</>
	);
};

export default AdminHeader;
