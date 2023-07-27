import { afterEach, expect } from 'vitest';
import * as matchers from '@testing-library/jest-dom/matchers';
import { cleanup, configure } from '@testing-library/react';

expect.extend(matchers);

configure({
  testIdAttribute: 'data-test',
});

afterEach(() => {
  cleanup();
});
