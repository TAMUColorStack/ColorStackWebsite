import './About.css'

export default function About(){
    return (
        <>  
            <div className="about-mission-container">
                <p className="about-mission-statement-subtext">
                    Our mission is to <span className="bold">empower</span> Black, Latinx, and Indigenous technologists to graduate and <span className="bold">thrive in technical careers</span> through tailored resources like <span className="bold">resume workshops, company networking events, and interview prep.</span>
                </p>
                <p className="about-mission-statement-subtext">
                    As the <span className="bold">newest</span> and <span className="bold">proudest</span> chapter of <span className="highlight-cstack-yellow">ColorStack</span>, we are <span className="bold">dedicated</span> to <span className="bold">growing</span> our community across <span className="highlight-maroon">Texas A&M’s</span> campus and building an inclusive campus environment that opens doors to <span className="bold">new opportunities.</span>
                </p>
            </div>
        </>
    )
}