import { describe, it } from 'vitest';
import testRender from './test/testRender';
import MainPage from './pages/Main';
import { waitFor } from '@testing-library/react';

describe('App', () => {
  it('Runs tests', async () => {
    await waitFor(() => {
      testRender({ Component: <MainPage /> });
    });
  });
});
