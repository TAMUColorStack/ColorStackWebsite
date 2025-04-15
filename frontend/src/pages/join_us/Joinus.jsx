import { useEffect } from 'react'
import './Joinus.css'

export default function Joinus(){
    // useEffect(() => {
    //     if (window.instgrm && window.instgrm.Embeds && typeof window.instgrm.Embeds.process === 'function') {
    //         window.instgrm.Embeds.process();
    //       } else {
    //         const script = document.createElement('script');
    //         script.async = true;
    //         script.src = 'https://www.instagram.com/embed.js';
    //         document.body.appendChild(script);
    //       }
    //   }, []);
    return (
        <>  
            <div className="join-us-container">
                <h2 className="join-us-header">How to Join ColorStack!</h2>
                <p className="join-us-text">
                    🎉 Welcome! Whether you're looking to join our local chapter or the national chapter, follow the steps below to get started.
                </p>

                <h3 className="join-us-subheader">📌 Local Chapter</h3>
                <ol className="join-us-list">
                    <li>📝 Fill out the membership form <a href="https://docs.google.com/forms/d/e/1FAIpQLSd7XhHese9Nl5zMt3_j6fbc_5f-KT7UIxPFH2HF5cJDGDqJ2A/viewform" target="_blank" rel="noopener noreferrer">here</a>.</li>
                    <li>📄 Submit your resume to our chapter resume book <a href="https://airtable.com/appW1ZzZkBqjEL3rY/pagyIwaXSTpBS6gTv/form" target="_blank" rel="noopener noreferrer">here</a>.</li>
                    <li>📅 Add our calendar: <a href="https://calendar.google.com/calendar/u/2/r?cid=dGFtdWNvbG9yc3RhY2tAZ21haWwuY29t" target="_blank" rel="noopener noreferrer">Add Calendar</a></li>
                    <li>📱 Follow us on <a href="https://www.instagram.com/tamucolorstack/" target="_blank" rel="noopener noreferrer">Instagram</a> and join our <a href="https://discord.gg/ycCFTmcWh4" target="_blank" rel="noopener noreferrer">Discord</a> to stay updated with all announcements and events!</li>
                    <li>✅ You're all set! Just show up to any meeting and start participating.</li>
                </ol>

                <h4 className="join-us-meeting-times">⏰ Meeting Times:</h4>
                <ul className="join-us-list">
                    <li>📅 General Meetings: 7:30-8:30 PM, Thursdays</li>
                    <li>💻 LeetRooms: 3-4:30 PM, Sundays</li>
                    <li>🌐 WebDev: 4:30-5:30 PM, Sundays</li>
                </ul>

                <h3 className="join-us-subheader">🌐 National Chapter</h3>
                <ol className="join-us-list">
                    <li>📋 Complete the <a href="https://www.canva.com/design/DAGiSXP0aWE/O9fix5ne98BUwUUHb6ykGg/view?utm_content=DAGiSXP0aWE&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h2be7d1a893" target="_blank" rel="noopener noreferrer">new member checklist</a> to get your profile accepted.</li>
                    <li>📝 Submit the <a href="https://app.colorstack.io/apply" target="_blank" rel="noopener noreferrer">application</a> to officially join the national chapter.</li>
                    <li>🤝 Need a referral? You can DM any officer or ask in our Discord!</li>
                </ol>

                {/* <p className="join-us-text">
                    📢 Stay updated with all our announcements and events through our Discord and Instagram!
                </p> */}

                <div className="questions-section">
                    <h3 className="join-us-subheader">❓ Have Questions?</h3>
                    <p className="join-us-text">
                        Feel free to ask any questions in our <a href="https://discord.gg/ycCFTmcWh4" target="_blank" rel="noopener noreferrer">Discord</a> or email us at <a href="mailto:tamucolorstack@gmail.com">tamucolorstack@gmail.com</a>!
                    </p>
                </div>

                <div className="discord">
                    <a
                        href="https://discord.gg/ycCFTmcWh4"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="discord-join-button"
                    >
                        💬 Join Our Discord
                    </a>
                </div>
            </div>
        </>
    )
}