import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.jsx";
import Home from "./pages/home/Home.jsx"
import About from "./pages/about_us/About.jsx"
import Signin from "./pages/sign_in/Signin.jsx"
import Joinus from "./pages/join_us/Joinus.jsx"
import Page_footer from "./components/footer/Page_footer.jsx";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/sign_in" element={<Signin/>}/>
                <Route path="/join_us" element={<Joinus/>}/>
                <Route path="/about_us" element={<About/>}/>
            </Routes>
            <Page_footer/>
        </Router>
    );
}

export default App;
