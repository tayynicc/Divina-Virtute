import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import * as sessionActions from '../../store/session';
import './Navigation.css'


function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const sessionUser = useSelector(state => state.session.user);
  
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
          <ul className="profile-dropdown nav__dropdown">
            {/* <li><button ></button></li> */}
            <li><NavLink className='label' to={`/profile/${sessionUser.id}`}>Profile</NavLink></li>
            {/* <li><button className='label'href='/home'>Home</button></li> */}
            <li>
              <a href='/' className='label logout__button'onClick={logout}>Log Out</a>
            </li>
          </ul>
        )}
      
    </>
  );
}

export default ProfileButton;
