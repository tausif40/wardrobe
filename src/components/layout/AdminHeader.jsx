import { Outlet } from "react-router-dom";
import AdminNav from "../Header/AdminNav";

const AdminHeader = () => {
	return (
		<>
			<AdminNav />
			<Outlet />
		</>
	);
};

export default AdminHeader;
