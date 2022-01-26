import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { useAuth } from '../context/AuthContext';

const PublicRoute: React.FC = () => {
  let { user, loading } = useAuth();
  let location = useLocation();

  if (loading) {
    return <h1>Loading..</h1>;
  }

  if (user) {
    return <Navigate to='/' state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default PublicRoute;
