import React from 'react';
import './Footer.css';
import { NavLink } from "react-router-dom";

function Footer(props) {
    return (
        <div className="footer-container">
             <ul className="footer-menu">
                <NavLink to="/" className="link footer-link" activeClassName="active" exact={true}>Home</NavLink>
                <NavLink to="/blog" className="link footer-link" activeClassName="active">Weekly Updates</NavLink>
            </ul>
            <h4>made with ♥</h4>
           
            <h5 className="footer-updated">last updated 01/14/2020</h5>
        </div>
        
    );
}

export default Footer;
