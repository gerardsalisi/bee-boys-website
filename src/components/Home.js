import React, { useRef } from 'react';
import './Home.css';

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
                    insert slogan here
                </h1>
                <button onClick={executeScroll}>
                    Learn More
                </button>
            </section>
            <section className="about-section" ref={myRef}>
                <div className="inner-container">
                    <div className="image-container">
                        <div className="image">
                            <img src="https://via.placeholder.com/250" />
                        </div>
                        <div className="image">
                            <img src="https://via.placeholder.com/250" />
                        </div>
                        <div className="image">
                            <img src="https://via.placeholder.com/250" />
                        </div>
                    </div>
                    <div className="description-container">
                        <h2>
                            Artifical Pollination
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut neque orci, facilisis eget ultricies at, eleifend a leo. Duis ullamcorper nisl arcu, ac aliquam arcu suscipit eu. Proin non congue leo. Suspendisse ullamcorper libero in ligula euismod, a eleifend ex laoreet. Donec mollis, tellus nec luctus fermentum, urna libero scelerisque ipsum, quis porta ante leo vitae lacus. Cras consequat luctus mattis. Nam orci ligula, mattis et nulla vitae, convallis condimentum leo. Sed at elementum risus
                        </p>
                    </div>
                </div>
            </section>
            <section className="team-section">
                <div className="inner-container">
                    <h2 className="section-title">meet the team</h2>
                    <div className="team-members">
                        <div className="member-container">
                            <img className="headshot" src="https://via.placeholder.com/175" />
                            <h3>Brynn Davis</h3>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut neque orci, facilisis eget ultricies at, eleifend a leo. Duis ullamcorper nisl arcu, ac aliquam arcu suscipit eu.</p>
                        </div>
                        <div className="member-container">
                            <img className="headshot" src="https://via.placeholder.com/175" />
                            <h3>Jordan Hu</h3>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut neque orci, facilisis eget ultricies at, eleifend a leo. Duis ullamcorper nisl arcu, ac aliquam arcu suscipit eu.</p>
                        </div>
                        <div className="member-container">
                            <img className="headshot" src="https://via.placeholder.com/175" />
                            <h3>Gerard Salisi</h3>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut neque orci, facilisis eget ultricies at, eleifend a leo. Duis ullamcorper nisl arcu, ac aliquam arcu suscipit eu.</p>
                        </div>
                        <div className="member-container">
                            <img className="headshot" src="https://via.placeholder.com/175" />
                            <h3>Justin Wang</h3>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut neque orci, facilisis eget ultricies at, eleifend a leo. Duis ullamcorper nisl arcu, ac aliquam arcu suscipit eu.</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>

    );
}

export default Home;
