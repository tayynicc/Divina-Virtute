import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import * as sessionActions from '../../store/session';
import './Navigation.css'
import { useHistory } from 'react-router-dom'


function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const history = useHistory()

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
    history.push('/')
  };

 
  return (
    <>
        <div className='home__pfp'>
          <button className='profile__icon-button'onClick={openMenu}>
          <img className='icon' src="https://img.icons8.com/ios/50/000000/user--v1.png"/>
          </button>
        </div>  
        {showMenu && (
          <ul className="profile-dropdown nav__dropdown">
            {/* <li><button ></button></li> */}
            <li><NavLink className='label' to={`/profile/${sessionUser.id}`}>Profile</NavLink></li>
            {/* <li><button className='label'href='/home'>Home</button></li> */}
            <li>
              <button className='label logout__button'onClick={logout}>Log Out</button>
            </li>
          </ul>
        )}
      
    </>
  );
}

export default ProfileButton;
