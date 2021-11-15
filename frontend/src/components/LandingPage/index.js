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

    console.log(user)

    const sessionLinks = (
        <>
          <LoginFormModal />
          <button onClick={(() => demoLogin())}>Demo Login</button>
          <NavLink className='signup_btn' to="/signup">Sign Up</NavLink>
        </>
      );

      if (user) {
        return <Redirect to='/home' />;
      }
  

  
        return(
        <div className='bkg__layer1'>
            {/* <div className='bkg__logo blink' ></div>  */}
            <div className='bkg__layer2'>
                
                {/* <div className='content'>
                    <div className='txt__name'>
                        <h1>Divina Vitute</h1>
                    </div>
                    <div className='txt__phrase'>
                        
                    </div>
                    <div className='links' >
                        {sessionLinks}
                    </div>
                </div> */}
            </div>
        </div>
    )
}






















export default LandingPage;
