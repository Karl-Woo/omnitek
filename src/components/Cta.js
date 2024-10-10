import React from "react";
import '../styles.css';

export default function Cta(){
    return ( 
        <div className='cta'>
            <div class="xl-space"></div>
            <div className='cta-text'>
                <h1>Ready to Power Your Next Project?</h1>
                <div class="m-space"></div>
                <h3>Whether you need high-performance cables for a specific project or a custom solution designed to your specifications, our team is here to help you achieve your goals.</h3>
                <div class="l-space"></div>
                <button class="primary-button">Contact us</button>
            </div>
            <div class="xl-space"></div>
        </div>
    );
}