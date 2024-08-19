import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import CustomRouter from './components/Router/CustomRouter.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={CustomRouter}></RouterProvider>
  </React.StrictMode>
);
