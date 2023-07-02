import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '@/views/Home.tsx';
import CustomizeIngredient from '@/views/CustomizeIngredient.tsx';
import CustomizeEnergy from '@/views/CustomizeEnergy.tsx';
import '@/styles/styles.css';
import { CustomizeTemperature } from '@/views/CustomizeTemperature.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/customize/ingredient',
    Component: CustomizeIngredient,
  },
  {
    path: '/customize/energy',
    Component: CustomizeEnergy,
  },
  {
    path: '/customize/temperature',
    Component: CustomizeTemperature,
  },
]);

const root: HTMLElement | null = document.querySelector('#root');

if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  );
}
