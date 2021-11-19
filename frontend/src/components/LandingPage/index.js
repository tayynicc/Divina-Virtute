import { NavLink, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import './LandingPage.css'
import LoginFormModal from '../LoginFormModal';

import { login } from '../../store/session';


const LandingPage = () => {

    
    const user = useSelector(state => state.session.user);
    
    const dispatch = useDispatch()

    const demoLogin = () => {
        let demoUser = ['demo@user.io', 'password']
        dispatch(login(demoUser));
    }


    const sessionLinks = (
        <>
          <LoginFormModal />
          <button className='demoLogin__button' onClick={(() => demoLogin())}>Demo Login</button>
          <NavLink className='signup_btn' to="/signup">Sign Up</NavLink>
        </>
      );

      if (user) {
        return <Redirect to='/home' />;
      }
  

  
        return(
        <div className='bkg__layer1'>

            <div className='landing-header'>
                {sessionLinks}
            </div>


            <div className='dev_Footer'>
                <h3>Get to know your Developer! </h3>
                <NavLink className='github__link' to='https://github.com/tayynicc'><img src="https://img.icons8.com/material-rounded/24/ffffff/github.png"/></NavLink>
                <NavLink className='linkedin__link' to='https://www.linkedin.com/in/taylor-walker-5916a520a/'><img src="https://img.icons8.com/ios-glyphs/30/ffffff/linkedin.png"/></NavLink>
            </div>
        </div>
    )
}






















export default LandingPage;
