import { redirect } from 'react-router-dom';
import { LoaderFunctionArgs } from '@remix-run/router';
import { StorageKey } from '@/enums/storage.ts';
import { Storage } from '@/interfaces/storage.ts';
import { useStorage } from '@/hooks/useStorage.ts';

export async function reviveCurrentRoute(args: LoaderFunctionArgs): Promise<null> {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const storage: Storage = useStorage();

  const path: string | null = storage.get<string>(StorageKey.PATH);
  const url: URL = new URL(args.request.url);

  if (!path && url.pathname !== '/') {
    throw redirect('/');
  }

  if (path && path !== url.pathname) {
    throw redirect(path);
  }

  return null;
}
