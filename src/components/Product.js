import React, {useState, useEffect} from 'react';
import '../styles.css';

export default function Product(){

    const [productitem, setProductitem] = useState([]);

    useEffect(() => {

        fetch("./omnitek/product.json")
        .then(response => response.json())
        .then(data => setProductitem(data));
        
    },[]);

    return ( 
        <div className='product-sec'>
            <div className="xl-space"></div>
            <div className='product-text'>
                <h2>Explore Our High-Performance Cables</h2>
                <div className="m-space"></div>
                <h3>Designed to Meet the Needs of Your Industry, From Standard to Custom-Made.</h3>
                <div className="l-space"></div>
                <div className='product-content'>
                    {
                        productitem.map(item => (
                            <div key={item.id} className="product-item">
                                <img src={`./omnitek/images/${item.image}`} alt={item.title}/>
                                <div className="l-space"></div>
                                <div>
                                    <s1 className="body">{item.title}</s1>
                                    <div className="m-space"></div>
                                    <p className="body">{item.content}</p>
                                    <div className="m-space"></div>
                                    <i className="right-icon"></i>
                                    <div className="s-space"></div>
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
