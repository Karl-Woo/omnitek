import React, {useState, useEffect} from 'react';
import '../styles.css';

export default function Solution(){

    const [solutionitem, setSolutionitem] = useState([]);

    useEffect(() => {

        fetch("./omnitek/application.json")
        .then(response => response.json())
        .then(data => setSolutionitem(data));
        
    },[]);

    return ( 
        <div>
            <div className="xl-space"></div>
            <div className='solution-text'>
                <h2>Solutions built for you</h2>
                <div className="m-space"></div>
                <h3>Tailored cable solutions for precision, performance, and innovation across industries.</h3>
                <div className="l-space"></div>
                <div className='solution-content'>
                    {
                        solutionitem.map(item => (
                            <div key={item.id} className="solution-item">
                                <img src={`./omnitek/images/${item.image}`} alt={item.title}/>
                                <div className="l-space"></div>
                                <div>
                                    <s1 className="body">{item.title}</s1>
                                    <div className="m-space"></div>
                                    <p className="body">{item.content}</p>
                                    <div className="m-space"></div>
                                </div>   
                            </div>
                        ))
                    }   
                </div>                      
            </div>  
            <div className="xl-space"></div>
        </div>
    );
}


