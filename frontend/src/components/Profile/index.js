// import Navigation from '../Navigation'
// import { getProducts } from '../../store/products'
import './Profile.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getOneUser } from '../../store/session'

function Profile(){

    const dispatch = useDispatch();
    const users = useSelector((state) => Object.values(state.session))

    const { id } = useParams()

    useEffect(() => {
        dispatch(getOneUser(id));
    }, [dispatch])

    console.log(`users:`, users)



    return (
        <div>
            

            <div className='pfp__bkg-layer1'>
                <h1>Profile</h1>
                {users.map((user) => 
                    <div className='pfp__info'> 

                        <div className='pfp__image'></div>

                        <div className='pfp__name'>{user.username}</div>

                        <div className='pfp__discription'></div>

                        <div className='pfp__buttons'></div>
                    </div>
                )}
                

                <div className='pfp__links-active'></div>

                <div className='add__product-form'>
                    <a href='/'></a>

                </div>
                
                
                {/* <div className='pfp__upvotes'>

                </div> */}

            </div>

        </div>
        
    )
}

export default Profile
