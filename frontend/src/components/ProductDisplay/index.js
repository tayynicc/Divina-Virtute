import './ProductDisplay.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// import thunk creator 
import { getProducts } from '../../store/products'





function ProductDisplay(){
    const dispatch = useDispatch();
    const products = useSelector((state) => Object.values(state.product))

    // console.log(products)

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])

    // const product={products}

    return(
        <div className='product__display'>
            
               
            {products.map((product) => 
                <div className='pd__mockup'>
                    {/* <img src={product.imageUrl} alt="BigCo Inc. logo"/> */}
                    <a href='/product' className='pd__title'>{product.title}</a>
                    <p>{product.discription}</p>
                    <p className='pd__price'>{product.price}</p>
                </div>
            )} 

            
        </div> 
        
    )
}


















export default ProductDisplay
