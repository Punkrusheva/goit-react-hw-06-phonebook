import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import types from "./phoneBook-types";
import 'react-toastify/dist/ReactToastify.css';

const items = createReducer([], {
    'contacts/add': (state, { payload }) => [payload, ...state],

    'contacts/delete': (state, { payload }) => state.filter(({ id }) => id !== payload)
});


const filter = (state = '', { type, payload }) => {
    switch (type) {
        case types.CHANGE_FILTER:
            return payload;
        
        default:
            return state;
    };
};

export default combineReducers({
    items,
    filter,
});