// import Navigation from '../Navigation'
// import { getProducts } from '../../store/products'
import './Profile.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router'
import { getOneUser } from '../../store/session'

function Profile(){

    const dispatch = useDispatch();
    const users = useSelector((state) => Object.values(state.session))

    const { id } = useParams()

    useEffect(() => {
        dispatch(getOneUser(id));
    }, [dispatch])

    // console.log(`users profile:`, users.userName)

    const currentUser = users[0]


    console.log(`currentUser`, currentUser.discription)
    
    // const pfpImage = currentUser.find((user) => {
    //     return +id === user.id
    // })

    return (
        <div>
            
            

            <div className='pfp__bkg-layer1'>

                <NavLink to='/home' className='back__button-home profile'>
                    <img className='back__button' src="https://img.icons8.com/plumpy/24/000000/back--v1.png"/>
                </NavLink>
                {users.map((user) => 
                    <div className='pfp__info'> 
                        
                        <div className='pfp__image-div'>
                            {/* <img src={user.imageURL}></img> */}
                            <img className='pfp__image'src='https://divinavitute.s3.us-west-1.amazonaws.com/userDefault-4.png' />
                        </div>

                        <div className='pfp__name'>{user.username}</div>

                        <label className='bio__label'> Biography </label>
                        <div className=''>
                            <p className='user__bio pfp__discription'>{user.discription}</p>
                        </div>

                        <div className='pfp__buttons'>
                            <img src="https://img.icons8.com/ios-glyphs/30/000000/edit--v2.png"/>
                        </div>
                    </div>
                )}
                

                <div className='pfp__links-active'>
                    <a className='profile__newpd'href='/new'>Add Product</a>   
                </div>
                
                {/* <div className='pfp__upvotes'>

                </div> */}

            </div>

        </div>
        
    )
}

export default Profile
