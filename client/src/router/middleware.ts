import { LoaderFunction } from 'react-router-dom';
import { LoaderFunctionArgs } from '@remix-run/router';

export function handleMiddleware(...middlewares: LoaderFunction[]): LoaderFunction {
  return async (args: LoaderFunctionArgs): Promise<null> => {
    for (const middleware of middlewares) {
      await middleware(args);
    }

    return null;
  };
}
