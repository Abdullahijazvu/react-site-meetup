import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import {FavoritesContextProvider} from './store/favorite-context';

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <FavoritesContextProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </FavoritesContextProvider>
);
