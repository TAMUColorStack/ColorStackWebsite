import './Navbar.css'
import { useNavigate} from 'react-router-dom'
export default function Navbar(){
    const navigate = useNavigate()
    const goToHome = () => {
        // First scroll to top
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0; // For Safari
        // Then navigate
        navigate('/')
    }

    const goToAbout = () =>{
        // First scroll to top
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0; // For Safari
        // Then navigate
        navigate('/about_us')
    }

    const goToSignIn = () => {
        // First scroll to top
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0; // For Safari
        // Then navigate
        navigate('/sign_in')
    }

    const goToJoinUs = () => {
        // First scroll to top
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0; // For Safari
        // Then navigate
        navigate('/join_us')
    }

    return (
        <>
        <nav className="navbar">
            <div className="logo">
                <a className= "logo-home" type="button" onClick={ goToHome}><img src="/tamucolorstacklogo.png" alt="tamucolorstack logo" /></a>
            </div>
            <ul className="navbar-links">
                <li><a type="button" onClick={ goToHome}>Home</a></li>
                <li><a type = 'button' onClick={goToAbout}>About</a></li>
                {/* <li><a type="button" onClick={ goToSignIn}>Sign In</a></li> */}
                
                <li><a type="button" onClick={ goToJoinUs}>Join Us</a></li>
                

            </ul>
        </nav>
        </>
    )
}