import './AboutPage.css'
import { useState } from "react";

const AboutPage = () => {

    const [showBio, setShowBio] = useState(false)

    const handleClick = () => {
        setShowBio((prevShowBio) => !prevShowBio)
    }
    return (<section className="aboutPageContainer">
        <h1>FauxTube</h1>
        <p>An application that allows you to search for videos on YouTube while using a simple custom user interface.</p>
        {/* Alphabetical Order */}
        <h3>Anas Nahil</h3>
        <button onClick={handleClick}>{showBio ? "Anas Nahil" : "Anas Nahil"}</button>
        {showBio ? (
            <div>
                <p>With a passion for Video Games and Music, I hope to use the skills i'm learning as a web developer to pursue a tech career in one of those fields.</p>
                <a href="https://github.com/itsanasna" target='_blank'>GitHub</a>
            </div>
        ) : (
            null
            )}            
        {/* <h3>Joshua Mendez</h3> */}
        <h3 onClick={handleClick}>{showBio ? "Joshua Mendez" : "Joshua Mendez"}</h3>
        {showBio ? (
            <div>
                <p>bio</p>
                <a href="https://github.com/joshuafmendez" target='_blank'>GitHub</a>
            </div>
        ) : (
            null
            )}
        <h3>Shoaib Dar</h3>
        <button onClick={handleClick}>{showBio ? "Shoaib Dar" : "Shoaib Dar"}</button>
        {showBio ? (
            <div>
                <p>bio</p>
                <a href="https://github.com/SDAR30" target='_blank'>GitHub</a>
                
            </div>
        ) : (
            null
            )}
    </section>)
}

export default AboutPage;