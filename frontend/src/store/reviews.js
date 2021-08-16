import { csurfFetch } from './csrf'


//////// Action Types 


// getting review of a specific product
const SHOW_ONE = '/reviews/setReviews'





////////// Action Creators 



// get review for one product
const oneReview = (review) => ({
    type: SHOW_ONE, 
    review,
})




/////////// Thunk 


export const getOneReview = (id) => async (dispatch) => {
    const response = await fetch(`/api/reviews/${id}`);

    if (response.ok) {
        const review = await response.json();
        dispatch(oneReview(review))
    }
}





// inital state
const initalState = {}


// reducer

const reviewReducer = (state = initalState, action ) => {
    switch (action.type )
}