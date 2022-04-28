import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CharacterList from './List';

describe('CharacterList', () => {
  it('should render the pokemon', async () => {
    render(
      <MemoryRouter>
        <CharacterList />
      </MemoryRouter>
    );

    const characterName = await screen.findByText('Candy');

    expect(characterName).toBeInTheDocument('Candy')
    });
  });