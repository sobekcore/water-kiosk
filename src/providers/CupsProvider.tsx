import { ReactNode, createContext, useEffect, useState } from 'react';
import { INITIAL_VALUE } from '@/configs/cups.ts';
import { StorageKey } from '@/enums/storage.ts';
import { IngredientId } from '@/enums/ingredient.ts';
import { CupsState } from '@/interfaces/cups.ts';
import { Storage } from '@/interfaces/storage.ts';
import { useStorage } from '@/hooks/useStorage.ts';
import { useTimer } from '@/hooks/useTimer.ts';

interface CupsProviderProps {
  children: ReactNode;
}

export interface CupsContextData {
  getLastDate(): Date;
  getCups(ingredient: IngredientId): number;
  addCup(ingredient: IngredientId): void;
  clearCups(): void;
}

export const CupsContext = createContext<CupsContextData | null>(null);

export default function CupsProvider({ children }: CupsProviderProps) {
  const storage: Storage = useStorage();

  const [state, setState] = useState<CupsState>({
    lastDate: new Date(storage.get<string>(StorageKey.LAST_DATE) ?? new Date()),
    cups: storage.get<Record<IngredientId, number>>(StorageKey.CUPS) ?? { ...INITIAL_VALUE },
  });

  const data: CupsContextData = {
    getLastDate(): Date {
      return state.lastDate;
    },
    getCups(ingredient: IngredientId): number {
      return state.cups[ingredient];
    },
    addCup(ingredient: IngredientId): void {
      const lastDate: Date = new Date();

      const cups: Record<IngredientId, number> = {
        ...state.cups,
        [ingredient]: ++state.cups[ingredient],
      };

      setState({ ...state, lastDate, cups });
      storage.set(StorageKey.LAST_DATE, lastDate);
      storage.set(StorageKey.CUPS, cups);
    },
    clearCups(): void {
      setState({ ...state, cups: { ...INITIAL_VALUE } });
      storage.remove(StorageKey.CUPS);
    },
  };

  useEffect((): void => {
    const now: Date = new Date();
    const lastDate: Date = data.getLastDate();

    const sameYear: boolean = now.getFullYear() === lastDate.getFullYear();
    const sameMonth: boolean = now.getMonth() === lastDate.getMonth();
    const sameDay: boolean = now.getDay() === lastDate.getDay();

    if (!sameYear || !sameMonth || !sameDay) {
      data.clearCups();
    }
  }, []);

  useTimer((): number => {
    const now: Date = new Date();
    const midnight: Date = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);

    return midnight.getTime() - now.getTime();
  }, data.clearCups);

  return <CupsContext.Provider value={data} children={children} />;
}
