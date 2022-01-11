import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from '../components/header/Header';
import HomePage from '../pages/HomePage/HomePage';
import ShopPage from '../pages/ShopPage/ShopPage';
import SignInSignUpPage from '../pages/SignInSignUpPage/SignInSignUpPage';

const RoutesComponent = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/shop' element={<ShopPage />} />
      <Route path='/sign-in-sign-up' element={<SignInSignUpPage />} />
    </Routes>
  </BrowserRouter>
);

export default RoutesComponent;
