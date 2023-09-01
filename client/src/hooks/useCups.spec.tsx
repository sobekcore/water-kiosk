import { beforeEach } from 'vitest';
import { RenderHookResult, renderHook } from '@testing-library/react';
import { mockCups } from '@test/mocks/objects/cups.mock.ts';
import { IngredientId } from '@/enums/ingredient.ts';
import { UseCupsReturn, useCups } from '@/hooks/useCups.ts';
import CupsProvider, { CupsProviderProps } from '@/providers/CupsProvider.tsx';

const MOCK_CUPS: Record<IngredientId, number> = mockCups({
  [IngredientId.CUCUMBER]: 3,
  [IngredientId.MINT]: 2,
  [IngredientId.NO_FLAVOR]: 1,
});

function wrapper({ children }: CupsProviderProps) {
  return <CupsProvider value={{ cups: MOCK_CUPS }}>{children}</CupsProvider>;
}

describe('useCups', () => {
  let hook: RenderHookResult<UseCupsReturn, IngredientId | null>;

  beforeEach(() => {
    hook = renderHook(() => useCups(IngredientId.NO_FLAVOR), { wrapper });
  });

  it('should return proper value from getCupsPercentage', () => {
    expect(hook.result.current.getCupsPercentage()).toEqual(33);
  });
});
