import './Navbar.css'
import { useNavigate} from 'react-router-dom'
export default function Navbar(){
    const navigate = useNavigate()
    const goToHome = () => {
        navigate('/')
    }

    const goToAbout = () =>{
        navigate('/about_us')
    }

    const goToSignIn = () => {
        navigate('/sign_in')
    }

    const goToJoinUs = () => {
        navigate('/join_us')
    }

    return (
        <>
        <nav className="navbar">
            <div className="logo">
                <img src="/tamucolorstacklogo.png" alt="tamucolorstack logo" />
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