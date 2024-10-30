import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Events from './pages/Events';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import SignIn from './pages/SignIn';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <header className="navbar">
        <div className="logo-container">
          <a href="https://www.colorstack.org/" target="_blank" rel="noopener noreferrer">
            <img src="./pictures/colorstack_logonational.jpg" className="navbar-logo" alt="National Logo" />
          </a>
          <Link to="/">
            <img src="./pictures/tamucolorstacklogo.png" className="navbar-tamu-logo" alt="TAMU Logo" />
          </Link>
        </div>

        <ul className="navbar-links">
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/resources">Resources</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/sign-in">Sign In</Link></li>
        </ul>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;