import React from 'react';
import './Footer.css';
import { NavLink } from "react-router-dom";

function Footer(props) {
    return (
        <footer>
            <ul className="footer-menu">
                <NavLink to="/" className="link footer-link" activeClassName="active" exact={true}>Home</NavLink>
                <NavLink to="/blog" className="link footer-link" activeClassName="active">Weekly Updates</NavLink>
            </ul>
            <h5>made with React</h5>
            <h6 className="footer-updated">last updated 03/11/2020</h6>
        </footer>
        
    );
}

export default Footer;
