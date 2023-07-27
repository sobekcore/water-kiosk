import { beforeEach } from 'vitest';
import { RenderHookResult, renderHook } from '@testing-library/react';
import { StorageKey } from '@/enums/storage.ts';
import { Storage } from '@/interfaces/storage.ts';
import { useStorage } from '@/hooks/useStorage.ts';

const MOCK_KEY: StorageKey = StorageKey.PATH;
const MOCK_VALUE: string = '/mock-path';

describe('useStorage', () => {
  let hook: RenderHookResult<Storage, never>;

  beforeEach(() => {
    localStorage.clear();
    hook = renderHook(() => useStorage());
  });

  it('should return null when there is no value in storage', () => {
    expect(hook.result.current.get(MOCK_KEY)).toEqual(null);
  });

  it('should change value in storage', () => {
    hook.result.current.set(MOCK_KEY, MOCK_VALUE);

    expect(hook.result.current.get(MOCK_KEY)).toEqual(MOCK_VALUE);
  });

  it('should remove value from storage', () => {
    hook.result.current.set(MOCK_KEY, MOCK_VALUE);
    hook.result.current.remove(MOCK_KEY);

    expect(hook.result.current.get(MOCK_KEY)).toEqual(null);
  });
});
