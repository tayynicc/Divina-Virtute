import './Header.css'
import { useSelector } from 'react-redux';
import ProfileButton from '../Navigation/ProfileButton.js';
import { NavLink } from 'react-router-dom'

function Headers(){


    const sessionUser = useSelector(state => state.session.user);


    
    const sessionLinks = (
        <ProfileButton user={sessionUser} />
        
        // if (sessionUser) return (
        //     <Redirect to="/profile" />
        //   );
      );

     
        
    return (
        <div className='header'>
            <div className='home__logo'></div>
            <div className='home__search'>
                <input type='text' placeholder='Search' className='search__input'></input>   
            </div>
            <button className='search__button'>
                <img className='search__icon' alt='search button' src="https://img.icons8.com/doodle/48/000000/search--v1.png"/>
            </button>

            <NavLink to='/collections' className='collection__link'><img src="https://img.icons8.com/ios/50/000000/collectibles.png"/></NavLink>

            <div className='links__dropdown'><img src="https://img.icons8.com/ios/50/000000/menu--v6.png"/></div>


            {/* make site links into drop down menu  */}

            <div className='home__links'>
                
                {/* direct purchase links drop down */}

                {/* <div>
                    <select>
                        <option value="Etsy"></option>
                    </select>
                </div>
                 */}
                
                
                {/* <NavLink to='https://etsy.me/3i3jl2K' >
                   
                    <img className='header__links etsy__link' alt='site links'src="https://img.icons8.com/clouds/100/000000/etsy.png"/>
                    
                </NavLink>

                <NavLink to='https://crystalgemstoneshop.com/' >
                    <img alt='site links' className='header__links crystal__link ' src="https://img.icons8.com/color/48/000000/crystal.png"/>
                </NavLink>

                <NavLink to='https://selenestone.com/' >
                    <img alt='site links' className='header__links moon__link' src="https://img.icons8.com/ios-filled/50/000000/crescent-moon.png"/>  
                </NavLink> */}
            </div>

            <div className='home__addProduct'>
            
               
              <a className='add__link-header'href='/new'><img className='add__link-header' alt='add product button' src="https://img.icons8.com/ios/50/000000/add--v1.png"/></a>
            
            </div>
            <div className='header__pfp'>
                {sessionLinks}
            </div>
        </div>
    )
}

export default Headers
