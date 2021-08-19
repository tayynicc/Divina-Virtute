import { csrfFetch } from './csrf';

const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser';

// getting one user 
const SHOW_ONE = 'session/oneUser'

// updating the user
const UPDATE_USER = 'users/updateUser'

const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

const removeUser = () => {
  return {
    type: REMOVE_USER,
  };
};

// getting one user 
const oneUser = (user) => ({
    type:SHOW_ONE,
    user,
})


//update user 
const update = (user) => ({
    type: UPDATE_USER,
    user
})



export const login = (user) => async (dispatch) => {
  const { credential, password } = user;
  const response = await csrfFetch('/api/session', {
    method: 'POST',
    body: JSON.stringify({
      credential,
      password,
    }),
  });
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};


// getting one user 
export const getOneUser = (id) => async (dispatch) => {
	const response = await fetch(`/api/users/${id}`);

	if (response.ok) {
		const user = await response.json();
		dispatch(oneUser(user));
	}
};

export const updateUser = (data) => async (dispatch) => {
    const res = await csrfFetch(`/api/users/${data.id}`, {
        method: 'put',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }); 

    if(res.ok) {
        const userInfo = await res.json();
        dispatch(update(userInfo))
    }
}

const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_USER:
      newState = Object.assign({}, state);
      newState.user = action.payload;
      return newState;
    case REMOVE_USER:
      newState = Object.assign({}, state);
      newState.user = null;
      return newState;
    case SHOW_ONE:
        const userState = {
            ...state,
            [action.user.id]: action.user,
        }
        return userState
    case UPDATE_USER:
        const addState = {
            ...state, 
            [action.user.id]: action.user
        }

        return addState
    default:
      return state;
  }
};

export const restoreUser = () => async dispatch => {
    const response = await csrfFetch('/api/session');
    const data = await response.json();
    dispatch(setUser(data.user));
    return response;
  };


  export const signup = (user) => async (dispatch) => {
    const { username, email, password } = user;
    const response = await csrfFetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });
    const data = await response.json();
    dispatch(setUser(data.user));
    return response;
  };

  export const logout = () => async (dispatch) => {
    const response = await csrfFetch('/api/session', {
      method: 'DELETE',
    });
    dispatch(removeUser());
    return response;
  };
export default sessionReducer;
