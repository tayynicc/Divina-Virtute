
import './Home.css'
// import Navigation from '../Navigation';





function Home(){

    return (
        <div>
            <div className='bkg__login-layer1'>
                <div className='theme'></div>
                
                <div className='header'></div>
                    <div className='home__logo'></div>
                    <div className='home__search'></div>
                    <div className='home__links'></div>
                    <div className='home__addProduct'></div>
                    <div className='home__pfp'></div>
                
                <div className='previous'>
                    <div className='previous__mockup'>
                        <div className='previous__image'></div>
                        <div className='previous__name'></div>
                        <div className='previous__tagLine'></div>
                    </div>
                </div>

                <div className='product__display'>
                    <div className='pd__mockup'>
                        <div className='pd__image'></div>
                        <div className='pd__name'></div>
                        <div className='pd__tagLine'></div>
                        <div className='pd__commentNum'></div>
                        <div className='pd__tag'></div>
                        <div className='pd__voteCount'></div>
                    </div>
                </div>

                <div className='newArival'>
                    <div className='newArival__image'></div>
                    <div className='newArival__name'></div>
                    <div className='newArival__tagLine'></div>
                </div>

                
                
            </div>
        </div>
        
    )
}















export default Home;