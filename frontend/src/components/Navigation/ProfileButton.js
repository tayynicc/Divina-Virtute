import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import './Navigation.css'


function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    <Redirect to='/' />
  };

 
  return (
    <>
        <div className='home__pfp'>
          <button className='profile__icon-button'onClick={openMenu}>
            <i className="fas fa-user-circle" />
          </button>
        </div>  
        {showMenu && (
          <ul className="profile-dropdown">
            <li><a className='nav__dropdown'href='/profile'>Profile</a></li>
            <li><a className='nav__dropdown'href='/home'>Home</a></li>
            <li>
              <button className='nav__dropdown logout__button'onClick={logout}>Log Out</button>
            </li>
          </ul>
        )}
      
    </>
  );
}

export default ProfileButton;
