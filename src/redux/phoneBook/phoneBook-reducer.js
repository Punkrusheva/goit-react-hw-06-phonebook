import { combineReducers } from "redux";
import actionTypes from "./phoneBook-types";

/*const initialState = {
    items: []
};*/

const itemReducer = (state = [], { type, payload }) => {
    // console.log(payload);
    switch (type) {
        case actionTypes.ADD:
            if (payload.name !== '') {
                if (state.find(state => state.name === payload.name)) {
                    /* this.setState(state => ({ alert: true, alertText: 'Contact is already exist' }));
                     setTimeout(alertFalse, 2500);*/
                    alert("AAAAA!");
                }
                else {
                    return [payload, ...state];
                };
                
            } else {
                /* this.setState(state => ({ alert: true, alertText: 'Contact details empty' }));
                 setTimeout(alertFalse, 2500);*/
                alert('BBBB!!');
            };
    
            /*
        case actionTypes.DELETE:
            return {
                ...state,
               //items: prevState.items.filter(({ id }) => id !== contactId),
            };*/break;
        default:
            return state;
    };
};
/*
const numberReducer = (state = { initialState }, { type, payload }) => {
   // console.log(payload);
    switch (type) {
        case actionTypes.ADD:
            return {
                ...state,
               /* items: [item, ...state.items], }*/
               //contacts: [contact, ...prevState.contacts],
         /*   };
        case actionTypes.DELETE:
            return {
                ...state,
               //items: prevState.items.filter(({ id }) => id !== contactId),
            };
        default:
            return state;
    };
};*/

/*const filterInitialState = {
    contacts: {
        items: [],
        filter: ''
    }
};*/

const filterReducer = (state = '', { type, payload }) => {
  //  console.log(payload);
    switch (type) {
        case actionTypes.FILTER:
            return {
               // filter: e.currentTarget.value,
            };
        default:
            return state;
    };
};

export default combineReducers({
   // name: nameReducer,
    item: itemReducer,
    filter: filterReducer,
});