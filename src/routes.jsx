// routes.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Importe Routes
import RepositoriesPage from './pages/RepositoriesPage';

import MainPage from './pages/MainPage';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/repositories" element={<RepositoriesPage />} />
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}

export default AppRoutes;
