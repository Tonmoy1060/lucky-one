import React from 'react';
import './Collection.css'

const Collection = (props) => {
    console.log(props)
    const {name, img, price} = props.data
    return (
        <div className='card'>
            <div className='card-info'>
                <img src={img} alt="" />
                <h3>Name: {name}</h3>
                <p>Price:$ {price}</p>
            </div>
            <button className='btn'>
                    Select
            </button>
        </div>
    );
};

export default Collection;