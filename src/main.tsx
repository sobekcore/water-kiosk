import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from '@/router/router.tsx';
import CurrentRouteProvider from '@/providers/CurrentRouteProvider.tsx';
import WaterProvider from '@/providers/WaterProvider.tsx';
import CupsProvider from '@/providers/CupsProvider.tsx';
import '@/styles/styles.css';

const root: HTMLElement | null = document.querySelector('#root');

if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <CurrentRouteProvider>
        <WaterProvider>
          <CupsProvider>
            <RouterProvider router={router} />
          </CupsProvider>
        </WaterProvider>
      </CurrentRouteProvider>
    </React.StrictMode>,
  );
}
