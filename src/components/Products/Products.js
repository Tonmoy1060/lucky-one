import React from 'react';
import Collection from './Collection/Collection';
import Details from './Details/Details';
import './Products.css'

const Products = () => {
    const datas = [
        {id: 1, price: 200, name: 'Rolex', img: 'https://img.freepik.com/free-vector/smart-watch-realistic-image-black_1284-11873.jpg?t=st=1648266215~exp=1648266815~hmac=c42eefc97665a12d597eccf013e054efe5948c9526c648fc98404a160e66010a&w=740'},
        {id: 2, price: 300, name: 'Casio', img: 'https://img.freepik.com/free-photo/elegant-watch-with-silver-golden-chain-isolated_181624-27080.jpg?t=st=1648266215~exp=1648266815~hmac=b833b0bf9b648372edd450820ca80478b15dc9c9d9968c69ab3b78aa547cddad&w=740'},
        {id: 3, price: 250, name: 'Vest', img: 'https://img.freepik.com/free-psd/smartwatch-mockup_125540-1277.jpg?t=st=1648266215~exp=1648266815~hmac=02367109bfe4d0c3cd6fb1dac4db02973c4bee2d197d736177220aeb7b118b99&w=996'},
        {id: 4, price: 400, name: 'Power', img: 'https://img.freepik.com/free-psd/realistic-smart-watch-mockup_165789-534.jpg?t=st=1648266215~exp=1648266815~hmac=373e5b86b9d0466e5a29cfc4b230040381dfc6ace428800f1518d63ddde17da4&w=826'},
        {id: 5, price: 280, name: 'Rowl', img: 'https://img.freepik.com/free-vector/wall-office-clock-with-black-red-hands-white-dial_1284-8992.jpg?t=st=1648266215~exp=1648266815~hmac=d9793d8c42011bc07c4921ab911d186bac0ced71c4e4f5795fde2beddde8a8ca&w=740'},
        {id: 6, price: 450, name: 'Hero', img: 'https://img.freepik.com/free-vector/watch_53876-35132.jpg?t=st=1648266215~exp=1648266815~hmac=5b5cc09fa49bbddc1cc4a16aa2e2f4c2364f77cfc96eec36afa23b93cb230cfb&w=740'},
        {id: 7, price: 300, name: 'Creative', img: 'https://img.freepik.com/free-vector/watch_53876-35137.jpg?w=740'},
        {id: 8, name: 'State', img: 'https://img.freepik.com/free-photo/businessman-checking-time_1357-97.jpg?t=st=1648266215~exp=1648266815~hmac=9bd2206d0c99b6bad1b09e7db6d917e79c65769d561b18c8a7485ac8c37810a5&w=826'},
        {id: 9, price: 390, name: 'Free Touch', img: 'https://img.freepik.com/free-psd/presentation-smartwatch-with-screen-mock-up_23-2148787546.jpg?t=st=1648266215~exp=1648266815~hmac=735b02218866d96a7e920d79692bbad06acfbb03a1b3ad39b9aaf8b2b6a10559&w=740'}
    ]
    return (
        <div className='body'>
            <div className='card'>
                {
                    datas.map(data => <Collection 
                    key = {data.id}
                    data ={data}
                    ></Collection>)
                }
            </div>
            <div className='details'>
                <Details></Details>
            </div>
        </div>
    );
};

export default Products;