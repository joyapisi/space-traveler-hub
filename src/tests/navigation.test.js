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

  const rocketsLink = screen.getByText('Rockets');
  const missionsLink = screen.getByText('Missions');
  const profileLink = screen.getByText('My Profile');

  expect(rocketsLink).toBeInTheDocument();
  expect(missionsLink).toBeInTheDocument();
  expect(profileLink).toBeInTheDocument();
});
