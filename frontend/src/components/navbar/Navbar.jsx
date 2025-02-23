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

    return (
        <>
        <nav class="navbar">
            <div class="logo">
                <img src="/tamucolorstacklogo.png" alt="tamucolorstack logo" />
            </div>
            <ul class="navbar-links">
                <li><a type="button" onClick={ goToHome}>Home</a></li>
                <li><a type="button" onClick={ goToAbout}>About</a></li>
                <li><a type="button" onClick={ goToSignIn}>Sign In</a></li>
            </ul>
        </nav>
        </>
    )
}