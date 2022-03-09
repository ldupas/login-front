import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from '../../../contexts/UserProvider';

const AdminRoutes = () => {
  const { user } = useUser();

  return user ? <Outlet /> : <Navigate to="/" />;
};

export default AdminRoutes;
