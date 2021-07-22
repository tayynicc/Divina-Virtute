import './ProductDisplay.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'


import { getProducts } from '../../store/products'





function ProductDisplay(){
    const dispatch = useDispatch();
    const products = useSelector((state) => Object.values(state.product))

    

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])

  

    return(
        <div className='product__display'>
            
               
            {products.map((product) => 
                <div className='pd__mockup'>
                    
                    <a href='/product' className='pd__title'>{product.title}</a>
                    <p className='pd__tagLine'>{product.discription}</p>
                    <p className='pd__price'>{`$ ${product.price}`}</p>
                    <img className='pd__image' src={product.imageUrl} alt="BigCo Inc. logo"/>
                    
                    
                </div>
            )} 

            
        </div> 
        
    )
}


















export default ProductDisplay
