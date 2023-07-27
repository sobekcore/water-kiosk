import { StorageKey } from '@/enums/storage.ts';
import { Storage } from '@/interfaces/storage.ts';

export function useStorage(): Storage {
  const get = <T>(key: StorageKey): T | null => {
    const value: string | null = localStorage.getItem(key);

    if (value === null) {
      return null;
    }

    return JSON.parse(value) as T;
  };

  const set = (key: StorageKey, value: unknown): void => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const remove = (key: StorageKey): void => {
    localStorage.removeItem(key);
  };

  return {
    get,
    set,
    remove,
  };
}
