import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './pages/about/about.jsx';
import Events from './pages/events/events.jsx';
import Resources from './pages/resources/resources.jsx';
import Contact from './pages/contact/contact.jsx';
import ContactThanks from './pages/contact/contactThanks.jsx'
import SignIn from './pages/signin/signin.jsx';
import Home from './pages/home/home.jsx';

function App() {
  return (
    <Router>
      <header className="navbar fixed-top">
        <div className="logo-container">
          <NavLink to="/">
            <img src="./pictures/tamucolorstacklogo.png" className="navbar-tamu-logo" alt="TAMU Logo" />
          </NavLink>
        </div>

        <ul className="navbar-links">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About Us</NavLink></li>
          <li><NavLink to="/events">Events</NavLink></li>
          <li><NavLink to="/resources">Resources</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/sign-in">Sign In</NavLink></li>
        </ul>
      </header>

     {/* this is done to push the content down below the navbar (which is fixed)*/}
      <main style={{ paddingTop: '60px' }}> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contactThanks" element={<ContactThanks />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;