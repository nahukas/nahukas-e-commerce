import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AuthProvider from '../context/AuthContext';
import CartProvider from '../context/cart/CartContext';

import ProtectedRoute from '../layout/ProtectedRoute';
import PublicRoute from '../layout/PublicRoute';

import CheckoutPage from '../pages/Checkout/Checkout';
import HomePage from '../pages/HomePage/HomePage';
import Layout from '../layout/Layout';
import SectionPage from '../pages/SectionPage/SectionPage';
import ShopPage from '../pages/ShopPage/ShopPage';
import SignInSignUpPage from '../pages/SignInSignUpPage/SignInSignUpPage';

const RoutesComponent = () => (
  <AuthProvider>
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='*' element={<HomePage />} />
            <Route element={<ProtectedRoute />}>
              <Route path='/shop/:section' element={<SectionPage />} />
              <Route path='/shop' element={<ShopPage />} />
              <Route path='/checkout' element={<CheckoutPage />} />
            </Route>
            <Route element={<PublicRoute />}>
              <Route path='/sign-in-sign-up' element={<SignInSignUpPage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  </AuthProvider>
);

export default RoutesComponent;
