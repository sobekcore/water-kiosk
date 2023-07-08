import { useContext } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { ComponentException } from '@/exceptions/component-exception.ts';
import { CurrentRouteContextData, CurrentRouteContext } from '@/providers/CurrentRouteProvider.tsx';

export interface UseCurrentRouteReturn {
  navigate(path: string): void;
}

export function useCurrentRoute(): UseCurrentRouteReturn {
  const currentRouteContext: CurrentRouteContextData | null = useContext(CurrentRouteContext);
  const reactRouterNavigate: NavigateFunction = useNavigate();

  const navigate = (path: string): void => {
    if (!currentRouteContext) {
      throw new ComponentException('CurrentRouteContext is not available at this component level');
    }

    currentRouteContext.setCurrentPath(path);
    reactRouterNavigate(path);
  };

  return {
    navigate,
  };
}
