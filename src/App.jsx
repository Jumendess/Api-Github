// App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Normalize } from 'styled-normalize';
import AppRoutes from './routes';

import { GlobalStyle } from './styles/global';
import { Theme } from './styles/Theme';

export default function App() {
  return (
    <Router>
      <Theme>
        <AppRoutes />
        <GlobalStyle />
        <Normalize />
      </Theme>
    </Router>
  );
}
