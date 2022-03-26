import React from 'react';
import './Collection.css'

const Collection = (props) => {
    console.log(props)
    const {name, img, price} = props.data
    return (
        <div className='cards'>
            <div>
                <img src={img} alt="" />
                <h3>Name: {name}</h3>
                <p>Price:$ {price}</p>
            </div>
        </div>
    );
};

export default Collection;