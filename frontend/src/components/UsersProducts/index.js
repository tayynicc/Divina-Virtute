import './UsersProducts.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getOneUser } from '../../store/session'

function UsersProducts (){

    const dispatch = useDispatch();

    const { id } = useParams()
    const users = useSelector((state) => (state.session[id]))

    

    useEffect(() => {
        dispatch(getOneUser(id));
    }, [dispatch])

    console.log(`users:`, users)

    return (
        <div className='pfp__upvotes'>
            <div>{users?.Products.map((product) => (
                <p>{product.title}</p>
            ))}</div>
            
            
            {/* {users.map((user) => (
                <div>{user.Products.title}</div>
            ))} */}

            {/* {users.Products.map((product) => (
                <div>{product.title}</div>
            ))} */}

            {/* {users[1].map((product) => (
                <div>{product.title}</div>
            ))} */}



        </div> 
    )
}



export default UsersProducts
