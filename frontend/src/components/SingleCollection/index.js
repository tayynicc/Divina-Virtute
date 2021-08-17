import './SingleCollection.css'
import Headers from '../Headers'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'

import { getCollectionProduct } from '../../store/products'


function SingleCollection (){
    const { id } = useParams()
    const dispatch = useDispatch();
    
    const products = useSelector((state) => Object.values(state.product))

    

    useEffect(() => {
        dispatch(getCollectionProduct(id));
    }, [dispatch, id])


    
    const product = products.filter((ele) => ele.collectionId === +id)
  



    

 
    
    
    function bubblelables(name){
        const letters = name.split('')
        return letters

    }


    


    return(

        <div className='singleCollection__bkg-layer1'>
            <Headers />

            <div className='singleCollection__product-container'>
                <div className='right__toggle-arrow'></div>
                {/* mapped */}
                {/* not sure how i want to scroll them yet
                    currently thingking large cards 3 per row clicked taken to individual product page with all details
                */}
{/* 
                {products.map((product) => 
                    <div className='SC__product-card'>
                        <img className='SC__product-image' src={product.imageUrl}></img>
                        
                        <div className='SC__product-title'>{product.title}</div>
                    
                        
                        
                        <div className='SC__product-tagLine'>{product.tagLine}</div>
                    </div>
                )} */}

               

                {product.map((item) => 
                     <a href={`/products/${item.id}`}><img className='image__bubble' alt='view items' src={item.imageUrl}></img></a>
                )}
                
                    <div className='bubbleLabels letters' >{bubblelables('Angel Phantom Quartz')}</div>

                    {bubblelables('Angel Phantom Quartz').map((letter) => 
                        <div className='letter rotate'>{letter}</div>

                        // {function identifyLetter()}
                    )}
               
               
                

            </div>


        </div>
        
    )
}







export default SingleCollection
