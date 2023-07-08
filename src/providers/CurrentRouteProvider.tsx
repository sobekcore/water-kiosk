import { ReactNode, createContext, useState } from 'react';
import { StorageKey } from '@/enums/storage.ts';
import { CurrentRouteState } from '@/interfaces/current-route.ts';
import { Storage } from '@/interfaces/storage.ts';
import { useStorage } from '@/hooks/useStorage.ts';

interface CurrentRouteProviderProps {
  children: ReactNode;
}

export interface CurrentRouteContextData {
  getCurrentPath(): string;
  setCurrentPath(path: string): void;
}

export const CurrentRouteContext = createContext<CurrentRouteContextData | null>(null);

export default function CurrentRouteProvider({ children }: CurrentRouteProviderProps) {
  const storage: Storage = useStorage();

  const [state, setState] = useState<CurrentRouteState>({
    path: storage.get<string>(StorageKey.PATH) ?? '/',
  });

  const data: CurrentRouteContextData = {
    getCurrentPath(): string {
      return state.path;
    },
    setCurrentPath(path: string): void {
      setState({ ...state, path });
      storage.set(StorageKey.PATH, path);
    },
  };

  return <CurrentRouteContext.Provider value={data} children={children} />;
}
