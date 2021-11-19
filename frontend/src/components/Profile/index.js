// import Navigation from '../Navigation'
// import { getProducts } from '../../store/products'
import './Profile.css'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router'
import { getOneUser, updateUser } from '../../store/session'

function Profile(){

    const dispatch = useDispatch();
    const users = useSelector((state) => Object.values(state?.session))

    const { id } = useParams()


    useEffect(() => {
        dispatch(getOneUser(id));

    }, [dispatch, id])

   
    
   

    return (
        <div>
            
            <div className='pfp__bkg-layer1'>

                {/* <div className='info-container'>
                    {users.map((user) => 
                        <div className='pfp__info'> 
                            
                            <div className='pfp__image-div'>
                                <img  className='pfp__image' src={user.imageUrl} />
                            </div>

                            <div className='pfp__name'>{user.username}</div>

                            <label className='bio__label'> Biography </label>
                            <div className=''>
                                <p className='user__bio pfp__discription'>{user.discription}</p>
                            </div>

                            
                        </div>
                    )}
                </div> */}

                
                {/* <div className='update__userInformaiton'>
                    <form onSubmit={handleSubmit}>
                        <label className='update__user-userName'>Name</label>
                        <input type='text' value={name} onChange={updateName}></input>

                        <label className='update__user-description'>Description</label>
                        <input type='text' value={discription} onChange={updateDiscription}></input>

                        <label className='update__user-imageUrl'>Image Url</label>
                        <input type='text' value={imageUrl} onChange={updateImageUrl}></input>

                        <button type="submit" className=''>Update</button>
                    
                    </form>

                </div> */}
{/* 
                <div className='pfp__links-active'>
                    <a className='profile__newpd'href='/new'>Add Product</a>   
                </div>
                 */}
               

            </div>

        </div>
        
    )
}

export default Profile
