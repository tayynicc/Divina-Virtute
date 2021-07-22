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

    const singleProduct = products.find(product => product.id === +id)

    // let singleProduct;
    // console.log(id)
    
    // products.map(product => {
    //     if (product.id === id){

    //     }
    // })

    
    console.log("SINGLE AZZ PRODUCT", singleProduct)
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
            {/* <h1 className='product__title'>{singleProduct.title}</h1> */}
            {products.map((product) => 
                <div className='pd__display'>
                    
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
