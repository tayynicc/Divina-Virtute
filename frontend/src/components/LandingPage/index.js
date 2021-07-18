// import React, { useState } from 'react';
// import * as sessionActions from '../../store/session';
// import { useDispatch, useSelector } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './LandingPage.css'
import LoginFormModal from '../LoginFormModal';
//  import Navigation from '../Navigation';



const landingPage = () => {


    const sessionLinks = (
        <>
          <LoginFormModal />
          <NavLink to="/signup">Sign Up</NavLink>
        </>
      );

    const onClick = () => {
        // add className of slide to push content div to the left and display modal to the right
    }

    return(
        <div className='bkg__layer1'>
            <div className='bkg__logo blink'></div> 
                <div className='bkg__layer2'>
                    
                    <div className='content'>
                        <div className='txt__name'>
                            <h1>Divina Vitute</h1>
                        </div>
                        <div className='txt__phrase'>
                            <p> phrase </p>
                        </div>
                        <div className='links' onClick="">
                            {sessionLinks}
                        </div>
                    </div>
                    <div className='top__coursel'>


                    </div>
                    <div className='bottom__coursel'>

                    </div>
                </div>
        </div>
    )
}






















export default landingPage;