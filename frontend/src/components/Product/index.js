import './Product.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'


import { getProducts } from '../../store/products'

function Product(){
    const dispatch = useDispatch();
    const products = useSelector((state) => Object.values(state.product))

     

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])

    return (
    <div className='products__bkg-layer1'>
        <div className='product__read-div'>
            {products.map((product) => 
                <div className='pd__display'>
                    <h1 className='product__title'>{product.title}</h1>
                    <div className='product__image-container'>
                        <img className='product__image'src={product.imageUrl}></img>
                    </div>    
                    <h3 className='product__price'>{`$ ${product.price}`}</h3>
                    <p className='product__discription'>{product.discription}</p>
                    <a href={`${product.purchaseLink}`}>Purchase</a>
                </div>
            )}

        </div>
    </div>
    )
}




export default Product;
