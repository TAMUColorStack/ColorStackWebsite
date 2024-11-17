// resources.jsx
import './resources.css';

export default function Resources() {
    return (
        <div className="resources">
            <h1 className="resources-header">Resources</h1>
            <a 
                href="https://linktr.ee/tamucolorstack"
                className="resources-h2-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TAMU ColorStack LinkTree"
            >
                <h2 className="resources-subheader">LinkTree</h2>
            </a>
            <div className="resources-content-box">
                {/* Content for the tan box can be added here */}
            </div>
        </div>
    );
}