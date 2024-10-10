import React, {useState, useEffect} from 'react';
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
                <div className='solution-content'>
                    <div class="m-space"></div>
                    {
                        solutionitem.map(item => (
                            <div key={item.id} className="solution-item">
                                    <div class="m-space"></div>
                                    <img src={`images/${item.image}`} alt={item.title}/>
                                    <div>
                                        <s1>{item.title}</s1>
                                        <p>{item.content}</p>
                                    </div>
                                    <div class="m-space"></div>
                            </div>
                        ))
                    }   
                </div>                      
            </div>  
            
        </div>
    );
}


