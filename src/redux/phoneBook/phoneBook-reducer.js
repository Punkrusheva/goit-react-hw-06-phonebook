import { combineReducers } from "redux";
import types from "./phoneBook-types";

const items = (state = [], { type , payLoad } ) => {
    switch (type) {
        case types.ADD:
            return [payLoad, ...state];
            
           
        case types.DELETE:
            return state.filter(({ id }) => id !== payLoad);
        
        default:
            return state;
    };
};

const filter = (state = '', { type, payLoad }) => {
    switch (type) {
        case types.CHANGE_FILTER:
            return payLoad;
        
        default:
            return state;
    };
};

export default combineReducers({
    items,
    filter,
});