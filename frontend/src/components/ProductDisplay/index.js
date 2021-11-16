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
        <div>
            {/* <h2 className='product__display-label'>Products</h2> */}
            <div className='product__display'>
                
                
                
                {products?.map((product) => 
                    <div className='pd__tile-home' key={`${product.title}-${product.id}`}>
{/*                         
                        <a href={`/products/${product.id}`} className='pd__title'>{product.title}</a>
                        <p className='pd__tagLine'>{product.tagLine}</p>*/}
                        <p className='pd__price-home'>{`$ ${product.price}`}</p>
                        <a className='pd__image-home' href={`/products/${product.id}`}><img className='pd__image-home' src={product.imageUrl} alt="BigCo Inc. logo"/></a>
                         
                        
                    </div>
                )} 

                
            </div> 
        </div>
    )
}


















export default ProductDisplay
