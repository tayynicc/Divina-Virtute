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
                {product.map((item) => 
                     <a href={`/products/${item.id}`}><img className='image__bubble' alt='view items' src={item.imageUrl}></img></a>
                )}
            </div>


        </div>
        
    )
}







export default SingleCollection
