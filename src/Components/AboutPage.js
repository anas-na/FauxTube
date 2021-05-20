import './AboutPage.css'

const AboutPage = () => {
    return (<section className="aboutPageContainer">
        <h1>FauxTube</h1>
        <p>An application that allows you to search for videos on YouTube while using a simple custom user interface.</p>
        {/* Alphabetical Order */}
        <h3>Anas Nahil</h3>
        <p>With a passion for Video Games and Music, I hope to use the skills i'm learning as a web developer to pursue a tech career in one of those fields.</p>
        <a href="https://github.com/itsanasna" target='_blank'>GitHub</a>
        <h3>Joshua Mendez</h3>
        <p>bio</p>
        <a href="https://github.com/joshuafmendez" target='_blank'>GitHub</a>
        <h3>Shoaib Dar</h3>
        <p>bio</p>
        <a href="https://github.com/SDAR30" target='_blank'>GitHub</a>
    </section>)
}

export default AboutPage;