import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AuthProvider from '../context/AuthContext';
import CartProvider from '../context/cart/CartContext';
import { PublicAuth, RequireAuth } from '../layout/auth';

import CheckoutPage from '../pages/Checkout/Checkout';
import HomePage from '../pages/HomePage/HomePage';
import Layout from '../layout/Layout';
import SectionPage from '../pages/SectionPage/SectionPage';
import ShopPage from '../pages/ShopPage/ShopPage';
import SignInSignUpPage from '../pages/SignInSignUpPage/SignInSignUpPage';

const RoutesComponent = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path='/' element={<HomePage />} />
              <Route path='*' element={<HomePage />} />
              <Route
                path='/shop/:section'
                element={
                  <RequireAuth>
                    <SectionPage />
                  </RequireAuth>
                }
              />
              <Route
                path='/shop'
                element={
                  <RequireAuth>
                    <ShopPage />
                  </RequireAuth>
                }
              />
              <Route
                path='/checkout'
                element={
                  <RequireAuth>
                    <CheckoutPage />
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
      </CartProvider>
    </AuthProvider>
  );
};

export default RoutesComponent;
