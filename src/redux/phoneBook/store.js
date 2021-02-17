import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReducer from "./phoneBook-reducer";

const rootReducer = combineReducers({
    phoneBook: contactsReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;