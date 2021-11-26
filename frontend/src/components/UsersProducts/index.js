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


    // const titleFormat = (title) => {
    //     console.log(222, title.length)
    //     if(title.length >= 17){
    //     // console.log(333, title)

    //         for(let i = 0; i <= title.length; i++){
    //             let limit = 16;
    //             // console.log(444, title.length, title)
    //             // console.log(555, i)
    //                 // console.log(`!!!!!`, title[i])

    //             if(i === limit){
    //                 console.log(`!!!`, i)
    //                 const 
    //                 const idx = title.splice(title[i])
    //                 console.log(`$$$`,idx)
    //                 // let reformatted = title.splice()
    //                 console.log(`&&`,title.split(title[i]))
    //                 // console.log(111,title)
    //                 // return title.join()
    //             }
    //         }
    //     }
    //     return title
    // }

// console.log(titleFormat('Beginners Crystal Kit, 10 pcs In Velvet Pouch'))
    

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
