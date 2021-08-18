import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updatedProducts } from '../../store/products'
import './Home.css'





function Home(){
    const dispatch = useDispatch();

    
    
    const products = useSelector((state) => state.product)
    

    


   
    useEffect(() => {
     
        dispatch(updatedProducts())
    }, [dispatch])

  
    return (
        <div>
            <div className='bkg__login-layer1'>
                <div className='theme'></div>
                
                <h2 className="new__products-label hidden">New Additions</h2>    
                    <div className='previous'>
                    
                        {products.newest && products.newest.map((product) => (
                        <div className='previous__mockup' key={product.id}>
                            <div><img className='previous__image'src={product.imageUrl}></img></div>
                            <a href={`/products/${product.id}`}><div className='previous__name'>{product.title}</div></a>
                            <div className='previous__tagLine'>{product.tagLine}</div>
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
