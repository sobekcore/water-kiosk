import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '@/views/Home.tsx';
import Customize from '@/views/Customize.tsx';
import '@/styles/styles.css';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/customize',
    Component: Customize,
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
