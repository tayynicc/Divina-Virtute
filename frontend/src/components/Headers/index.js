import './Header.css'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'

function Headers(){

    const sessionUser = useSelector(state => state.session.user);

    const id = sessionUser.id

    

        
    return (

        <>
            <nav class="navMenu navPositon">
                <NavLink to='/home' >Home</NavLink>
                <NavLink to="/guide-stone">Guide Stone</NavLink>
                <NavLink to="/collections">Collections</NavLink>
                <NavLink to={`/profile/${id}`}>Account</NavLink>
                <div class="dot"></div>
            </nav>
        </>

       
    )
}

export default Headers
