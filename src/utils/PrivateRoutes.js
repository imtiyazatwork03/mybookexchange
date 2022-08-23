import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoutes = () => {
    const token = true;
    const auth = { token };
    return (
        auth.token ? <Outlet /> : <Navigate to="/" />
    )
}

export default PrivateRoutes;