import Navigation from '../Navigation'
import './Profile.css'

function Profile(){

    return (
        <div>
            

            <div className='pfp__bkg-layer1'>
                <h1>Profile</h1>
                <div className='pfp__info'> 

                    <div className='pfp__image'></div>

                    <div className='pfp__name'></div>

                    <div className='pfp__discription'></div>

                    <div className='pfp__buttons'></div>
                </div>

                <div className='pfp__links-active'></div>

                <div className='pfp__upvotes'></div>

            </div>

        </div>
        
    )
}

export default Profile
