import './Product.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { NavLink } from 'react-router-dom'

import ProductDiscussion from '../ProductDiscussion'


import { getOneProduct } from '../../store/products'


function Product(){
    const dispatch = useDispatch();
    const products = useSelector((state) => Object.values(state.product))

    const { id } = useParams()

  

    useEffect(() => {
        dispatch(getOneProduct(id));
    }, [dispatch, id])

    return (
    <div className='products__bkg-layer1'>
        
        <div className='product__read-div'>
            {products.map((product) => 
                <div className='pd__display'>
                    <h1 className='product__title'>{product.title}</h1>

                    <div className='product__image-container'>
                        <img alt='product' className='product__image'src={product.imageUrl}></img>
                    </div>

                    <div className='price__container'>
                        <a className='product__price' href={`${product.purchaseLink}`}>{`$ ${product.price}`}</a>
                    </div>

                    
                    <div className='product__discription-container'>
                        <p className='product__discription'>{product.discription}</p>
                    </div> 
                </div>
            )}
            <ProductDiscussion />
        </div>

        {/* {products.map((product) => 
            <div className='product__purchase'>
                <a className='link grow' href={`${product.purchaseLink}`}>Purchase</a>
            </div>
        )} */}

    </div> 
    )
}                
                
   



export default Product;
