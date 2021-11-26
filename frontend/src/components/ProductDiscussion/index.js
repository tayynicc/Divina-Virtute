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
    const [ errors, setErrors ] = useState('')

    const updateReview = (e) => {
        setReview(e.target.value)
        if(review.length <= 0 ){
            setErrors("Input area has no content")
        }
        if (review.length > 0){
            setErrors('')
        }
    }; 
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        if(review.length <= 0 ){
            setErrors("Input area has no content")
        }
        
        
        const payload = {
            userId: sessionUser.id,
            productId: +id,
            review
        }

        
        if(review.length !== 0){
            await dispatch(createReview(payload))
            setReview('')
        }
    }

    const formatDate = (date) => {
        const Transformededited = new Date(date)

        const split = Transformededited.toString().split(" ")

        const d = [split[0], split[1], split[2], split[3]]

        const formattedDate = d.join(" ")  

        const splitTime = split[4].split(":")
        
    
        if(splitTime[0] > 12){
            const hour = splitTime[0] % 12
            const formattedTime = [hour, splitTime[1]].join(":") + " PM" 
            const res = [formattedDate, formattedTime].join(", ")
            return res 


        }


        const formattedTime = [splitTime[0], splitTime[1]].join(":") + " AM" 
        const res = [formattedDate, formattedTime].join(", ") // completed 
        return res
       
    }

 


    const handleDelete = (id) => {
        dispatch(deleteReview(Number(id)))
    }


    useEffect(() => {
        dispatch(getReview(id))
    }, [dispatch, id])
   

    return(
        <div className='comments__container'>
            <div className='product-discussion__label-div'>
                <h4 className='product-display__label'>Let's Taco Bout It...</h4>
            </div>
            <div className='product-discussion__outerDiv'>
                <form onSubmit={handleSubmit} className='commentInput__container'>
                    {errors && (<p className='error_message-review'>{errors}</p>)}
                    <textarea  id='textbox' value={review} onChange={updateReview}className='input__box'></textarea>
                    <button type='submit' className='addComment__button'>Add Comment</button>

                </form>

                <div className='comments__container-outter'>
                    {reviews?.map((review) => 
                        <div className='comment' key={review.id}>
                           
                            <a href={`/profile/${review.User.id}`}><img alt='users profile' className='pfp__image-comment' src={review.User.imageUrl}></img></a>
                           
                            <h4 className='pfp__username'>{review.User.username}</h4>
                            <p className='posted'>{formatDate(review.updatedAt)}</p>
                           
                            <p className='comment__body'>{review.review}</p>
                            
                            <button className='delete__review' onClick={() => handleDelete(+review.id)}><img alt='delete button' className='edit__comment-delete' src="https://img.icons8.com/material-outlined/24/000000/trash--v1.png"/></button>
                            
                        
                        </div>
                    ).reverse()} 
                    
                </div>

            </div>
        </div>
    )

}


export default ProductDisplay;
