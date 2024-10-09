import React, {useState, useEffect} from "react";
import '../styles.css';

export default function Solution(){

    const [solutionitem, setSolutionitem] = useState([]);

    useEffect(() => {

        fetch("solution.json")
        .then(response => response.json())
        .then(data => setSolutionitem(data));
        
    },[]);

    return ( 
        <div>
            <div class="xl-space"></div>
            <div className='solution-text'>
                <h2>Solutions built for you</h2>
                <div class="m-space"></div>
                <h3>Tailored cable solutions for precision, performance, and innovation across industries.</h3>
                <div class="m-space"></div>
                <div>{solutionitem.length}</div>           
            </div>  
            
        </div>
    );
}


//<div className='solution-content'>
//                <div className="solution-item">
//                    <div class="m-space"></div>
//                    <s1>Test and Measurement</s1>
//                    <p>Precision-engineered cables for high-accuracy data transmission and durable performance in rigorous test and measurement environments.</p>
//                    <img src={"/s1.png"} alt="test and measurement" />
//                    <div class="m-space"></div>
//                </div>           
//            </div> 