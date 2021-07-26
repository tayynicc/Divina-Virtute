import './UsersProducts.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getOneUser } from '../../store/session'
import { getProducts } from '../../store/products'

function UsersProducts (){

    const dispatch = useDispatch();

    const { id } = useParams()
    const users = useSelector((state) => (state.session[id]))
    const products = useSelector((state) => Object.values(state.product))
    

    console.log(`users:`, users)

    console.log(`products`, products)

    const userProductsIds = users?.Products.map((product) => (
       product.id
    ))
    

    const userProducts = products.filter((product) => (
        userProductsIds.includes(product.id)
    ))

   
    useEffect(() => {
        dispatch(getOneUser(id));
        dispatch(getProducts());
    }, [dispatch])

    

    return (
        <div className='pfp__upvotes'>
            {userProducts.map((product) => (
                <div className='pd__mockup'>
                    <a href={`/products/${product.id}`} className='pd__title'>{product.title}</a>
                    <p className='pd__tagLine'>{product.tagLine}</p>
                    <p className='pd__price'>{`$ ${product.price}`}</p>
                    <a href={`/products/${product.id}/update`}><img className='edit__icons-edit'src="https://img.icons8.com/ios-glyphs/30/000000/edit--v2.png"/>
</a>
                    <img className='edit__icons-delete'src="https://img.icons8.com/material-outlined/24/000000/trash--v1.png"/>
                    <img className='pd__image' src={product.imageUrl}></img>
                </div>    
            ))}
        

        </div> 
    )
}



export default UsersProducts
