import { Mock, beforeEach, vitest } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useTimer } from '@/hooks/useTimer.ts';

const MOCK_TIMEOUT: number = 1000;
const MOCK_CALLBACK: Mock = vitest.fn();

describe('useTimer', () => {
  beforeEach(() => {
    renderHook(() => useTimer(MOCK_TIMEOUT, MOCK_CALLBACK));
  });

  it('should not call function before given timeout', () => {
    expect(MOCK_CALLBACK).toHaveBeenCalledTimes(0);
  });

  it('should call function after given timeout', () => {
    setTimeout((): void => {
      expect(MOCK_CALLBACK).toHaveBeenCalledTimes(1);
    }, MOCK_TIMEOUT);
  });
});
