import React from 'react';
import './Details.css'

const Details = (props) => {
    return (
        <div className='details-text'>
            <h3>{props.name}</h3>
        </div>
    );
};

export default Details;