import React, { useRef } from 'react';
import './Home.css';
import bee from '../images/bee.png';
import teamPhoto from '../images/team-photo.jpg';

const scrollToRef = (ref) => {
    const totalOffset = ref.current.offsetTop + ref.current.offsetParent.offsetTop;

    return window.scrollTo({
        top: totalOffset,
        behavior: 'smooth'
    })
};

function Home(props) {
    const myRef = useRef(null)
    const executeScroll = () => scrollToRef(myRef)

    return (
        <div className="container">
            <section className="landing-section">
                <h1 className="slogan-text">
                    the alternative to animal-mediated pollination
                </h1>
                <button onClick={executeScroll}>
                    Learn More
                </button>
            </section>
            <section className="about-section" ref={myRef}>
                <div className="description-container">
                    <h2>
                        Honey bees support about $20 billion worth of production in the US alone through animal-mediated pollination.  However, their populations have been on the decline since 2006 due to pesticides, disease, and climate change and could cause a cascading effect regarding crop production.
                        </h2>
                    <p>
                        Our team aims to provide an alternative solution to animal-mediated pollination with Pollimate. Pollimate is a scalable and autonomous aerial solution that is capable of artificially pollinating crops by leveraging computer vision to localize the drone and accurately pollinate an individual flower.
                        </p>
                        <a className="progress-button" href="https://github.com/jwang61/Bee-Boys/projects/2">
                            Follow Our Progress Here ->
                        </a>
                </div>
                <div className="image-container">
                    <img className="image" src={bee} alt="Bee" />
                </div>
            </section>
            <section className="team-section">
                <div className="inner-container">
                    <h2 className="section-title">meet the team</h2>
                    <div className="content-container">
                       
                        <div className="team-photo-container">
                            <img src={teamPhoto} alt="The Team" />
                        </div>
                        <div className="team-members">
                            <div className="member-container">
                                <h4>Gerard Salisi</h4>
                                <p>Software Development (Path Planning and Drone Movement)</p>
                            </div>
                            <div className="member-container">
                                <h4>Brynn Davis</h4>
                                <p>Mechanical Lead and Electrical Lead</p>
                            </div>
                            <div className="member-container">
                                <h4>Justin Wang</h4>
                                <p>Software Development (Computer Vision/ML)</p>
                            </div>
                            <div className="member-container">
                                <h4>Jordan Hu</h4>
                                <p>Project Manager/Electrical and Software Support</p>
                            </div>
                            <small><strong>*from left to right</strong></small>
                        </div>
                    </div>

                </div>
            </section>

        </div>

    );
}

export default Home;
