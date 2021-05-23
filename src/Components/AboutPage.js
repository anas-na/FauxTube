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
        <h2 className='collabs'>Collaborators:</h2>
        <h3 onClick={handleClick}>{showBio ? "Anas Nahil" : "Anas Nahil"}</h3>
        {showBio ? (
            <div className='BioSection'>
                <img src='https://media-exp1.licdn.com/dms/image/C4D03AQFc0VAb9nmoWA/profile-displayphoto-shrink_800_800/0/1606956485295?e=1627516800&v=beta&t=51sgPlWH0eYNmXUBAF22IL3ItOq7_LLwLn2qtFP6V90'/>
                <p>As a programmer, I love being able to expand my horizons and see what's possible. My curiosity and drive for perfection means that I excel at solving technical challenges and debugging individual lines of code. With a passion for Video Games and Music, I hope to use the skills i'm learning as a web developer to pursue a tech career in one of those fields.</p>
                <a href="https://github.com/itsanasna" target='_blank' rel="noreferrer">GitHub</a>
            </div>
        ) : (
            null
            )}            
        {/* <h3>Joshua Mendez</h3> */}
        <h3 onClick={handleClick1}>{showBio1 ? "Joshua Mendez" : "Joshua Mendez"}</h3>
        {showBio1 ? (
            <div className='BioSection'>
                <img src='https://media-exp1.licdn.com/dms/image/C4D03AQEesClN2khnMA/profile-displayphoto-shrink_800_800/0/1608595537276?e=1627516800&v=beta&t=28m6mM_oC38oCCENaKseUU-RjwPPSSdnNobEzgVNAXE'/>
                <p>I have had a passion for programming since a young age as an avid gamer. Hoping to use my skills I learn when trying to make mods when I was younger and now with formal learning with Pursuit aming for a career as a software developer</p>
                <a href="https://github.com/joshuafmendez" target='_blank' rel="noreferrer">GitHub</a>
            </div>
        ) : (
            null
            )}
        {/* <h3>Shoaib Dar</h3> */}
        <h3 onClick={handleClick2}>{showBio2 ? "Shoaib Dar" : "Shoaib Dar"}</h3>
        {showBio2 ? (
            <div className='BioSection'>
                <img src='https://media-exp1.licdn.com/dms/image/C4E03AQEs1mpVIgFwBw/profile-displayphoto-shrink_800_800/0/1606586088168?e=1627516800&v=beta&t=F8puEkH0pA_77_HQJMdeAtWhL3B7SJJwgnxWXtLayOc'/>
                <p>I’m a analytical Full Stack Developer who loves to solve problems and puzzles. I enjoy traveling, reading and learning about the world we live in.</p>
                <a href="https://github.com/SDAR30" target='_blank' rel="noreferrer">GitHub</a>
                
            </div>
        ) : (
            null
            )}
    </section>)
}

export default AboutPage;
