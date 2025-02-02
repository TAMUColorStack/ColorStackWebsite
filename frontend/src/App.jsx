import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.jsx";
import Home from "./pages/home/Home.jsx"
import About from "./pages/about_us/About.jsx"
import Signin from "./pages/sign_in/Signin.jsx"
import Page_footer from "./components/footer/Page_footer.jsx";
function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                  <Route path="/" element = {<Home/>}/>
                  <Route path="" element = {<About/>}/>
                  <Route path="" element = {<Signin/>}/>
                </Routes>
                <Page_footer/>
            </Router>
        </>
    );
}

export default App;
