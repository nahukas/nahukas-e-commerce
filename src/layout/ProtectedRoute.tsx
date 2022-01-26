import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const ProtectedRoute: React.FC = () => {
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

  return <Outlet />;
};

export default React.memo(ProtectedRoute);
