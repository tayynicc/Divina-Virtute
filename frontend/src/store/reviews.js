import { csrfFetch } from './csrf'


//////// Action Types 


// getting review of a specific product
const SHOW_ONE = '/reviews/oneReview'


// adding one review 
const ADD_ONE = 'reviews/addOneReview'

// remove review 
const REMOVE_REVIEW = 'reviews/removeReview'




////////// Action Creators 



// get review for one product
const oneReview = (review) => ({
    type: SHOW_ONE, 
    review,
})

// new review 
const addOneReview = (review) => ({
    type: ADD_ONE,
    review,
})

const removeReview = (review) => ({
    type: REMOVE_REVIEW,
    review
})



/////////// Thunk 


// get reviews for one project 
export const getReview = (id) => async (dispatch) => {
    const response = await fetch(`/api/reviews/${id}`);

    if (response.ok) {
        const review = await response.json();
        dispatch(oneReview(review))
    }
}



// Create review for a product 

export const createReview = data => async (dispatch) => {
    const response = await csrfFetch('/api/reviews', {
        method:'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })

    if(response.ok) {
        const review = await response.json();
        dispatch(addOneReview(review))
    }
}

// deleting a review 
export const deleteReview = (reviewId) => async dispatch => {
    const response = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: 'delete'
    });

    if(response.ok){
        dispatch(removeReview(reviewId))
    }


    return response
}


// inital state
const initalState = {}


// reducer

const reviewReducer = (state = initalState, action ) => {
    switch (action.type){
        case SHOW_ONE: 
            const newState = {
                ...state,

            };
            action.review.forEach((ele) => newState[ele.id] = ele)
            return newState;
        case ADD_ONE:
        // case UPDATE_REVIEW:
            const addState = {
                ...state,
                [action.review.id]: action.review,
            }; 

            return addState;
        case REMOVE_REVIEW:
            delete state[action.productId]
            return{...state};
        default:
            return state;
    }
}


export default reviewReducer
