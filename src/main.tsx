import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App.tsx';
import '@/styles/styles.css';

const root: HTMLElement | null = document.querySelector('#root');

if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
