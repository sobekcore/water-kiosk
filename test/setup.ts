import { afterEach, expect } from 'vitest';
import { cleanup, configure } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);

configure({
  testIdAttribute: 'data-test',
});

afterEach(() => {
  cleanup();
});
