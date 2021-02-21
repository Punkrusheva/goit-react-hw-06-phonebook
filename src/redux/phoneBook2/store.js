import { configureStore, getDefaultMiddleware  } from "@reduxjs/toolkit";
import logger from "redux-logger";
import phoneBookReducer from "./phoneBook-reducer";

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
    reducer: {
    contacts: phoneBookReducer,
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
});

export default store;