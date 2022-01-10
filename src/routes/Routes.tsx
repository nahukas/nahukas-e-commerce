import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';

const RoutesComponent = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='*' element={<HomePage />} />
    </Routes>
  </BrowserRouter>
);

export default RoutesComponent;
