import { useContext } from 'react';
import { Location, NavigateFunction, useLocation, useNavigate } from 'react-router-dom';
import { ComponentException } from '@/exceptions/component-exception.ts';
import { CurrentRouteContext, CurrentRouteContextData } from '@/providers/CurrentRouteProvider.tsx';

export interface UseCurrentRouteReturn {
  navigate(path: string): void;
  location: Location;
}

export function useCurrentRoute(): UseCurrentRouteReturn {
  const currentRouteContext: CurrentRouteContextData | null = useContext(CurrentRouteContext);
  const reactRouterNavigate: NavigateFunction = useNavigate();
  const location: Location = useLocation();

  const navigate = (path: string): void => {
    if (!currentRouteContext) {
      throw new ComponentException('CurrentRouteContext is not available at this component level');
    }

    currentRouteContext.setCurrentPath(path);

    reactRouterNavigate(path, {
      state: {
        from: location.pathname,
      },
    });
  };

  return {
    navigate,
    location,
  };
}
