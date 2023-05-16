import { NavLink } from 'react-router-dom';
import logo from '../images/planet.png';
import '../styles/navigationstyle.css';

const Navigation = () => (
  <>
    <nav className="navigation-container">
      <div className="logo-header">
        <img src={logo} alt="logo" className="logo" />
        <h1>Space Travellers Hub</h1>
      </div>
      <ul className="nav-links">
        <NavLink to="/">rockets</NavLink>
        <NavLink to="/missions">missions</NavLink>
        <hr className="nav-hr" />
        <NavLink to="/profile">my profile</NavLink>
      </ul>
    </nav>
  </>
);

export default Navigation;
