import './MissionStatement.css';

export default function MissionStatement() {
    return (
        <div className="header">
            <p className="bold-text">
                Founded in 2024, TAMU 
                <span className="highlight-yellow"> ColorStack </span> 
                is proud to <span className="highlight-blue">support and uplift</span> Black, Latinx, and Indigenous students pursuing careers in tech.
            </p>

            <p className="bold-text paragraph-spacing">
                As one of the newest chapters of the national 
                <span className="highlight-yellow"> ColorStack </span> 
                community, we serve as a local hub for connection, empowerment, and inclusion throughout students' academic journeys.
            </p>
        </div>
    );
}
