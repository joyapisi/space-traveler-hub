import { NavLink } from 'react-router-dom';
import logo from '../images/planet.png';
import '../styles/navigationstyle.css';

const Navigation = () => (
  <>
    <nav className="flex">
      <div className="flex logo-header">
        <img src={logo} alt="logo" className="logo" />
        <h1>Space Travellers&apos; Hub</h1>
      </div>
      <ul className="flex">
        <NavLink to="/" className="a">Rockets</NavLink>
        <NavLink to="/missions" className="a">Missions</NavLink>
        <span className="a nav-hr"> | </span>
        <NavLink to="/profile" className="a">My Profile</NavLink>
      </ul>
    </nav>
  </>
);

export default Navigation;
