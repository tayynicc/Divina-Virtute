import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
// import { getOneUser } from '../../store/session'
// import { getProducts } from '../../store/products'
import { updatedProducts } from '../../store/products'
import './Home.css'
// import Navigation from '../Navigation';




function Home(){
    const dispatch = useDispatch();

    const { id } = useParams()
    // const users = useSelector((state) => (state.session[id]))
    const products = useSelector((state) => Object.values(state.product))
    const sessionUser = useSelector(state => state.session.user);

    // console.log('current user:', sessionUser.id)
    // this is returning the current users id can be used to get products with that user id

    // console.log(`users home display:`, users)

    console.log(`products home display`, products.newest)

    // const userProductsIds = users?.Products.map((product) => (
    //    product.id
    // ))
    

    // const userProducts = products.filter((product) => (
    //     userProductsIds.includes(product.id)
    // ))

   
    useEffect(() => {
        // dispatch(getOneUser(id));
        // dispatch(getProducts());
        dispatch(updatedProducts())
    }, [dispatch])

  
    return (
        <div>
            <div className='bkg__login-layer1'>
                <div className='theme'></div>
                
                <div className='previous'>
                    {products.newest && products.newest.map((product) => (
                      <div className='previous__mockup'>
                        <div className='previous__image'></div>
                        <div className='previous__name'>{product.title}</div>
                        <div className='previous__tagLine'></div>
                    </div>  
                    ))}
                    
                </div>

    

                <div className='newArival'>
                    {/* {userProducts.map((product) => (
                      <div className='newArrivals__mockup'>
                        <div className='newArival__image'></div>
                        <div className='newArival__name'>{product.title}</div>
                        <div className='newArival__tagLine'>{product.tagline}</div>
                      </div>   
                    ))} */}
                </div>

                
                
            </div>
        </div>
        
    )
}















export default Home;
