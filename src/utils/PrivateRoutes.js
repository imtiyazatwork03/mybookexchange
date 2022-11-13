import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  const token = localStorage.getItem('token');
  const auth = { token };
  return auth.token ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
