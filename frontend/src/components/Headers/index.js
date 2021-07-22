import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import './Header.css'
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import ProfileButton from '../Navigation/ProfileButton.js';

function Headers(){
    const [showModal, setShowModal] = useState(false);

    const sessionUser = useSelector(state => state.session.user);
    const sessionLinks = (
        <ProfileButton user={sessionUser} />
        
      );
        // if (sessionUser) return (
        //     <Redirect to="/profile" />
        //   );
    return (
        <div className='header'>
            <div className='home__logo'></div>
            <div className='home__search'>
                <input type='text' placeholder='Search' className='search__input'></input>   
            </div>
            <button className='search__button'>
                <img src="https://img.icons8.com/material-rounded/24/000000/search.png"/>
            </button>
            <div className='home__links'></div>
            <div className='home__addProduct'>
            
               
              <a href='/new'>Add Product</a>
            
            </div>
            <div className='home__pfp'>
                {sessionLinks}
            </div>
        </div>
    )
}

export default Headers
