import { NavLink } from 'react-router-dom';
import './LandingPage.css'
import LoginFormModal from '../LoginFormModal';




const landingPage = () => {


    const sessionLinks = (
        <>
          <LoginFormModal />
          <NavLink className='signup_btn' to="/signup">Sign Up</NavLink>
        </>
      );

  

  
        return(
        <div className='bkg__layer1'>
            <div className='bkg__logo blink' >
            </div> 
                <div className='bkg__layer2'>
                    
                    <div className='content'>
                        <div className='txt__name'>
                            <h1>Divina Vitute</h1>
                        </div>
                        <div className='txt__phrase'>
                            
                        </div>
                        <div className='links' >
                            {sessionLinks}
                        </div>
                    </div>
                </div>

        </div>
    )
}






















export default landingPage;
