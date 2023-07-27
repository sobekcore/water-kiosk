import { createBrowserRouter } from 'react-router-dom';
import { Router } from '@remix-run/router';
import AnimationContainer from '@/router/components/AnimationContainer.tsx';
import { handleMiddleware } from '@/router/middleware.ts';
import { reviveCurrentRoute } from '@/router/middlewares/revive-current-route.ts';
import CustomizeEnergy from '@/views/CustomizeEnergy.tsx';
import CustomizeIngredient from '@/views/CustomizeIngredient.tsx';
import CustomizeTemperature from '@/views/CustomizeTemperature.tsx';
import Dispensing from '@/views/Dispensing.tsx';
import Finished from '@/views/Finished.tsx';
import Home from '@/views/Home.tsx';

export const router: Router = createBrowserRouter([
  {
    element: <AnimationContainer />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: handleMiddleware(reviveCurrentRoute),
      },
      {
        path: '/customize/ingredient',
        element: <CustomizeIngredient />,
        loader: handleMiddleware(reviveCurrentRoute),
      },
      {
        path: '/customize/energy',
        element: <CustomizeEnergy />,
        loader: handleMiddleware(reviveCurrentRoute),
      },
      {
        path: '/customize/temperature',
        element: <CustomizeTemperature />,
        loader: handleMiddleware(reviveCurrentRoute),
      },
      {
        path: '/dispensing',
        element: <Dispensing />,
        loader: handleMiddleware(reviveCurrentRoute),
      },
      {
        path: '/finished',
        element: <Finished />,
        loader: handleMiddleware(reviveCurrentRoute),
      },
    ],
  },
]);
