import './ProductDisplay.css'
import { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { useParams } from 'react-router-dom'
import { getOneProduct } from '../../store/products'


function ProductDisplay(){

    const { id } = useParams()
    const dispatch = useDispatch();
    const products = useSelector((state) => Object.values(state.product))
    
    let review = products.map((product) => product.Reviews?.review)

    console.log('review', review)

    useEffect(() => {
        dispatch(getOneProduct(id));

    }, [dispatch])

    // bring in Rewiews and use the id brought in from get one product to get the r

    // rout to get review of specific products by route that take in id from getOneProduct
    // use to pull info 

    return(
        <div>
            <div className='product-discussion__label-div'>
                <h4 className='product-display__label'>Let's Taco Bout It...</h4>
            </div>
            <div className='product-discussion__outerDiv'>
                <div className='commentInput__container'>
                    <textarea className='input__box'></textarea>
                    <button type='submit' className='addComment__button'>Add Comment</button>

                </div>

                <div className='comments__container-outter'>
                    {products.map((product) => 
                        <div className='comment'>
                            {/* <div className='pfp__image-comment'><img src={product.Reviews?.userId.User.imageUrl}></img></div> */}
                            <div className='posted'>Posted At</div>
                            {/* how do i use this to get all the way into the users table to get user name */}
                            <div className='pfp__username'>{product?.Reviews.userId}</div>
                            <div className='commet__body'>{product?.Reviews.review}</div>
                            <div className='edit__comment-tools'> edit tools</div>
                        </div>
                    )}
                    
                </div>


            </div>
        </div>
    )

}


export default ProductDisplay;