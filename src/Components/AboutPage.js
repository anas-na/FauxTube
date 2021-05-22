import './AboutPage.css'
import { useState } from "react";

const AboutPage = () => {

    const [showBio, setShowBio] = useState(false)
    const [showBio1, setShowBio1] = useState(false)
    const [showBio2, setShowBio2] = useState(false)

    const handleClick = () => {
        setShowBio((prevShowBio) => !prevShowBio)
    }
    const handleClick1 = () => {
        setShowBio1((prevShowBio1) => !prevShowBio1)
    }
    const handleClick2 = () => {
        setShowBio2((prevShowBio2) => !prevShowBio2)
    }
    return (<section className="aboutPageContainer">
        <h1>FauxTube</h1>
        <p>An application that allows you to search for videos on YouTube while using a simple custom user interface.</p>
        {/* Alphabetical Order */}
        <h3 onClick={handleClick}>{showBio ? "Anas Nahil" : "Anas Nahil"}</h3>
        {showBio ? (
            <div>
                <p>With a passion for Video Games and Music, I hope to use the skills i'm learning as a web developer to pursue a tech career in one of those fields.</p>
                <a href="https://github.com/itsanasna" target='_blank'>GitHub</a>
            </div>
        ) : (
            null
            )}            
        {/* <h3>Joshua Mendez</h3> */}
        <h3 onClick={handleClick1}>{showBio1 ? "Joshua Mendez" : "Joshua Mendez"}</h3>
        {showBio1 ? (
            <div>
                <p>bio</p>
                <a href="https://github.com/joshuafmendez" target='_blank'>GitHub</a>
            </div>
        ) : (
            null
            )}
        {/* <h3>Shoaib Dar</h3> */}
        <h3 onClick={handleClick2}>{showBio2 ? "Shoaib Dar" : "Shoaib Dar"}</h3>
        {showBio2 ? (
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