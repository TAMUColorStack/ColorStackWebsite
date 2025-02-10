import './Navbar.css'

export default function Navbar(){

    return (
        <>
        <nav class="navbar">
            <div class="logo">
                <img src="/tamucolorstacklogo.png" alt="tamucolorstack logo" />
            </div>
            <ul class="navbar-links">
                <li><a href="#Home.jsx">Home</a></li>
                <li><a href="#About.jsx">About us</a></li>
                <li><a href="#Signin.jsx">Sign in</a></li>
            </ul>
        </nav>
        </>
    )
}