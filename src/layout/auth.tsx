import { Navigate, useLocation } from 'react-router-dom';

import { useAuth } from '../context/AuthContext';

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  let { user, loading } = useAuth();
  let location = useLocation();

  if (loading) {
    return <h1>Loading..</h1>;
  }

  if (!user) {
    return (
      <Navigate to='/sign-in-sign-up' state={{ from: location }} replace />
    );
  }

  return children;
};

export const PublicAuth = ({ children }: { children: JSX.Element }) => {
  let { user, loading } = useAuth();
  let location = useLocation();

  if (loading) {
    return <h1>Loading..</h1>;
  }

  if (user) {
    return <Navigate to='/' state={{ from: location }} replace />;
  }

  return children;
};
