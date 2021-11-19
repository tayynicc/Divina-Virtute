import './Slideshow.css'

import {React} from 'react';


import crystal from '../../Images/crystal.jpg'
import crystal2 from '../../Images/crystal-2.jpg'
import crystal3 from '../../Images/crystal-3.jpg'
import crystal4 from '../../Images/crystal-4.jpg'
import crystal5 from '../../Images/crystal-5.jpg'
import crystal6 from '../../Images/crystal-6.jpg'





function Slideshow(){


    return (
        <>      
                <div className="slideshow">
                <div className='text-container hidden'>
                    <h1 className='title'> Divia Virtute</h1>
                    <div className='crysimage'></div>
                    <h3 className='slogan'>The one stop shop for crystals and gems. </h3>
                </div>
                    <div className="container">
                            <section className='section'>
                                <img className='img__1 position' src={crystal} alt='crystals' />
                            </section>
                            <section>
                                <img className='img__1 position' src={crystal2} alt='crystals' />

                            </section>
                            <section>
                                <img className='img__1 position' src={crystal3} alt='crystals' /> 
                            </section>  
                            <section>
                                <img className='img__1 position' src={crystal4} alt='crystals' />
                            </section>
                            <section>
                                <img className='img__1 position' src={crystal5} alt='crystals' />
                        
                        </section> 
                    </div>
     
                </div >
       
            
        </>
    )
}        

export default Slideshow; 
