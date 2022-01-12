import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AuthProvider from '../context/AuthContext';
import { PublicAuth, RequireAuth } from '../layout/auth';

import Layout from '../layout/Layout';
import HomePage from '../pages/HomePage/HomePage';
import ShopPage from '../pages/ShopPage/ShopPage';
import SignInSignUpPage from '../pages/SignInSignUpPage/SignInSignUpPage';

const RoutesComponent = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='*' element={<HomePage />} />
            <Route
              path='/shop'
              element={
                <RequireAuth>
                  <ShopPage />
                </RequireAuth>
              }
            />
            <Route
              path='/sign-in-sign-up'
              element={
                <PublicAuth>
                  <SignInSignUpPage />
                </PublicAuth>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default RoutesComponent;
