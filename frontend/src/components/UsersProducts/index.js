import './UsersProducts.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getOneUser } from '../../store/session'
import { deleteProduct } from '../../store/products'

function UsersProducts (){

    const dispatch = useDispatch();

    const { id } = useParams()

    const users = useSelector((state) => (state?.session[id]))
    
 
    const handleDelete = (id) => {
    
        dispatch(deleteProduct(Number(id)))
            
    }

   
    useEffect(() => {
        dispatch(getOneUser(id));
        
    }, [dispatch, id])


    const titleFormat = (title) => {
        
    }

    

    return (
        <div className='pfp__upvotes'>
            
            {users?.Products?.map((product) => (
                <div className='pd__mockup'>
                    <a href={`/products/${product.id}`} className='pd__title'>{product.title}</a>
                    
                    <p className='pd__price'>{`$ ${product.price}`}</p> 
                    {/* <a href={`/products/${product.id}/update`}><img className='edit__icons-edit' alt='edit users products button' src="https://img.icons8.com/ios-glyphs/30/000000/edit--v2.png"/></a> */}

                    <img alt='users product views' className='pd__image' src={product.imageUrl}></img>
                    
                    {/* <button className='delete__button'onClick={() => handleDelete(+product.id)}><img className='edit__icons-delete' alt='delete user product button' src="https://img.icons8.com/material-outlined/24/000000/trash--v1.png"/></button> */}
                    
                </div>     
            ))}
        

        </div> 
    )
}



export default UsersProducts
