import Card from './Card'
import './Card.css'
import NicholasMat from './NicholasMat.png'
import Nicole from './Nicole.png'
import Zack from './zack_pic.jpg'
import Andre from './Andre.png'



export default function CardContainer(){
    const data = [
        {
            name: 'Nicholas Matias',
            position: 'President',
            image: NicholasMat,
            linkedinUrl: 'https://www.linkedin.com/in/nicholasmatias/'
        },
        {
            name: 'Zakariya Mobarak',
            position: 'Vice President',
            image: Zack,
            linkedinUrl: 'https://www.linkedin.com/in/zak-mob/'
        },
        {
            name: "Nicole Hernandez",
            position: "Media Chair",
            image: Nicole,
            linkedinUrl: 'https://www.linkedin.com/in/nicolehdz/'
        },
        {
            name: "Andre Athari",
            position: "Outreach Chair",
            image: Andre,
            linkedinUrl: 'https://www.linkedin.com/in/athariandre/'
        }
    ]

    return (
        <div className="card-container">
            {data?.map((item, index) => (
                <Card 
                    key={index}
                    name={item.name}
                    position={item.position}
                    image={item.image}
                    linkedinUrl={item.linkedinUrl}
                />
            ))}
        </div>
    )
}
