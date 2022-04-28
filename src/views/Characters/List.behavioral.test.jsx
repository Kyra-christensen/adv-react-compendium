import { render, screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CharacterList from "./List";
import { MemoryRouter } from 'react-router-dom';

describe('CharacterList behavior', () => {
  it('should only display Candy on submit of Candy search', async () => {
    render(
      <MemoryRouter>
        <CharacterList/>
      </MemoryRouter>
    )

    await waitForElementToBeRemoved(screen.findByText('Loading...'))

    const search = await screen.findByPlaceholderText('Search for a character');

    const button = screen.getByRole('button');

    userEvent.type(search, 'Candy');

    userEvent.click(button);

    const result = await screen.findByText('Candy');

    expect(result.textContent).toEqual('Candy');
  })
});