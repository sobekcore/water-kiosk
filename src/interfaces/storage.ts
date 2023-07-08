import { StorageKey } from '@/enums/storage.ts';

export interface Storage {
  get<T>(key: StorageKey): T | null;
  set(key: StorageKey, value: unknown): void;
  remove(key: StorageKey): void;
}
