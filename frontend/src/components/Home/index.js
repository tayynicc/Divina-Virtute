import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { NavLink } from 'react-router-dom'
import { updatedProducts } from '../../store/products'
import { getOneUser } from '../../store/session'
import './Home.css'





function Home(){
    const dispatch = useDispatch();

    // const { id } = useParams()
    
    
    const products = useSelector((state) => state.product)
    const users = useSelector((state) => (state?.session.user))

    const sessionUser = useSelector((state) => (state?.session))

    console.log(users)
    const userId = users.id 
    console.log(userId)

    // console.log(sessionUser[1].Products)
   
    const currUsersProducts = sessionUser[1]?.Products

    useEffect(() => {
        dispatch(getOneUser(userId));
        dispatch(updatedProducts())
    }, [dispatch, userId])


    const condensedTitle = (title) => {
       let condensed = title.split(',')
       return condensed 
    }
  
    return (
        <div>
            <div className='bkg__login-layer1'>
                <div className='theme'></div>
                
                {/* <h2 className="new__products-label hidden">New Arrivals</h2>     */}
                    
                    <div className='previous'>
                    
                        {products.newest && products.newest.map((product) => (
                        <div className='previous__mockup' key={product.id}>
                            <a href={`/products/${product.id}`}><div><img className='previous__image'src={product.imageUrl}></img></div></a>
                            <a href={`/products/${product.id}`}><div className='previous__name'>{condensedTitle(product.title)}</div></a>
                            <div className='previous__tagLine'>{product.tagLine}</div>
                            <a href={`/products/${product.id}`}><div className='learnMore'>... Learn More </div></a>
                        </div>  
                        ))}
                    </div>

                    <div className='divider' ></div>

    
                {/* <h2 className="users__products-label ">My Products</h2>   
                <div className='newArival'>
                    {currUsersProducts?.map((product) => (
                      <div className='newArrivals__mockup'>
                        <div ><img className='newArival__image' src={product.imageUrl}></img></div>
                        <a href={`/products/${product.id}`}><div className='newArival__name'>{product.title}</div></a>
                        <div className='newArival__tagLine'>{product.tagLine}</div>
                      </div>   
                    ))}
                </div> */}

                
                
            </div>
        </div>
        
    )
}















export default Home;
