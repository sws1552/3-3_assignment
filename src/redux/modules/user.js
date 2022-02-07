import { createAction, handleActions } from "redux-actions";
import {produce} from "immer";

import {setCookie, getCookie, deleteCookie} from "../../shared/Cookie";


// actions
const SET_USER = "SET_USER";
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";

// action creators
const setUser = createAction(SET_USER, (user) => ({user}));
const getUser = createAction(GET_USER, (user) => ({user}));
const logOut = createAction(LOG_OUT, (user) => ({user}));

// initialState
const initialState = {
    user: null,
    is_login: false,
}

// middleware actions




// reducer
export default handleActions({

    [SET_USER]: (state, action) => produce(state, (draft) => {
        setCookie("is_login", "success");
        draft.user = action.payload.user;
        draft.is_login = true;
    }),
    [LOG_OUT]: (state, action) => produce(state, (draft) => {
        deleteCookie("is_login");
        draft.user = null;
        draft.is_login = false;
    }),
    [GET_USER]: (state, action) => produce(state, (draft) => {
    
    })

}, initialState);


// action creator export
const actionCreators = {
    setUser,
    getUser,
    logOut,
}


export {actionCreators};










