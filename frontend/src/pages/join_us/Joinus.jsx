import { useEffect } from 'react'
import './Joinus.css'

export default function Joinus(){
    useEffect(() => {
        if (window.instgrm && window.instgrm.Embeds && typeof window.instgrm.Embeds.process === 'function') {
            window.instgrm.Embeds.process();
          } else {
            const script = document.createElement('script');
            script.async = true;
            script.src = 'https://www.instagram.com/embed.js';
            document.body.appendChild(script);
          }
      }, []);
    return (
        <>  
            <div className="join-us-container">
                <h2 className="join-us-header">  Thank you for your interest in ColorStack!</h2>
                <p className="join-us-text">
                To join our national chapter apply at the link <a className="cstack-national-link" href="https://www.colorstack.org/" target="_blank"><strong>here</strong></a>!
                If you would like an officer referral, reach out to us through Instagram or at a General Meeting!
                </p>
                <p className="join-us-text">
                To join our chapter, check our calendar for upcoming meetings! Stay updated with our weekly
                schedule on Instagram and make sure to join our Discord!
                </p>
                <div className = "instagram-embed">
                <blockquote
                    className="instagram-media"
                    data-instgrm-captioned
                    data-instgrm-permalink="https://www.instagram.com/p/C_lmIISPN7R/"
                    data-instgrm-version="14"
                    style={{
                        background: '#FFF',
                        border: 0,
                        margin: '1px',
                        borderRadius: '3px',
                        boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                        maxWidth: '540px',
                        minWidth: '326px',
                        padding: 0,
                        width: '99.375%',
                    }}
                    />

                </div>
                <div className = "discord">
                    <a
                        href="https://discord.gg/ycCFTmcWh4"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="discord-join-button"
                    >
                        Join Our Discord
                    </a>
                </div>
            </div>
        </>
    )
}