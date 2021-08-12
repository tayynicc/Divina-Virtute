import './SingleCollection.css'
import Headers from '../Headers'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { NavLink } from 'react-router-dom'

import { getCollectionProduct } from '../../store/products'


function SingleCollection (){
    const { id } = useParams()
    const dispatch = useDispatch();
    const products = useSelector((state) => Object.values(state.product).filter((ele) => ele.id === +id))

    useEffect(() => {
        dispatch(getCollectionProduct(id));
    }, [dispatch])

   



    

    const name = 'Angel Phantom Quartz'
    function bubblelables(name){
    //    const names = products.map((product) =>  product.title)

    //    const letters = names.map((name) => name.split(''))
    //    return letters

        const letters = name.split('')
        console.log(letters)
        return letters

    }


    function identifyLetter(arr){

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

                {products.map((product) => 
                     <a href={`/products/${product.id}`}><img className='image__bubble' src={product.imageUrl}></img></a>
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
