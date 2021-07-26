import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import './Home.css'
// import Navigation from '../Navigation';




function Home(){
  
    return (
        <div>
            <div className='bkg__login-layer1'>
                <div className='theme'></div>
                
                <div className='previous'>
                    <div className='previous__mockup'>
                        <div className='previous__image'></div>
                        <div className='previous__name'></div>
                        <div className='previous__tagLine'></div>
                    </div>
                </div>

                <div className='newArival'>
                    <div className='newArrivals__mockup'>
                        <div className='newArival__image'></div>
                        <div className='newArival__name'></div>
                        <div className='newArival__tagLine'></div>
                    </div>    
                </div>

                
                
            </div>
        </div>
        
    )
}















export default Home;
