import './ProductDiscussion.css'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { useParams} from 'react-router-dom'
import { deleteReview, getReview } from '../../store/reviews'
import { createReview } from '../../store/reviews'



function ProductDisplay(){

    const { id } = useParams()
    const dispatch = useDispatch();
    

    
    const reviews = useSelector((state) => Object.values(state?.review))
    const sessionUser = useSelector(state => state.session?.user);

    const [ review, setReview ] = useState('');

    const updateReview = (e) => setReview(e.target.value); 
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        
        const payload = {
            userId: sessionUser.id,
            productId: +id,
            review
        }

        await dispatch(createReview(payload))
        setReview('')
    }


    const handleDelete = (id) => {
        dispatch(deleteReview(Number(id)))
    }


    useEffect(() => {
        dispatch(getReview(id))
    }, [dispatch, id])
   

    return(
        <div>
            <div className='product-discussion__label-div'>
                <h4 className='product-display__label'>Let's Taco Bout It...</h4>
            </div>
            <div className='product-discussion__outerDiv'>
                <form onSubmit={handleSubmit} className='commentInput__container'>
                    <textarea  id='textbox' value={review} onChange={updateReview}className='input__box'></textarea>
                    <button type='submit' className='addComment__button'>Add Comment</button>

                </form>

                <div className='comments__container-outter'>
                    {reviews?.map((review) => 
                        <div className='comment' key={review.id}>
                           {/* <a href={`/profile/${review.User.id}`}></a> */}
                           <img alt='users profile' className='pfp__image-comment' src={review.User.imageUrl}></img>
                           

                            {/* <a href={`/profile/${review.User.id}`}></a> */}
                            <h4 className='pfp__username'>{review.User.username}</h4>
                            
                            <p className='posted'>{review.updatedAt.toLocaleString()}</p>
                           

                            <p className='comment__body'>{review.review}</p>
                            
        
                            
                        
                            <button className='delete__review' onClick={() => handleDelete(+review.id)}><img alt='delete button' className='edit__comment-delete' src="https://img.icons8.com/material-outlined/24/000000/trash--v1.png"/></button>
                            
                            {/* <img className='edit__comment-edit' src="https://img.icons8.com/ios-glyphs/30/000000/edit--v2.png"/> */}
                    
                        
                        </div>
                    ).reverse()} 
                    
                </div>


            </div>
        </div>
    )

}


export default ProductDisplay;
