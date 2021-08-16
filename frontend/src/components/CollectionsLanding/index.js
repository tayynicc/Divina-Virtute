import './CollectionsLanding.css'
import Headers from '../Headers'
import { NavLink } from 'react-router-dom'

// import header
// design layout 


function CollectionsLanding(){







    return(
        <div className='collectionsLanding__bkg-layer1'>
            <div>
                <Headers />
            </div>

            <div className='collections__container'>

                {/* these cards will be mapped */}
                <div className='collection__card'>
                    {/* make it so when the card is clicked in any place it will nav to a page displaying the products in that collection, attempted with nav link likely dowith a and put img tag inside */}
                        <div className='collection__title'> Title </div>
                        <div className='collection__image'>
                            <NavLink to='/collection/1'>
                                
                                select colleciton
                            </NavLink>
                        </div>
                    
                    
                    
                </div>

            </div>


            





        </div>     
    )

}


export default CollectionsLanding
