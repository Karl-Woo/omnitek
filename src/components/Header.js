import React from "react";
import '../styles.css';

export default function Header(){
    return ( 
        <div className='header'>
            <div className='header-text'>
                <h1>Powering Your World with Seamless Connectivity</h1>
                <div className="m-space"></div>
                <h3>Innovative solutions for a faster, smarter future.</h3>
                <div className="l-space"></div>
                <button className="primary-button">Learn more</button>
            </div>
        </div>
    );
}