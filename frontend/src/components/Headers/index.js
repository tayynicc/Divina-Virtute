import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import './Header.css'

function Headers(){
    const [showModal, setShowModal] = useState(false);

    return (
        <div className='header'>
            <div className='home__logo'></div>
            <div className='home__search'>
                <input type='text' placeholder='Search' className='search__input'></input>   
            </div>
            <button className='search__button'></button>
            <div className='home__links'></div>
            <div className='home__addProduct'>
            <>
                <button onClick={() => setShowModal(true)}>Add Product</button>
                {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        {/* <LoginForm /> */}
                    </Modal>
                )}
            </>
            </div>
            <div className='home__pfp'></div>
        </div>
    )
}

export default Headers