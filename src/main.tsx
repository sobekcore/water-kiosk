import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import WaterProvider from '@/providers/WaterProvider.tsx';
import Home from '@/views/Home.tsx';
import CustomizeIngredient from '@/views/CustomizeIngredient.tsx';
import CustomizeEnergy from '@/views/CustomizeEnergy.tsx';
import CustomizeTemperature from '@/views/CustomizeTemperature.tsx';
import Dispensing from '@/views/Dispensing.tsx';
import '@/styles/styles.css';

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
  {
    path: '/dispensing',
    Component: Dispensing,
  },
]);

const root: HTMLElement | null = document.querySelector('#root');

if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <WaterProvider>
        <RouterProvider router={router} />
      </WaterProvider>
    </React.StrictMode>,
  );
}
