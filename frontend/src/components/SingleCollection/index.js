import './SingleCollection.css'
import Headers from '../Headers'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'


import { getProducts } from '../../store/products'


function SingleCollection (){
    const dispatch = useDispatch();
    const products = useSelector((state) => Object.values(state.product))


    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])



    return(

        <div className='singleCollection__bkg-layer1'>
            <Headers />

            <div className='singleCollection__product-container'>
                <div className='right__toggle-arrow'></div>
                {/* mapped */}
                {/* not sure how i want to scroll them yet
                    currently thingking large cards 3 per row clicked taken to individual product page with all details
                */}
                <div className='SC__product-card'>
                    <div className='SC__product-image'></div>
                    
                    <div className='SC__product-title'>Title</div>
                
                    
                    
                    <div className='SC__product-tagLine'>Tagline</div>
                </div>
                <div className='left__toggle-arrow'></div>

            </div>


        </div>
        
    )
}







export default SingleCollection
