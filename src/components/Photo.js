import React from 'react';

import './../css/PhotoStyles.css';
import auto_1 from "../images/auto_1.jpg";
import auto_2 from "../images/auto_2.jpg";
import auto_3 from "../images/auto_3.jpg";
import auto_4 from "../images/auto_4.jpg";

const Photo = () => {
    return(
        <div className='photos-container'>
            <div className='photo'>
                <h3>First Photo</h3>
                <img src={auto_1}/>
            </div>
            <div className='photo'>
                <h3>Second Photo</h3>
                <img src={auto_2}/>
            </div>
            <div className='photo'>
                <h3>Third Photo</h3>
                <img src={auto_3}/>
            </div>
            <div className='photo'>
                <h3>Fourth Photo</h3>
                <img src={auto_4}/>
            </div>
        </div>
    )
}

export default Photo;