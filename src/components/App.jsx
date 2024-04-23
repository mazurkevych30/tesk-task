import MainLayout from 'layouts/MainLayout/MainLayout';
import CatalogPage from 'pages/CatalogPage/CatalogPage';
import FavoritesPage from 'pages/FavoritesPage/FavoritesPage';
import HomePage from 'pages/HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';
import Modal from './Modal/Modal';
import InfoLayout from 'layouts/InfoLayout/InfoLayout';
import Features from './Features/Features';
import Reviews from './Reviews/Reviews';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />}>
          <Route path=":id" element={<Modal />}>
            <Route path="features" element={<InfoLayout />}>
              <Route index element={<Features />}></Route>
            </Route>
            <Route path="reviews" element={<InfoLayout />}>
              <Route index element={<Reviews />}></Route>
            </Route>
          </Route>
        </Route>
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};
