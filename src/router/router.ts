import { createBrowserRouter } from 'react-router-dom';
import { Router } from '@remix-run/router';
import { handleMiddleware } from '@/router/middleware.ts';
import { reviveCurrentRoute } from '@/router/middlewares/revive-current-route.ts';
import Home from '@/views/Home.tsx';
import CustomizeIngredient from '@/views/CustomizeIngredient.tsx';
import CustomizeEnergy from '@/views/CustomizeEnergy.tsx';
import CustomizeTemperature from '@/views/CustomizeTemperature.tsx';
import Dispensing from '@/views/Dispensing.tsx';
import Finished from '@/views/Finished.tsx';

export const router: Router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
    loader: handleMiddleware(reviveCurrentRoute),
  },
  {
    path: '/customize/ingredient',
    Component: CustomizeIngredient,
    loader: handleMiddleware(reviveCurrentRoute),
  },
  {
    path: '/customize/energy',
    Component: CustomizeEnergy,
    loader: handleMiddleware(reviveCurrentRoute),
  },
  {
    path: '/customize/temperature',
    Component: CustomizeTemperature,
    loader: handleMiddleware(reviveCurrentRoute),
  },
  {
    path: '/dispensing',
    Component: Dispensing,
    loader: handleMiddleware(reviveCurrentRoute),
  },
  {
    path: '/finished',
    Component: Finished,
    loader: handleMiddleware(reviveCurrentRoute),
  },
]);
