import { ReactNode, createContext, useState } from 'react';
import { StorageKey } from '@/enums/storage.ts';
import { CurrentRouteState } from '@/interfaces/current-route.ts';
import { Storage } from '@/interfaces/storage.ts';
import { useStorage } from '@/hooks/useStorage.ts';

interface CurrentRouteProviderProps {
  children: ReactNode;
  value?: Partial<CurrentRouteState>;
}

export interface CurrentRouteContextData {
  getLoaded(): boolean;
  getCurrentPath(): string;
  setLoaded(loaded: boolean): void;
  setCurrentPath(path: string): void;
}

export const CurrentRouteContext = createContext<CurrentRouteContextData | null>(null);

export default function CurrentRouteProvider({ children, value = {} }: CurrentRouteProviderProps) {
  const storage: Storage = useStorage();

  const [state, setState] = useState<CurrentRouteState>({
    loaded: false,
    path: storage.get<string>(StorageKey.PATH) ?? '/',
    ...value,
  });

  const data: CurrentRouteContextData = {
    getLoaded(): boolean {
      return state.loaded;
    },
    getCurrentPath(): string {
      return state.path;
    },
    setLoaded(loaded: boolean): void {
      setState({ ...state, loaded });
    },
    setCurrentPath(path: string): void {
      setState({ ...state, path });
      storage.set(StorageKey.PATH, path);
    },
  };

  return <CurrentRouteContext.Provider value={data} children={children} />;
}
