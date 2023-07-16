import { EffectCallback, useEffect } from 'react';

type TimeoutFunction = () => number;
type CallbackFunction = () => void;

export function useTimer(timeout: TimeoutFunction | number, callback: CallbackFunction): void {
  useEffect((): ReturnType<EffectCallback> => {
    const createTimeout = (): number => {
      return setTimeout(
        (): void => {
          callback();
          timeoutId = createTimeout();
        },
        timeout instanceof Function ? timeout() : timeout,
      );
    };

    let timeoutId: number = createTimeout();

    return (): void => {
      clearTimeout(timeoutId);
    };
  }, []);
}
