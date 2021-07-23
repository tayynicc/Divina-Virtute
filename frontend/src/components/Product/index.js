import './Product.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'


import { getOneProduct } from '../../store/products'
import { getProducts } from '../../store/products'

function Product(){
    const dispatch = useDispatch();
    const products = useSelector((state) => Object.values(state.product))

    const { id } = useParams()

    // const singleProduct = products.find(product => product.id === +id)

    // let singleProduct;
    // console.log(id)
    
    // products.map(product => {
    //     if (product.id === id){

    //     }
    // })
    
    // console.log("SINGLE AZZ PRODUCT", singleProduct)
    // console.log(products)

    // useEffect(() => {
    //     dispatch(getProducts());
    // }, [dispatch])

    useEffect(() => {
        dispatch(getOneProduct(id));
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

                    <div className='price__container'>
                        <h3 className='product__price'>{`$ ${product.price}`}</h3>
                    </div>

                    
                    <div className='product__discription-container'>
                        <p className='product__discription'>{product.discription}</p>
                    </div>
                    

                </div>
            )}

        </div>

        {products.map((product) => 
            <div className='product__purchase'>
                <a href={`${product.purchaseLink}`}>Purchase</a>
            </div>
        )}
    </div> 
    )
}                
                
   



export default Product;