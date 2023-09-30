import { expect, describe, it } from 'vitest';
import testRender from './test/testRender';
import MainPage from './pages/Main';
import { screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

describe('App', () => {
  it('Navigates to book details page', async () => {
    await waitFor(() => {
      testRender({ Component: <MainPage /> });
    });

    const linkElement = (await screen.findAllByRole('link'))[0];
    await userEvent.click(linkElement);

    expect(await screen.getByText('Book details page')).toBeInTheDocument();
  });
});
