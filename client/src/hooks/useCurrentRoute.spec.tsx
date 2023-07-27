import { MemoryRouter } from 'react-router-dom';
import { RenderHookResult, act, renderHook } from '@testing-library/react';
import { UseCurrentRouteReturn, useCurrentRoute } from '@/hooks/useCurrentRoute.ts';
import { CurrentRouteProviderProps } from '@/providers/CurrentRouteProvider.tsx';
import CurrentRouteProvider from '@/providers/CurrentRouteProvider.tsx';

const MOCK_PATH: string = '/mock-path';

function wrapper({ children }: CurrentRouteProviderProps) {
  return (
    <MemoryRouter>
      <CurrentRouteProvider>{children}</CurrentRouteProvider>
    </MemoryRouter>
  );
}

describe('useCurrentRoute', () => {
  it('should change location', () => {
    const hook: RenderHookResult<UseCurrentRouteReturn, never> = renderHook(() => useCurrentRoute(), { wrapper });

    act(() => {
      hook.result.current.navigate(MOCK_PATH);
    });

    expect(hook.result.current.location.pathname).toEqual(MOCK_PATH);
  });
});
