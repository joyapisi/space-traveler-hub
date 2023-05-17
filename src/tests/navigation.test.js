import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navigation from '../components/Navigation';
import '@testing-library/jest-dom/extend-expect';

test('renders navigation links correctly', () => {
  render(
    <MemoryRouter>
      <Navigation />
    </MemoryRouter>,
  );

  const rocketsLink = screen.getByText('rockets');
  const missionsLink = screen.getByText('missions');
  const profileLink = screen.getByText('my profile');

  expect(rocketsLink).toBeInTheDocument();
  expect(missionsLink).toBeInTheDocument();
  expect(profileLink).toBeInTheDocument();
});
