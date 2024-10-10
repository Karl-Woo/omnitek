import React, {useState, useEffect} from 'react';
import '../styles.css';

export default function Product(){

    const [productitem, setProductitem] = useState([]);

    useEffect(() => {

        fetch("test2.json")
        .then(response => response.json())
        .then(data => setProductitem(data));
        
    },[]);

    return ( 
        <div className='product-sec'>
            <div class="xl-space"></div>
            <div className='product-text'>
                <h2>Explore Our High-Performance Cables</h2>
                <div class="m-space"></div>
                <h3>Designed to Meet the Needs of Your Industry, From Standard to Custom-Made.</h3>
                <div class="l-space"></div>
                <div className='product-content'>
                    {
                        productitem.map(item => (
                            <div key={item.id} className="product-item">
                                <img src={`images/${item.image}`} alt={item.title}/>
                                <div class="l-space"></div>
                                <div>
                                    <s1 className="body">{item.title}</s1>
                                    <div class="m-space"></div>
                                    <p className="body">{item.content}</p>
                                    <div class="m-space"></div>
                                    <i class="right-icon"></i>
                                    <div class="s-space"></div>
                                </div>        
                            </div>
                        ))
                    }
                </div>                      
            </div>  
            <div class="xl-space"></div>
        </div>
    );
}
