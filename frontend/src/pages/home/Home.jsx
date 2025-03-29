import './Home.css'
import MissionStatement from './MissionStatement'
import Calendar from './Calendar'
import About from './About'



export default function Home(){

        return (
            <>
                <div className="cstack-header">
                    <div className="welcome-content">
                        <h1 className="welcome-message">TAMU <span className="highlight">ColorStack</span> Chapter</h1>
                        <p className="sub-welcome-text">
                            Empowering Black & Latinx CS students to launch successful
                            tech careers!
                        </p>
                    </div>
                </div>
                 <MissionStatement/>
                 <About/>
                 <Calendar/>
            </>
        )
    }
