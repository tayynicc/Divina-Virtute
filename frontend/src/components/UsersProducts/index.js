import './UsersProducts.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getOneUser } from '../../store/session'

function UsersProducts (){

    const dispatch = useDispatch();
    const users = useSelector((state) => Object.values(state.session))

    const { id } = useParams()

    useEffect(() => {
        dispatch(getOneUser(id));
    }, [dispatch])


    return (
        <div className='pfp__upvotes'>
            {/* {users.map((user) => (
                <div>{users.product}</div>
            ))} */}

        </div> 
    )
}



export default UsersProducts
