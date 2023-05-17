import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Navigation from './components/Navigation';
import Missions from './components/Missions';
import Rockets from './components/Rockets';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
