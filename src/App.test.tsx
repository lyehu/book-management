import { describe, it } from 'vitest';
import testRender from './test/testRender';
import MainPage from './pages/Main';

describe('App', () => {
  it('Runs tests', () => {
    testRender({ Component: <MainPage /> });
  });
});
