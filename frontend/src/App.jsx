import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './pages/about/about.jsx';
import Events from './pages/events/events.jsx';
import Resources from './pages/resources/resources.jsx';
import Contact from './pages/contact/contact.jsx';
import SignIn from './pages/signin/signin.jsx';
import Home from './pages/home/home.jsx';

function App() {
  return (
    <Router>
      <header className="navbar fixed-top">
        <div className="logo-container">
          <Link to="/">
            <img src="./pictures/tamucolorstacklogo.png" className="navbar-tamu-logo" alt="TAMU Logo" />
          </Link>
        </div>

        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/resources">Resources</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/sign-in">Sign In</Link></li>
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
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;