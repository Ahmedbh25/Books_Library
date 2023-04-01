import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ShoppingProvider from './Context/ContextShopping';
import ReviewProvider from './Context/ContextReview';
import SearchProvider from './Context/SearchContext';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ShoppingProvider>
        <ReviewProvider>
          <SearchProvider>
            <App />
          </SearchProvider>
        </ReviewProvider>
      </ShoppingProvider>
    </BrowserRouter>
  </React.StrictMode>
);

