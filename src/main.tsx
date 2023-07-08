import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from '@/router/router.ts';
import CurrentRouteProvider from '@/providers/CurrentRouteProvider.tsx';
import WaterProvider from '@/providers/WaterProvider.tsx';
import '@/styles/styles.css';

const root: HTMLElement | null = document.querySelector('#root');

if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <CurrentRouteProvider>
        <WaterProvider>
          <RouterProvider router={router} />
        </WaterProvider>
      </CurrentRouteProvider>
    </React.StrictMode>,
  );
}
