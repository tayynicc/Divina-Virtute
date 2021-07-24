import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import './Header.css'
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import ProfileButton from '../Navigation/ProfileButton.js';
import { NavLink } from 'react-router-dom'

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

            <div className='home__links'>
                <NavLink to='https://etsy.me/3i3jl2K' >
                   
                    <img className='header__links etsy__link' src="https://img.icons8.com/clouds/100/000000/etsy.png"/>
                    
                </NavLink>

                <NavLink to='https://crystalgemstoneshop.com/' >
                    <img className='header__links crystal__link ' src="https://img.icons8.com/color/48/000000/crystal.png"/>
                </NavLink>

                <NavLink to='https://selenestone.com/' >
                    <img className='header__links moon__link' src="https://img.icons8.com/ios-filled/50/000000/crescent-moon.png"/>  
                </NavLink>
            </div>

            <div className='home__addProduct'>
            
               
              <a className='add__link-header'href='/new'>Add Product</a>
            
            </div>
            <div className='header__pfp'>
                {sessionLinks}
            </div>
        </div>
    )
}

export default Headers
