import '../styles.css';

export default function Contactus(){


    return ( 
        <div>
            <div className="xl-space"></div>
            <div className='solution-text'>
                <h2>Contact us</h2>
                <div className="l-space"></div>
                <div className='left-right-contact'>
                    <div className='right-text'>
                            <div className="l-space"></div>
                            <label>
                                First Name*: <input name="fname" />
                            </label>
                            <div className="m-space"></div>
                            <label>
                                Last Name*: <input name="lname" />
                            </label>
                            <div className="m-space"></div>
                            <label>
                                Email*: <input name="email" />
                            </label>
                            <div className="m-space"></div>
                            <label>
                                Phone Number*: <input name="phone" />
                            </label>
                            <div className="m-space"></div>
                            <label>
                                Message: <input name="message" />
                            </label>
                            <div className="l-space"></div>
                            <button className="primary-button">Send Message</button>
                            <div className="l-space"></div>
                    </div>
                </div>
            </div>  
            <div className="xl-space"></div>
        </div>
    );
}