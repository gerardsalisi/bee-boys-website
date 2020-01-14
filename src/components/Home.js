import React from 'react';
import './Home.css';

function Section(props) {
    return (
        <div className="container">
            <section className="landing-section">
                <div className="slogan">
                    <h2>
                        insert slogan here
                    </h2>
                    <button>
                        Learn More
                    </button>
                </div>
            </section>
            <section className="about-section">
                <div className="image-container">
                    <img src="https://via.placeholder.com/250"/>
                    <img src="https://via.placeholder.com/250"/>
                    <img src="https://via.placeholder.com/250"/>
                </div>
                <div className="description-container">
                    <h2>
                        Artifical Pollination
                    </h2>
                    <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut neque orci, facilisis eget ultricies at, eleifend a leo. Duis ullamcorper nisl arcu, ac aliquam arcu suscipit eu. Proin non congue leo. Suspendisse ullamcorper libero in ligula euismod, a eleifend ex laoreet. Donec mollis, tellus nec luctus fermentum, urna libero scelerisque ipsum, quis porta ante leo vitae lacus. Cras consequat luctus mattis. Nam orci ligula, mattis et nulla vitae, convallis condimentum leo. Sed at elementum risus   
                    </p>
                </div>
            </section>
            <section className="team-section">
                <h1>meet the team</h1>
                <div className="team-image-container">
                    <div className="column">
                        <img className="headshot" src="https://via.placeholder.com/175"/>
                        <h3>Brynn Davis</h3>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut neque orci, facilisis eget ultricies at, eleifend a leo. Duis ullamcorper nisl arcu, ac aliquam arcu suscipit eu.</p>
                    </div>
                    <div className="column">
                        <img className="headshot" src="https://via.placeholder.com/175"/>
                            <h3>Jordan Hu</h3>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut neque orci, facilisis eget ultricies at, eleifend a leo. Duis ullamcorper nisl arcu, ac aliquam arcu suscipit eu.</p>
                    </div>
                    <div className="column">
                        <img className="headshot" src="https://via.placeholder.com/175"/>
                            <h3>Gerard Salisi</h3>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut neque orci, facilisis eget ultricies at, eleifend a leo. Duis ullamcorper nisl arcu, ac aliquam arcu suscipit eu.</p>
                    </div>
                        <div className="column">
                        <img className="headshot" src="https://via.placeholder.com/175"/>
                            <h3>Justin Wang</h3>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut neque orci, facilisis eget ultricies at, eleifend a leo. Duis ullamcorper nisl arcu, ac aliquam arcu suscipit eu.</p>
                    </div>
                </div>
                <div className="team-image-container">
                   
                </div>
                    
               
            </section>
            
        </div>
        
    );
}

export default Section;
