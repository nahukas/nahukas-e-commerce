import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from '../components/header/Header';
import HomePage from '../pages/HomePage/HomePage';
import ShopPage from '../pages/ShopPage/ShopPage';

const RoutesComponent = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/shop' element={<ShopPage />} />
    </Routes>
  </BrowserRouter>
);

export default RoutesComponent;
