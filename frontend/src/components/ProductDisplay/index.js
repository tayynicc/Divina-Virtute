import './ProductDisplay.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'


import { getProducts } from '../../store/products'





function ProductDisplay(){
    const dispatch = useDispatch();
    const products = useSelector((state) => Object.values(state.product))

    
    // console.log(products)

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])

  

    return(
        <div className='product__display'>
            
               
            {products?.map((product) => 
                <div className='pd__mockup' key={`${product.title}-${product.id}`}>
                    
                    <a href={`/products/${product.id}`} className='pd__title'>{product.title}</a>
                    <p className='pd__tagLine'>{product.tagLine}</p>
                    <p className='pd__price'>{`$ ${product.price}`}</p>
                    <img className='pd__image' src={product.imageUrl} alt="BigCo Inc. logo"/>
                    
                    
                </div>
            )} 

            
        </div> 
        
    )
}


















export default ProductDisplay
