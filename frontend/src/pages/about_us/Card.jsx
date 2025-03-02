import './Card.css'


export default function Card({name, position, image, linkedinUrl}){
    return (
        <div className="card">
            <div className="card-image">
                <img src={image} alt={name} />
            </div>
            <div className="card-content">
                <h2>{name}</h2>
                <p>{position}</p>
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                <i class="fa-brands fa-linkedin"></i>
                </a>
            </div>
        </div>
    )
}
