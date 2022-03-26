import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Collection.css'

const Collection = (props) => {
    const {name, img, price} = props.data;
    return (
        <div className='card'>
            <div className='card-info'>
                <img src={img} alt="" />
                <h3>Name: {name}</h3>
                <p>Price:$ {price}</p>
            </div>
            <button onClick={() => props.selectItem(props.data)} className='btn'>
                    Select
                    <FontAwesomeIcon className='icon' icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Collection;