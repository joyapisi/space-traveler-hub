import { Provider } from 'react-redux';
import TestRenderer from 'react-test-renderer';
import Store from '../redux/store';
import '@testing-library/jest-dom/extend-expect';
import Profile from '../components/Profile';

describe('Profile', () => {
  test('Render Profile Component', () => {
    const tree = TestRenderer.create(
      <Provider store={Store}>
        <Profile />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
