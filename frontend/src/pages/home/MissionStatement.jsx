import './MissionStatement.css';

export default function MissionStatement() {
    return (
        <div className="header">
            <p className="bold-text">
                Founded in 2024, TAMU 
                <span className="highlight-yellow"> ColorStack </span> 
                <p class="statement">proudly champions its mission to </p> 
                <div className="highlight-blue">support and empower</div> 
                <p class="statement"> Black, Latinx, and Indigenous students navigating the world of computer science.</p>
            </p>

            <p className="bold-text paragraph-spacing">
                More specifically, the 
                <span className="highlight-yellow"> ColorStack </span> 
                chapter @ TAMU serves as a safe space for local 
                <span className="highlight-yellow"> ColorStack </span> 
                members to connect and feel included throughout their educational careers.
            </p>
        </div>
        
    );
}
