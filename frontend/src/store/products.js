import { csrfFetch } from './csrf';


// 6. Define Action Types as Constants 

// getting all products
const SET_PRODUCTS = 'products/setProducts'

// adding one product 
const SHOW_ONE = 'products/oneProduct'

// create product
const ADD_ONE = 'products/addOneProduct'

// update product
const UPDATE_PRODUCT = 'products/updateProduct'







// 5. Define Action Creators 

// getting all products
const setProducts = (products) => ({
    type: SET_PRODUCTS,
    products,
})


// get one product
const oneProduct = (product) => ({
    type: SHOW_ONE,
    product,
});


// create product 
const addOneProduct = (product) => ({
    type: ADD_ONE,
    product,
})



// updateing a single product 
const update = (product) => ({
    type: UPDATE_PRODUCT,
    product,
})






// 4. Define THunks 


// getting all products --> home display
export const getProducts = () => async (dispatch) => {
    const res = await fetch('/api/products')
    const products = await res.json();
    dispatch(setProducts(products))

}

// get one product --> 1 Read
export const getOneProduct = (id) => async (dispatch) => {
	const response = await fetch(`/api/products/${id}`);

	if (response.ok) {
		const product = await response.json();
		dispatch(oneProduct(product));
	}
};



// creating a new product --> 2 CREATE
export const createProduct = data => async dispatch => {
    const response = await csrfFetch(`/api/products`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  
    if (response.ok) {
      const product = await response.json();
      dispatch(addOneProduct(product));
      return product;
    }
  };



// updating product --> 3 UPDATE
export const updateProduct = (data) => async dispatch => {
    const response = await csrfFetch(`/api/products/${data.id}`, {
        method: 'put',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    
    console.log(data)
    if (response.ok) {
        const product = await response.json();
        dispatch(update(product));
        return product;
    }
    };



// 2.  Define an inital states
const initalState = {}

// 1. Define a reducer 

const productReducer = ( state = initalState, action ) => {
    switch (action.type){
        case SET_PRODUCTS:
            return { ...state, ...Object.fromEntries(action.products.map(product => [product.id, product]))}
       
        case SHOW_ONE: 
            // if (!state[action.product.id]) {
				const newState = {
					...state,
					[action.product.id]: action.product,
				};
				// const productList = newState.list.map((id) => newState[id]);
				// productList.push(action.product);
				// newState.list = sortList(productList);
				return newState;
        case ADD_ONE:
        case UPDATE_PRODUCT:
            const addState = {
                ...state,
                [action.product.id]: action.product,
            }; 

            return addState;
			
         default:
            return state; 
    }
}

// 3. Export reducer 
export default productReducer
