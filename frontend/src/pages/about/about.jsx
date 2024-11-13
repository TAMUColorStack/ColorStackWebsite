import "./about.css";

export default function About() {
    return (
        <div>
            <div className="about-us-header">
                <div className="about-us-box">
                    <h2>
                        Helping African and Latinx <span className="highlight">Aggies</span> succeed in tech.
                    </h2>
                    <p>
                        At Color Stack TAMU, we strive to cultivate the same sense of
                        community, support, and growth within our closely-knit Aggie
                        family.
                    </p>
                </div>
            </div>

            <div className="about-us">
                <div className="about-content">
                    <div className="about-text">
                        <h2>
                        Our Mission
                        </h2>
                        <p>
                        Our mission mirrors that of the <a className="about-us-link" href="https://www.colorstack.org/">national
                        organization</a> —providing academic guidance, career development,
                        and fostering meaningful connections among Black and Latinx
                        students as they prepare for successful
                        technical careers after graduation.
                        </p>
                        <h2>
                        Our Vision
                        </h2>
                        <p>
                        We envision a future where Black and Latinx Aggie technologists are at the
                        forefront of innovation. *change this later*
                        </p>
                        <h2>
                        Our Strategy
                        </h2>
                        <p>
                        We provide our members with technical and behavioral interview guidance,
                        practice, and feedback. We also organize collection of resources, tools,
                        and opportunities to gurantee the success of our members in completing
                        their degree and securing a job in the tech industry.
                        </p>
                    </div>
                    <div className="about-image">
                        <img src="" alt="Color Stack TAMU" />
                    </div>
                </div>
            </div>
        </div>
    );
}