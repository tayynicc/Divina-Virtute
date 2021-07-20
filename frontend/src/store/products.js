
// 6. Define Action Types as Constants 
const SET_PRODUCTS = 'products/setProducts'
// 5. Define Action Creators 
const setProducts = (products) => ({
    type: SET_PRODUCTS,
    products,
})

// 4. Define THunks 
export const getProducts = () => async (dispatch) => {
    const res = await fetch('/api/products')
    const products = await res.json();
    dispatch(setProducts(products))

}

// 2.  Define an inital states
const initalState = {}

// 1. Define a reducer 

const productReducer = ( state = initalState, action ) => {
    switch (action.type){
        case SET_PRODUCTS:
            return { ...state, ...Object.fromEntries(action.products.map(product => [product.id, product]))}
        default:
            return state; 
    }
}

// 3. Export reducer 
export default productReducer
