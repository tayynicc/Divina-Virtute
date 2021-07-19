import './Slideshow.css'
import crystal from '../../Images/crystal.jpg'
import crystal2 from '../../Images/crystal-2.jpg'
import crystal3 from '../../Images/crystal-3.jpg'
import crystal4 from '../../Images/crystal-4.jpg'
import crystal5 from '../../Images/crystal-5.jpg'
import crystal6 from '../../Images/crystal-6.jpg'





function Slideshow(){
    

    return (
        <div className='bkg__layer3-coursel'>
            <div className='top__coursel fill'>
                <div className='img__container slide position'>
                    <img className='img__1 position' src={crystal} alt='crystals' />
                    <img className='img__1 position' src={crystal2} alt='crystals' />
                    <img className='img__1 position' src={crystal3} alt='crystals' /> 
                </div>
            
            </div>
            <div className='bottom__coursel fill'>
                <div className='img__container-bottom slide position'>
                    <img className='img__1 position' src={crystal4} alt='crystals' />
                    <img className='img__1 position' src={crystal5} alt='crystals' />
                    <img className='img__1 position' src={crystal6} alt='crystals' />
                </div>
               
            </div>
                    
        </div>
    )
}




export default Slideshow; 