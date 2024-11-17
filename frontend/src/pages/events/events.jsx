import './events.css';  

export default function Events() {
    return (
        <div className="events">
            <h1 className="events-header">Events</h1>
            <p className='test'>Weekly Events hosted by TAMU ColorStack </p>
            <div className='events-container'>
                <div className='sunday-event'>
                    <h1 className='day'>Sunday </h1>
                    <img className='day-image' src="" alt="Image could not be found." />
                </div>
                <div className='monday-event'>
                    <h1 className='day'>Monday </h1>
                </div>
                <div className='tuesday-event'>
                    <h1 className='day'>Tuesday </h1>
                </div>
                <div className='wednesday-event'>
                    <h1 className='day'>Wednesday </h1>
                </div>
                <div className='thurday-event'>
                    <h1 className='day'>Thursday </h1>
                </div>
                <div className='friday-event'>
                    <h1 className='day'>Friday </h1>
                </div>
                <div className='saturday-event'>
                    <h1 className='day'>Saturday </h1>
                </div>
            </div>

        </div>
    )
}